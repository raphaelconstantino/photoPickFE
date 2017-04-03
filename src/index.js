import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './App';
import TestsBox from './containers/tests/Tests';
import VoteBox from './containers/vote/Vote';
import './index.css';

ReactDOM.render(
  (
  	<Router history={browserHistory}>
	  	<Route path="/" component={App} >
		  	<IndexRoute component={TestsBox}/>
				<Route path="/tests" component={TestsBox} />
				<Route path="/vote" component={VoteBox} />
		</Route>  	
	  </Router>
	),
  document.getElementById('root')
);
