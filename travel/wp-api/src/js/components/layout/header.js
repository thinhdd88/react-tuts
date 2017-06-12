import React, {Component} from 'react';
import Navigation from '../nav/navigation';

class Header extends Component {
	render() {
		return(
			<header className="header">
	            <Navigation />
	        </header>
		); 
	}
}

export default Header;