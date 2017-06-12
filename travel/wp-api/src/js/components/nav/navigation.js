import React from 'react'
import { Link } from 'react-router'

class Navigation extends React.Component {
   render() {
      return (
        <nav className="navbar navbar-default">
          <div className="container">
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <Link activeClassName="active" onlyActiveOnIndex={true} className="nav-link" to="/">Home</Link>
              </li>
            </ul>
          </div>
        </nav>
      );
   }
}

export default Navigation;
