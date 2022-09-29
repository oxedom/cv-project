import React, { Component } from "react";
import Input from "./Input";
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
            <Input></Input>

        </div>)
    }
}

export default Form;



