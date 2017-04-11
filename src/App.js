import React, { Component } from 'react';
import {Link} from "react-router";

class App extends Component {

    render() {
        return (

            <div className="container"> 
                
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <ul className="nav navbar-nav">
                            <li><Link to="/tests">Tests</Link></li>
                            <li><Link to="/vote">Vote</Link></li>
                            <li><Link to="/logout">Logout</Link></li>
                        </ul>
                    </div>
                </nav>            

                {this.props.children}
            </div>
        );
    }
    
}

export default App;
