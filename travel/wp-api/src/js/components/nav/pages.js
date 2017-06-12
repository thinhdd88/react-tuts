import React from 'react';
import PageDetail from '../nav/pages';
import NavLink from './navLink';

class NavPages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        pages: []
    }
  }

  getPages(){
      var url = 'http://localhost/tut/reactjs/travel/wp-site/wp-json/wp/v2/pages/?fields=id,slug,title,menu_order';
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
            data.sort(sortPage);
            this.setState({
              pages: data
            })

            console.log(data);
      })
  }

  componentDidMount() {
    this.getPages();
  }

  render() {
      return (
          <nav className="navbar navbar-default">
              <div className="container">
                <ul className="nav navbar-nav">
                  {this.state.pages.map((val, key) => (
                    <li key={key}
                        className='nav-item' >
                        <NavLink className="nav-link" to={'/content/' + val.slug} >{val.title.rendered}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
          </nav>        
      );
   }
}

function sortPage(a,b) {
  if (a.menu_order < b.menu_order)
    return -1;
  if (a.menu_order > b.menu_order)
    return 1;
  return 0;
}

export default NavPages;
