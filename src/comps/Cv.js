import React, { Component } from "react"
import uniqid from "uniqid";
import Form from "./Form";
import SchoolForm from './SchoolForm'
import CompanyForm from "./CompanyForm";
import Cv_Preview from "./Cv_preview";

class Cv extends Component {
    constructor() {
        super()
        this.state = {
            id: uniqid(),
            name: "Avi Cohen",
            title: "Software engineer",
            email: "bigdog@gmail.com",
            phone: "0542313112",
            city: "London, UK",
            bio: "Software Enginer from Scotland, have 5 degrees from MIT and I love solving problems, HATE SQL but am a wizard at it",
            schools: [
                {
                    id: uniqid(),
                    school: "Croford",
                    school_title: 'B.SC in Computer Science',
                    school_start: "2016",
                    school_end: "2018"
                }],
            jobs: [
                {
                    id: uniqid(),
                    job: "Intel (London) ",
                    job_title: "Software engineer",
                    job_start: "2012",
                    job_end: "2019",
                    job_bio: "I maintained the ICP EU unit and was a a lead Dev ensuring that the team will hit marks by deadlines"
                }
            ],

        }

    }

    // setAll = (obj, val) => Object.keys(obj).forEach(k => obj[k] = val);

    removeEntry = (id, arr) => {
        let filtered = this.state[arr].filter(e => { return e.id !== id })
        this.setState({ [arr]: filtered })
    }

    addEntry = (subject) => {

        let copy = {}
        if (subject === 'schools') {
            copy = {
                id: uniqid(),
                school: "",
                school_title: "",
                school_date: "",
            }
        }
        else if (subject === 'jobs') {
            copy = {
                id: uniqid(),
                job: "",
                job_title: "",
                job_start: "",
                job_end: ""

            }
        }


        this.setState({ [subject]: [...this.state[subject], copy] })

    }
    handleAddClick = (e) => {
        let subject = e.target.getAttribute('name')
        this.addEntry(subject)
    }

    handleChange = (e) => {

        let text = e.target.value
        let field = e.target.getAttribute('name')
        let arrayID = e.target.parentNode.parentNode.getAttribute('a-id')


        let arrayName = e.target.parentNode.parentNode.getAttribute('name')
        let targetArray = this.state[arrayName].filter(e => { return e.id === arrayID })
        let OtherArrays = this.state[arrayName].filter(e => { return e.id !== arrayID })
        targetArray = targetArray[0]
        targetArray[field] = text


        this.setState({ [arrayName]: [...OtherArrays, targetArray] })

    }

    handlePersonal = (e) => {
        let text = e.target.value
        let field = e.target.getAttribute('name')
        this.setState({ [field]: text })
    }



    render() {
        return (<div className="wrapper">

            <main className="dvider">
                <div className="cv_creator">
                    <form className="page">

                        <Form key={this.state.id} handler={this.handlePersonal} personalData={this.state} />

                        <div onChange={this.handleChange}>
                            {this.state.schools.map(s => <SchoolForm key={s.id} removeEntry={this.removeEntry} schoolData={s} > </SchoolForm>)}

                            <div className="btn " onClick={this.handleAddClick} name="schools" > Add Education  </div>
                            {this.state.jobs.map(j => <CompanyForm key={j.id} removeEntry={this.removeEntry} jobsData={j} > </CompanyForm>)}
                            <div className="btn" onClick={this.handleAddClick} name="jobs" > Add Work Experince  </div>
                        </div>

                    </form>

                </div >
                <div className="cv_preview">
                    <Cv_Preview data={this.state} />
                </div>
            </main>

            <footer className="footer">
                <a href="https://github.com/oxedom"> Github </a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            </footer>
        </div>)
    }
}


export default Cv;

