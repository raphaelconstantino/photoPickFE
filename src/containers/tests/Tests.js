import React, { Component } from 'react';
import HttpService from '../../util/HttpService';
import InsertTest from './InsertTest';
import ListTests from './ListTests';

class TestsBox extends Component {

	constructor () {
		super();
		this.state = { tests : [], msgSuccess : ""};
	}

	componentDidMount() {
		
		HttpService.get("tests/")
			.then(response => this.setState({tests : response}));

	}   
  
  render() {
    return (
      <div className="Tests">

					<InsertTest />

					<ListTests testsList={this.state.tests}/>
      </div>
    );
  }
}

export default TestsBox;
