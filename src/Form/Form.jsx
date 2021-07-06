import React, { Component } from "react";
import "./Form.css";

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            checker: false,
        };
        this.checkRef = React.createRef()
    }

    changeEmail = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    checkValue = (e) => {
        this.setState({ checker: e.target.checked });
    };
    send = (e) => {
        if (
            // eslint-disable-next-line
            !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
                this.state.email
            )
        ) {
            alert("Please enter correct email");
        } else if (!this.state.checker) {
            alert("Please agree!");
        } else {
            alert("Well done!");
            this.setState({
                email: "",
                checker: false,
            });
        }
    };
    mouseEntr = (e) => {
        this.checkRef.current.focus();
    }

    render() {
        return (
            <div onMouseEnter={this.mouseEntr} className="Form">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.changeEmail}
                    ref={this.checkRef}
                />
                Enter your email
                <br />
                <input
                    onChange={this.checkValue}
                    type="checkbox"
                    checked={this.state.checker}
                />
                Agree
                <br />
                <button onClick={this.send}>Send</button>
            </div>
        );
    }
}
