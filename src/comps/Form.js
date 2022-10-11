import React, { Component } from "react";

import "../styles/styles.css";
class Form extends Component {
    constructor(props) {
        super();

        this.state = {};
    }

    render() {
        const { handler } = this.props

        const { name, email, phone, id } = this.props.personalData


        return (
            <section className="form-box" onChange={this.props.handler} >
                <p className="title"> Personal Info</p>
                <div className="form-inputs">
                    <input name="name" value={name}></input>
                    <input name="email" value={email}></input>
                    <input name="phone" value={phone}></input>
                </div>
            </section>
        );
    }
}

export default Form;
