import React from 'react'
import { Link } from 'react-router'

class Navigation extends React.Component {
   render() {
      return (
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link activeClassName="active" onlyActiveOnIndex={true} className="nav-link" to="/">Home</Link>
            </li>
          </ul>
      );
   }
}

export default Navigation;
