import React, {Component} from "react";


class TodoElem extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange () {
        this.props.onDelete(this.props.text);
    }

    render() {
        return (<div><div>{this.props.text}</div><div onClick={this.handleChange}>X</div></div>);
    }
}

export default TodoElem;