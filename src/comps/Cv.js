import React, { Component } from "react"
import uniqid from "uniqid";
import Header from "./header";
import Form from "./Form";
import SchoolForm from './SchoolForm'
import CompanyForm from "./CompanyForm";
class Cv extends Component {
    constructor() {
        super()
        this.state = {
            name: "Sam",
            mail: "bigdog@gmail.com",
            number: "0542313112",
            schools: [
                {
                    id: uniqid(),
                    school: "Croford",
                    school_title: 'Software Engginer',
                    school_date: "2014-2016",
                }],
            jobs: [
                {
                    id: uniqid(),
                    job: "Intel",
                    job_title: "Software Dev",
                    job_date: "2012-2016"
                }
            ],

        }

    }


    handleChange = (e) => {

        let text = e.target.value
        let field = e.target.getAttribute('name')
        let element_id = e.target.parentNode.parentNode.getAttribute('a-id')
        console.log(text, field, element_id);
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (<div className="wrapper">
            <Header></Header>
            <main className="dvider">
                <div className="cv_creator">
                    <form onSubmit={this.handleSubmit}>
                        <Form handleChange={this.handleChange}></Form>
                        {/* <button className="btn"> </button> */}
                        {this.state.schools.map(s => <SchoolForm handleChange={this.handleChange} schoolData={s} > </SchoolForm>)}
                        {this.state.jobs.map(s => <CompanyForm handleChange={this.handleChange} schoolData={s} > </CompanyForm>)}
                    </form>

                </div >
                <div className="cv_preview">


                </div>


            </main>

            <footer className="footer"> </footer>
        </div>)
    }
}


export default Cv;

