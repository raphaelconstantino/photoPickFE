import React, { Component } from 'react';
import {Link} from "react-router";

class App extends Component {

    render() {
        return (
            <div className="wrapper"> 
                <Link to="/logout">Logout</Link>
                <Link to="/tests">Tests</Link>
                <Link to="/vote">Vote</Link>
 
                {this.props.children}
            </div>
        );
    }
    
}

export default App;
