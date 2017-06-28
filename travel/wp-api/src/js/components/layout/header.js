import React, {Component} from 'react';
import Navigation from '../nav/navigation';
import Register from '../modules/user/register';

class Header extends Component {
	render() {
		return(
			<header className="header">
				<nav className="navbar navbar-default">
					<div className="container">
			            <Navigation />
		            	<Register />
					</div>
				</nav>
	        </header>
		); 
	}
}

export default Header;