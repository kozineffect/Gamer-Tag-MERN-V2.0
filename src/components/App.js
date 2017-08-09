import React, { Component } from 'react';
import logo from '../img/gamerrtag-logo.png';
import GTag from './children/GTag.js';
import UserName from './children/UserName.js';
var Link = require("react-router").Link;

class App extends Component {
	render(){
  		return (
  			<div className="App">
  				<div className="App-header jumbotron">
  					<ul className="nav navbar-nav navbar-right">
                	</ul>
					  <ul id="menu-dropdown" className="navbar-left dropdown">
        					<a className="glyphicon glyphicon-menu-hamburger dropdown-toggle" data-toggle="dropdown">
        						<span className="caret"></span></a>
        							<ul className="dropdown-menu">
										  <li><Link to="/signup">Sign Up</Link></li>
										  <li><Link to="/loser">Loser</Link></li>
        							</ul>
      						</ul>
					
					
					  <img id="gtLogo" src={logo} alt="gamertag-logo"/>
  				</div>
  				<div>	
						{this.props.children}
  				</div>
			</div>
		);
	}
};

export default App;