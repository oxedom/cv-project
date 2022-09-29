import React, { Component } from "react";

import '../styles/styles.css'
class Form extends Component {
    constructor() {
        super()

        this.state = {


        }

    }


    render() {

        return (<div className="form-box">
            <p className="title"> Personal Info</p>
            <div className="form-inputs">

                <input type='text' />
                <input type='text' />
                <input type='text' />
            </div>
            <button className="btn"> Delete </button>


        </div>)
    }
}

export default Form;



