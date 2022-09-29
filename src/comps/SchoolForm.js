

import React, { Component } from "react";
import Input from "./Input";
import uniqid from "uniqid";
class SchoolForm extends Component {
    constructor(props) {
        super()
        this.state = {

        }

    }

    handleChange = (e) => {

        this.updateState({ schools: this.schools.contact({ name: 'amit' }) })

        let text = e.target.value
    }

    handleClick = (e) => {
        let id = e.target.parentNode.getAttribute('a-id')
        this.props.removeForm(id)
    }





    render() {
        console.log(this.props.schoolData);
        const { school, school_title, school_date } = this.props.schoolData;
        return (<div className="form-box" a-id={uniqid()}>
            <p className="title"> Education</p>
            <Input f1={school} f2={school_title} f3={school_date} />

            <button onClick={this.handleClick} className="btn"> Delete </button>


        </div>)
    }
}

export default SchoolForm;

