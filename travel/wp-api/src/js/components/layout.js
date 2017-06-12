import React, {Component} from 'react';
import Header from './layout/header';
import Footer from './layout/footer';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Layout extends Component {
	render() {
	    return (
	      <div>
	        <Header />
          	{this.props.children}
	        <Footer />
	      </div>
	      
	    )
  	}
}

export default Layout;