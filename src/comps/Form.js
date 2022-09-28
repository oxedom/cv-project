import React, { Component } from "react";
import SchoolForm from './SchoolForm'
class Form extends Component {
    constructor() {
        super()

        this.state = {

            name: "",
            mail: "",
            number: "",
            schools: [],
            jobs: []

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



    render() {
        const { name, mail, number, schools } = this.state
        return (<div>
            <form onSubmit={this.handleSubmit}>

                <input onChange={this.handleChange} name="name" value={name} type='text' maxLength={30} />
                <input onChange={this.handleChange} name="mail" value={mail} type='text' maxLength={30} />
                <input onChange={this.handleChange} name="number" value={number} type='text' maxLength={12} />

                <SchoolForm schools={schools} updateState={this.updateState}> </SchoolForm>

                <button type="submit" > Submit  </button>
            </form >
        </div>)
    }
}

export default Form;



