import React, { Component, PropTypes } from 'react';

class ListTests extends Component {

	static propTypes = {
        testsList : PropTypes.array.isRequired
    }

    getUrl (o) {
        // TODO - remove hardcode
        return (
            <img alt="" src={"image/" + o.file + "?x-access-token=" + localStorage.getItem('auth-token')} height="250px" width="250px"/>
        );
    }

    render() {
        return (
            <div className="wrapper">  
                <h1>List of Tests</h1>
                {this.props.testsList.map((o) => {
                    return (
                        <ul key={o._id}> 
                            <li>{o.category}</li>
                            <li>{this.getUrl(o)}</li>
                            <li>{o.votes.length} Votes</li>
                        </ul>
                    )
                })}
            </div>
        );
    }
    
}

export default ListTests;
