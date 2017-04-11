import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './App';
import TestsBox from './containers/tests/Tests';
import VoteBox from './containers/vote/Vote';
import Login from './components/Login';
import Logout from './components/Logout';
import './css/bootstrap.min.css';

function verificaAutenticacao(nextState,replace) {
  if(localStorage.getItem('auth-token') === null)
	{
    replace('/login?msg=você precisa estar logado para acessar o endereço');
  }
}

ReactDOM.render(
  (
  	<Router history={browserHistory}>
			<Route path="/login" component={Login} />
			<Route path="/logout" component={Logout}/>
			<Route path="/" component={App} onEnter={verificaAutenticacao} >
		  	<IndexRoute component={TestsBox}/>
				<Route path="/tests" component={TestsBox} onEnter={verificaAutenticacao}/>
				<Route path="/vote" component={VoteBox} onEnter={verificaAutenticacao}/>
		</Route>  	
	  </Router>
	),
  document.getElementById('root')
);
