import React, {Component} from "react";
import Input from "./Input";
import TodoElem from "./TodoElem";
import ListFilter from "./ListFilter";
import styles from "../scss/Body.scss";


class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
            filterStatus: -1
        };
        this.inputSubmit = this.inputSubmit.bind(this);
        this.onTodoDelete = this.onTodoDelete.bind(this);
        this.onTodoStatusChange = this.onTodoStatusChange.bind(this);
        this.onTodoFilterChange = this.onTodoFilterChange.bind(this);
    }

    inputSubmit(value) {
        this.setState(prevState => ({
            todoList: [...prevState.todoList, value]
        }));
    }

    onTodoDelete(text) {
        this.setState(prevState => ({
            todoList: prevState.todoList.filter(value => value.text !== text)
        }));
    }

    onTodoStatusChange(text) {
        this.setState(prevState => ({
            todoList: prevState.todoList.map(function (item) {
                if (item.text !== text) {
                    return item
                } else {
                    return {status: item.status * -1, text: item.text};
                }
            })
        }));
    }

    onTodoFilterChange(filterValue) {
        console.log(filterValue);
    }

    generateTodosList() {
        return this.state.todoList.map((item) => {
                if (this.state.filterStatus === 1 && item.status === 1) {
                    return <TodoElem item={item} onDelete={this.onTodoDelete} onStatusChange={this.onTodoStatusChange}/>;
                } else if (this.state.filterStatus === -1 && item.status === -1) {
                    return <TodoElem item={item} onDelete={this.onTodoDelete} onStatusChange={this.onTodoStatusChange}/>;
                } else {
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