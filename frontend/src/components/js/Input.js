import React, { Component } from "react";


class Input extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event) {
        this.props.onSubmit({status: -1, text: event.target[0].value});
        event.target[0].value='';
        event.preventDefault();
    }
    render() {
        return (<form onSubmit={this.handleChange} >
            <label>
                <input type="text" name="name" placeholder="Заметка" required pattern="^(?!\s*$).+"/>
            </label>
            <input type="submit" value="Отправить" />
        </form>);
    }
}

export default Input;