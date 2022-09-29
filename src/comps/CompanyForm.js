import React, { Component } from "react";

import '../styles/styles.css'
class CompanyForm extends Component {
    constructor() {
        super()

        this.state = {


        }

    }


    render() {

        return (<div className="form-box">
            <p className="title"> Personal Info</p>
            <div className="form-inputs">

                <Input></Input>
            </div>
            <button className="btn"> Delete </button>


        </div>)
    }
}

export default CompanyForm;