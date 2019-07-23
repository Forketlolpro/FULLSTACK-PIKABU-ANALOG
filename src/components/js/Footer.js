import React from "react";
import styles from '../scss/Footer.scss';

class Footer extends React.Component {
    render() {
        return (<footer className={styles.Footer}>{this.props.title}</footer>);
    }
}

export default Footer;