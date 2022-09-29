import React, { Component } from "react";

import '../styles/styles.css'
class Input extends Component {
    constructor(props) {
        super()

        this.state = {


        }

    }


    render() {
        const { f1, f2, f3 } = this.props
        console.log(this.props);
        return (<div className="form-inputs">


            <input name={f1} type='text' />
            <input name={f2} type='text' />
            <input name={f3} type='text' />




        </div>)
    }
}

export default Input;