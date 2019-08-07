import React, {Component} from "react";
import styles from "../scss/ListFilter.scss";

class ListFilter extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (e) {
        this.props.onChange(e.target.dataset.value);

    }

    render() {
        return (
            <div className={styles.FilterWrapper}>
                <div onClick={this.handleChange} data-value='0'>Все</div>
                <div onClick={this.handleChange} data-value='1'>Готовые</div>
                <div onClick={this.handleChange} data-value='-1'>В работе</div>
            </div>);
    }
}

export default ListFilter;