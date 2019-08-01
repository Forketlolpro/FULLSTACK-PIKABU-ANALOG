import React, {Component} from "react";
import Input from "./Input";
import TodoElem from "./TodoElem";
import ListFilter from "./ListFilter";
import {setToLocalStorage, getFromLocalStorage} from "../../helpers/localStorage";
import styles from "../scss/Body.scss";


class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: getFromLocalStorage('todoList'),
            filterStatus: 0
        };
        this.inputSubmit = this.inputSubmit.bind(this);
        this.onTodoDelete = this.onTodoDelete.bind(this);
        this.onTodoStatusChange = this.onTodoStatusChange.bind(this);
        this.onTodoFilterChange = this.onTodoFilterChange.bind(this);
    }

    inputSubmit(value) {
        this.setState(prevState => {
            setToLocalStorage('todoList', [...prevState.todoList, value]);
            return {
                todoList: [...prevState.todoList, value], filterStatus: prevState.filterStatus
            }
        });
    }

    onTodoDelete(text) {
        this.setState(prevState => {
            let newTodoList = prevState.todoList.filter(value => value.text !== text);
            setToLocalStorage('todoList', newTodoList);
            return {todoList: newTodoList, filterStatus: prevState.filterStatus}
        });
    }

    onTodoStatusChange(text) {
        this.setState(prevState => {
            let newTodoList = prevState.todoList.map(function (item) {
                if (item.text !== text) {
                    return item
                } else {
                    return {status: item.status * -1, text: item.text};
                }
            });
            setToLocalStorage('todoList', newTodoList);
            return {todoList: newTodoList, filterStatus: prevState.filterStatus}
        });
    }

    onTodoFilterChange(filterValue) {
        this.setState(prevState => ({
            todoList: [...prevState.todoList],
            filterStatus: +filterValue
        }));
    }

    generateTodosList() {
        return this.state.todoList.map((item) => {
                if (item.status === this.state.filterStatus || this.state.filterStatus === 0) {
                    return <TodoElem item={item} onDelete={this.onTodoDelete} onStatusChange={this.onTodoStatusChange}/>;
                }
            }
        );
    }

    render() {
        return (<div className={styles.Body}><Input onSubmit={this.inputSubmit}
                                                    onDone={this.onTodoStatusChange}/>
            <div>{this.generateTodosList()}</div>
            <ListFilter onChange={this.onTodoFilterChange}/></div>);
    }
}

export default Body;