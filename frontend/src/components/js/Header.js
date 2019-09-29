import React, { Component } from "react";
import {LoginForm} from "./LoginForm";
import styles from "../scss/Header.scss"


class Header extends Component {
    render() {
        return (<header className={styles.Header}><div className={styles.Logo}>{this.props.title}</div><LoginForm/></header>);
    }
}

export default Header;