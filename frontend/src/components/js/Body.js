import React, {Component} from "react";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import styles from '../scss/Body.scss';


function Home(props) {
    return <h1>Home</h1>;
  }

  function Registration(props) {
    return <h1>Registration</h1>;
  }

class Body extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/registration' component={Registration}/>
                </Switch>
            </Router>
        );
    }
}

export default Body;