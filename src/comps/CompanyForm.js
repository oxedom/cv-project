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
            <p className="title"> Work Experince </p>
            <div className="form-inputs">
                <div className="form-inputs">
                    <input></input>
                    <input></input>
                    <input></input>
                </div>
            </div>
            <button className="btn"> Delete </button>


        </div>)
    }
}

export default CompanyForm;