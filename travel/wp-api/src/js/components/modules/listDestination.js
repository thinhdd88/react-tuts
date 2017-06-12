import React, {Component} from 'react';
import Destination from './destination.js';
var Masonry = require('react-masonry-component');

class ListAttraction extends Component {
	constructor(props) {
	   	super(props);
	   	this.state = {
        searchString: '',
        searchFocus: false
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleFocus = this.handleFocus.bind(this);
	   	this.handleBlur = this.handleBlur.bind(this);
   }

  handleChange(event) {
  	this.setState({searchString: event.target.value});
  }

  handleFocus() {
    this.setState({searchFocus: true});
  }

  handleBlur() {
    this.setState({searchFocus: false});
  }

  componentWillMount() {
    $('.ts-spinner').fadeIn(300);
  }

  componentDidUpdate() {
    setTimeout(() => {$('.ts-spinner').fadeOut(300)}, 500); 
  }
   
  render() {
  	var searchString = this.state.searchString.trim().toLowerCase(),
  		listAttraction = this.props.list;

    var searchInputClass = this.state.searchFocus ? 'search-box focus' : 'search-box';

		if(searchString.length > 0){
			listAttraction  = listAttraction.filter(function(l){
				return l.name.toLowerCase().match(searchString);
			});
		}

    var masonryOptions = {
        transitionDuration: '0.8s'
    };

    return ( 
    	<div>
        <div className="search-bar">
      	   <div className={searchInputClass}>
              <input className="search-box__input" type="text" value={this.state.searchString} onChange={this.handleChange} onClick={this.handleFocus} onBlur={this.handleBlur}  placeholder="Search...." />
        	    <span className="glyphicon glyphicon-search"></span>
           </div>
        </div>
        <div className="container">
          <Masonry
              className={'list-attraction list-items row list-unstyled'} // default ''
              elementType={'ul'} // default 'div'
              options={masonryOptions} // default {}
              disableImagesLoaded={false} // default false
              updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
          >
            {listAttraction.map((item,index) => {
                return <Destination key={index} data={item} />
            })} 
	        </Masonry>
        </div>
    	</div>
    );
  }
}

export default ListAttraction;