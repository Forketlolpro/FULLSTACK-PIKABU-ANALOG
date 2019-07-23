import React, { Component } from "react";
import styles from "../scss/Header.scss"


class Header extends Component {
    render() {
        return (<header className={styles.Header}>{this.props.title}</header>);
    }
}

export default Header;