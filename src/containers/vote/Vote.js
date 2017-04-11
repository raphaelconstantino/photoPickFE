import React, { Component } from 'react';
import HttpService from '../../util/HttpService';

class VoteBox extends Component { 

	constructor () {
		super();
		this.state = { test : [], msgSuccess : ""};
	}

	componentDidMount() {
		
		HttpService.get("tests/findOne/")
			.then(response => this.setState({test : response}));

	}   

  voteOnPic(test) {
		HttpService.put("tests/" + test._id, {"userVotingId":localStorage.getItem('userId'), "comment":"I would Date!", "atractive" : "3", "smart" : "3", "trustworthy" : "3" })
			.then(response => console.log(response));
  }

  render() {
    return (
      <div className="Tests">
          <ul>
            <li>{this.state.test.category}</li>
            <li><img alt="" src={"image/" + this.state.test.file} height="250px" width="250px"/></li>
            <li><a onClick={this.voteOnPic.bind(this, this.state.test)} href="#">Vote</a></li>
          </ul>    
      </div>
    );
  }
}

export default VoteBox;
