

import React, { Component } from "react";

class SchoolForm extends Component {
    constructor() {
        super()
        this.state = {

        }

    }

    handleChange = (e) => {

        this.updateState({ schools: this.schools.contact({ name: 'amit' }) })

        let text = e.target.value
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.updateState({ schools: this.schools.contact({ name: 'amit' }) })
        let text = e.target.value
    }

    handleRemove = (e) => {
        e.preventDefault()
        let id = e.target.getAttribute('id')
        console.log(id);
    }




    render() {
        const { school, school_title, school_date } = this.state
        return (<div className="form-box">
            <div className="form-inputs">
                <h2> School Info </h2>
                <input onChange={this.handleChange} name="school" type='text' maxLength={30} />
                <input onChange={this.handleChange} name="school_title" type='text' maxLength={30} />
                <input onChange={this.handleChange} name="school_date" type='text' maxLength={30} />
                <button onClick={this.handleRemove}> Remove</button>
            </div>
        </div>)
    }
}

export default SchoolForm;

