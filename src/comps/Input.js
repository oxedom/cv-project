import React, { Component } from "react";

import '../styles/styles.css'
class Input extends Component {
    constructor(props) {
        super()

        this.state = {


        }

    }


    render() {
        const { fields } = this.props

        return (<div className="form-inputs">
            {Object.keys({ ...fields }).map(f => <input onChange={this.props.handleChange} type='text' name={f} value={fields[f]} />)}
        </div>)
    }
}

export default Input;