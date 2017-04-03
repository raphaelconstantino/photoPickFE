import React, { Component } from 'react';
import {Link} from "react-router";
import HttpService from './util/HttpService';

class App extends Component {

    componentWillMount() {

        HttpService.post("authenticate", {login: "rod", password: "123"})
        //HttpService.post("authenticate", {login: "rapha", password: "123"})
        .then(response => {
                localStorage.setItem('auth-token', response['x-access-token']);
                localStorage.setItem('userId', response['userId']);
            })
            .catch(error => {
                this.setState({msg:error.message});
            });

    } 

    render() {
        return (
            <div className="wrapper"> 
                <Link to="/tests">Tests</Link>
                <Link to="/vote">Vote</Link>
 
                {this.props.children}
            </div>
        );
    }
    
}

export default App;
