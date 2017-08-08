import React from 'react';
import './App.css';
import Parent from './components/Parent.js';
import logo from './images/gamerrtag-logo.png';
import GTag from './components/GTag.js';
import UserName from './components/UserName.js';
import Form from './Form.js';

const App = () => {
  return (
  	<div className="App">
  		<div className="App-header jumbotron">
  			
  			<span id="menu-dropdown" className="glyphicon glyphicon-menu-hamburger navbar-left"></span>
  			<img id="gtLogo" src={logo} alt="gamertag-logo"/>
  		</div>
  		<div>
  			<div id="profile-cont" className="tagged">
				<div className="row">
					<UserName />
				</div>
				<div className="row">
					<div className="col-xs-6"></div>
					<GTag />
				</div>
			</div>
				<Form />
  			</div>
  		</div>);
};

export default App;