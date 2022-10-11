import React, { Component } from "react";

import "../styles/styles.css";
class Form extends Component {
    constructor(props) {
        super();

        this.state = {};
    }

    render() {

        const { name, email, phone, city, bio, title } = this.props.personalData


        return (
            <section className="form-box" onChange={this.props.handler} >
                <p className="title"> Personal Details</p>
                <div className="form-inputs">
                    <input name="name" value={name} maxLength="30"></input>
                    <input name="title" maxLength="30" value={title}></input>
                    <input name="email" maxLength="30" value={email}></input>
                    <input name="phone" maxLength="13" value={phone}></input>
                    <input name="city" maxLength="30" value={city}></input>
                    <textarea maxLength="200" name="bio" value={bio}> </textarea>
                </div>
            </section>
        );
    }
}

export default Form;
