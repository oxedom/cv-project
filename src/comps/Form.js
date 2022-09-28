import React, { Component } from "react";
import SchoolForm from './SchoolForm'
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
        return (<div>
            <form onSubmit={this.handleSubmit}>



                {!this.state.nameFormRead &&

                    <div >
                        <input onChange={this.handleChange} name="name" value={name} type='text' maxLength={30} />
                        <input onChange={this.handleChange} name="mail" value={mail} type='text' maxLength={30} />
                        <input onChange={this.handleChange} name="number" value={number} type='text' maxLength={12} />
                    </div>
                }
                {this.state.nameFormRead &&

                    <div >
                        <p> {name}</p>
                        <p> {mail}</p>
                        <p> {number}</p>


                    </div>
                }






                <button onClick={this.handleClick}>READ ME</button>

                <SchoolForm schools={schools} updateState={this.updateState}> </SchoolForm>

                <button type="submit" > Submit  </button>
            </form >
        </div>)
    }
}

export default Form;



