import React, { Component } from "react";
import SchoolForm from './SchoolForm'
import '../styles/styles.css'
class Form extends Component {
    constructor() {
        super()

        this.state = {

            name: "",
            mail: "",
            number: "",
            schools: [],
            jobs: [],
            nameFormRead: false,
            schoolFormRead: false

        }

    }

    updateState = (prop, value) => {
        this.setState({ [prop]: value })
    }

    handleChange = (e) => {
        let field = e.target.getAttribute('name')
        let text = e.target.value
        this.setState({ [field]: text })
    }

    handleSubmit = (e) => {
        e.preventDefault()

    }

    handleClick = (e) => {
        let toogle = !this.state.nameFormRead
        this.setState({ nameFormRead: toogle });
    }



    render() {
        const { name, mail, number, schools } = this.state
        return (<div className="dvider">

            <form className="form-container" onSubmit={this.handleSubmit}>

                <div className="form-box">
                    <div className="form-inputs">
                        <input onChange={this.handleChange} name="name" value={name} type='text' maxLength={30} />
                        <input onChange={this.handleChange} name="mail" value={mail} type='text' maxLength={30} />
                        <input onChange={this.handleChange} name="number" value={number} type='text' maxLength={12} />
                    </div>

                </div>


                <button onClick={this.handleClick}>Toogle</button>

                {/* <SchoolForm schools={schools} updateState={this.updateState}> </SchoolForm> */}

            </form >


            <div>
                <div >
                    <p> {name}</p>
                    <p> {mail}</p>
                    <p> {number}</p>
                </div>
            </div>

        </div>)
    }
}

export default Form;



