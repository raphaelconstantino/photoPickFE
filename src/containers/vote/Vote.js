import React, { Component } from 'react';
import HttpService from '../../util/HttpService';

class VoteBox extends Component { 

	constructor () {
		super();
		this.state = { test : null, msgSuccess : ""};
	}

	componentDidMount() {
		
		HttpService.get("tests/findOne/")
			.then(response => this.setState({test : response}));

	}   

  voteOnPic(e) {
		e.preventDefault();
    HttpService.put("tests/" + this.state.test._id, { "comment":"I would Date!", "atractive" : "3", "smart" : "3", "trustworthy" : "3" })
			.then(response => console.log(response));
  }

  fnRenderVote () {
    if (this.state.test != null)
    {
      return (
          <ul>
            <li>{this.state.test.category}</li>
            <li><img alt="" src={"image/" + this.state.test.file + "?x-access-token=" + localStorage.getItem('auth-token')} height="250px" width="250px"/></li>
            <li><a onClick={this.voteOnPic.bind(this)} href="#">Vote</a></li>
          </ul>    
      )
    }  
  }

  render() {
    return (
      <div className="Tests">
          {this.fnRenderVote()}
      </div>
    );
  }
}

export default VoteBox;
