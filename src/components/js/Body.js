import React, {Component} from "react";
import Input from "./Input";
import TodoElem from "./TodoElem";
import styles from "../scss/Body.scss";


class Body extends Component {
    constructor(props) {
        super(props);
        this.state={
            todoList: ['Helloo']
        };
        this.inputSubmit = this.inputSubmit.bind(this);
        this.onTodoDelete = this.onTodoDelete.bind(this);
    }

    inputSubmit(value) {
        this.setState(prevState => ({
            todoList: [...prevState.todoList, value]
        }));
    }

    onTodoDelete (text) {
        this.setState(prevState => ({
            todoList: prevState.todoList.filter(value => value !== text )
        }));
    }

    list() {
        const listItems = this.state.todoList.map((item) =>
            <TodoElem text={item} onDelete={this.onTodoDelete}/>
        );
        return listItems;
    }

    render() {
        return (<div className={styles.Body}><Input onSubmit={this.inputSubmit}/>{this.list()}</div>);
    }
}

export default Body;