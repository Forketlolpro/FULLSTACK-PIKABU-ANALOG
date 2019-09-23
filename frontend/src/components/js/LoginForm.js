import React, { Component } from "react";
import styles from "../scss/LoginForm.scss"


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('Submit')
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
              <label>
                Email:
                <input
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleInputChange} />
              </label>
              <label>
                Password:
                <input
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleInputChange} />
              </label>
              <button type="submit">Login</button>
            </form>)
    }
}

export default LoginForm ;