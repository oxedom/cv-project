import React, { Component } from "react";
import Header from "./header";
import SchoolForm from './SchoolForm'
import uniqid from "uniqid";
import '../styles/styles.css'
class Form extends Component {
    constructor() {
        super()

        this.state = {

            name: "Sam",
            mail: "bigdog@gmail.com",
            number: "0542313112",
            schools: [
                {
                    school: "Croford",
                    school_title: 'Software Engginer',
                    school_date: "2014-2016"
                }
            ],
            jobs: [
                {}
            ],
        }

    }

    updateState = (prop, value) => {
        this.setState({ [prop]: value })
    }

    handleChange = (e) => {
        let field = e.target.getAttribute('name')
        let text = e.target.value
        this.setState({ [field]: text })
    }

    handleSubmit = (e) => {
        e.preventDefault()

    }

    handleSchoolclick = (e) => {
        e.preventDefault()
        this.setState({ schools: this.state.schools.concat({ id: uniqid() }) })

    }



    render() {
        const { name, mail, number, schools } = this.state
        return (<div className="wrapper">

            <Header> </Header>
            <div className="dvider">

                <form>

                    <div className="form-box">

                        <div className="form-inputs">
                            <h2> Personal Info</h2>
                            <input placeholder="name" onChange={this.handleChange} name="name" value={name} type='text' maxLength={30} />
                            <input placeholder="mail" onChange={this.handleChange} name="mail" value={mail} type='text' maxLength={30} />
                            <input placeholder="phone" onChange={this.handleChange} name="number" value={number} type='text' maxLength={12} />
                        </div>

                        {schools.map(el => <SchoolForm a-key={el.id} key={el.id}> </SchoolForm>)}
                        <button onClick={this.handleSchoolclick}> + Education </button>
                    </div>

                </form >

                <div className="cv_preview" >
                    <h2> {name}</h2>
                    <p> {mail}</p>
                    <p> {number}</p>

                    {/* need to make this dyanmic for many schools */}
                    <h2> {schools[0].school}</h2>
                    <p> {mail}</p>
                    <p> {number}</p>
                </div>
            </div>
            <footer className="footer"> </footer>
        </div>)
    }
}

export default Form;



