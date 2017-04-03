import React, { Component } from 'react';
import HttpService from '../../util/HttpService';
import img from '../../files/img.jpg'

class VoteBox extends Component { 

	constructor () {
		super();
		this.state = { test : [], msgSuccess : ""};
	}

	componentDidMount() {
		
		HttpService.get("tests/findOne/")
			.then(response => this.setState({test : response}));

	}   

  render() {
    return (
      <div className="Tests">
          <ul>
            <li>{this.state.test.category}</li>
            <li><img src={img} height="250px" width="250px"/></li>
          </ul>    
      </div>
    );
  }
}

export default VoteBox;
