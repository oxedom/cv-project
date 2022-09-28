

import React, { Component } from "react";

class SchoolForm extends Component {
    constructor() {
        super()
        this.state = {
            school: "",
            school_title: "",
            school_date: "",
        }

    }

    handleChange = (e) => {
        // let field = e.target.getAttribute('name')
        // let text = e.target.value
        // this.setState({ [field]: text })
        updateState({ schools: this.schools.contact({ name: 'amit' }) })
        console.log(this.schools);
        let text = e.target.value
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.updateState({ schools: this.schools.contact({ name: 'amit' }) })
        console.log(this.schools);
        let text = e.target.value
    }




    render() {
        const { school, school_title, school_date } = this.state
        return (<div className="form-box">
            <input onChange={this.handleChange} name="school" type='text' maxLength={30} />
            <input onChange={this.handleChange} name="school_title" type='text' maxLength={30} />
            <input onChange={this.handleChange} name="school_date" type='text' maxLength={30} />

            <h1> Hello form School Form </h1>



        </div>)
    }
}

export default SchoolForm;

