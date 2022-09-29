

import React, { Component } from "react";
import Input from "./Input";
import uniqid from "uniqid";
class SchoolForm extends Component {
    constructor(props) {
        super()
        this.state = {

        }



    }



    handleClick = (e) => {
        let id = e.target.parentNode.getAttribute('a-id')
        this.props.removeForm(id)
    }




    render() {
        const { schoolData } = this.props

        return (<div className="form-box" a-id={uniqid()}>
            <p className="title"> Education</p>
            <Input fields={schoolData.fields} handleChange={this.props.handleChange} />

            <button onClick={this.handleClick} className="btn"> Delete </button>


        </div>)
    }
}

export default SchoolForm;

