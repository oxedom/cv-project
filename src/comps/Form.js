import React, { Component } from "react";

const Form = (props) => {

    const { name, email, phone, city, bio, title } = props.personalData

    return (<section className="form-box" onChange={props.handler} >
        <p className="title"> Personal Details</p>
        <div className="form-inputs">
            <input name="name" value={name} maxLength="30"></input>
            <input name="title" maxLength="30" value={title}></input>
            <input name="email" maxLength="30" value={email}></input>
            <input name="phone" maxLength="13" value={phone}></input>
            <input name="city" maxLength="30" value={city}></input>
            <textarea maxLength="200" name="bio" value={bio}> </textarea>
        </div>
    </section>);
}

export default Form;
