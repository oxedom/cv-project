import React, { Component } from "react";

import "../styles/styles.css";
class Form extends Component {
    constructor(props) {
        super();

        this.state = {};
    }

    render() {
        const { handler } = this.props

        const { name, email, phone, id, city, bio, title } = this.props.personalData


        return (
            <section className="form-box" onChange={this.props.handler} >
                <p className="title"> Personal Info</p>
                <div className="form-inputs">
                    <input name="name" value={name}></input>
                    <input name="title" value={title}></input>
                    <input name="email" value={email}></input>
                    <input name="phone" value={phone}></input>
                    <input name="city" value={city}></input>
                    <textarea name="bio" value={bio}> </textarea>
                </div>
            </section>
        );
    }
}

export default Form;
