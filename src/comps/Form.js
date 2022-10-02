import React, { Component } from "react";

import "../styles/styles.css";
class Form extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <section className="form-box">
        <p className="title"> Personal Info</p>
        <div className="form-inputs">
          <input name="name"></input>
          <input name="email"></input>
          <input name="phone"></input>
        </div>
      </section>
    );
  }
}

export default Form;
