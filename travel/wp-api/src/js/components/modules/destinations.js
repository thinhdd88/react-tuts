import React, {Component} from 'react';
import _ from 'lodash';
import GridItem from './gridItem.js';

// Material UI
import {orange500} from 'material-ui/styles/colors';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

const Masonry = require('react-masonry-component');
const styles = {
  color: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: orange500,
  },
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: orange500,
  },
};


class Destinations extends Component {
	constructor(props) {
	   	super(props);
	   	this.state = {
        searchString: '',
        searchFocus: false,
        sort: 0
      };
      this.handleChange = this.handleChange.bind(this);
   }

  handleChange(event) {
  	this.setState({searchString: event.target.value});
  }

  handleSort(event, index, value){
    this.setState({sort: value});
  }

  componentWillMount() {
    $('.ts-spinner').fadeIn(300);
  }

  componentDidUpdate() {
    setTimeout(() => {$('.ts-spinner').fadeOut(300)}, 500); 
  }
   
  render() {
  	var searchString = this.state.searchString.trim().toLowerCase();
    var items = this.props.list;

    //Sort
    if(this.state.sort == 1) {
      items.sort(function(a, b){
          if(a.title.rendered < b.title.rendered) return -1;
          if(a.title.rendered > b.title.rendered) return 1;
          return 0;
      })
    } else if (this.state.sort == 2){
      items.sort(function(a, b){
          if(a.title.rendered > b.title.rendered) return -1;
          if(a.title.rendered < b.title.rendered) return 1;
          return 0;
      })
    } else {
      items = _.sortBy(items, "originalIndex");
    }
    

		if(searchString.length > 0){
			items  = items.filter(function(l){
				return l.title.rendered.toLowerCase().match(searchString);
			});
		}

    var masonryOptions = {
        transitionDuration: '0.8s'
    };

    return ( 
    	<div>
        <div className="search-bar">
          <MuiThemeProvider>
            <div className="container">
                <TextField
                  className="pull-left"
                  hintText="Search..."
                  value={this.state.searchString}
                  onChange={this.handleChange}
                  underlineFocusStyle={styles.underlineStyle}
                />

                <SelectField
                  className="pull-right"
                  value={this.state.sort}
                  onChange={this.handleSort.bind(this)}
                  maxHeight={200}
                  selectedMenuItemStyle={styles.color}
                >              
                  <MenuItem value={0} primaryText="Popular" />
                  <MenuItem value={1} primaryText="A->Z" />
                  <MenuItem value={2} primaryText="Z->A" />
                </SelectField>
            </div>
          </MuiThemeProvider>
        </div>

        <div className="container">
          <Masonry
              className={'list-destination list-items row list-unstyled'} // default ''
              elementType={'ul'} // default 'div'
              options={masonryOptions} // default {}
              disableImagesLoaded={false} // default false
              updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
          >
            {items.map((item,index) => {
                return (
                    <GridItem key={index} 
                      image={item.acf.main_image}
                      title={item.title.rendered}
                      shortDescription={item.acf.short_description}
                      url={'/destination/' + item.slug}
                      classNames='col-md-4 col-xs-6 hover-effect item'                
                    />
                 )
            })} 
	        </Masonry>
        </div>
    	</div>
    );
  }
}


export default Destinations;