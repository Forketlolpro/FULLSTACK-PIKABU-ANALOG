import React, {Component} from "react";
import styles from "../scss/TodoElem.scss";


class TodoElem extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeStatus = this.handleChangeStatus.bind(this);
    }

    handleChange () {
        this.props.onDelete(this.props.item.text);
    }

    handleChangeStatus () {
        this.props.onStatusChange(this.props.item.text);
    }

    render() {
        return (
            <div className={styles.TodoElem}>
                <div className={(this.props.item.status === -1) ? styles.StatusCheckboxProgress : styles.StatusCheckboxDone} onClick={this.handleChangeStatus}> </div>
                <div>{this.props.item.text}</div>
                <div className={styles.DeleteButton} onClick={this.handleChange}>X</div>
            </div>
        );
    }
}

export default TodoElem;