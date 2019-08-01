import React, {Component} from "react";

class ListFilter extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (e) {
        this.props.onChange(e.target.dataset.value);

    }

    render() {
        return (<div>
            <div onClick={this.handleChange} data-value='0'>Все</div>
            <div onClick={this.handleChange} data-value='1'>Готовые</div>
            <div onClick={this.handleChange} data-value='-1'>В работе</div>
        </div>);
    }
}

export default ListFilter;