import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ListDestination from '../modules/listDestination';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [] // set initital load movie - Interstellar
        }
    }

    fetchApi(url) {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                // update state with API data
                let attr = [];

                if(Array.isArray(data)){
                	attr = data;
                } else {
                	attr.push(data);
                }

                this.setState({data: attr});
        })
    } // end function

    getDes() {
        var url = `http://localhost/tut/reactjs/travel/wp-site/wp-json/wp/v2/destinations/?fields=slug,name,description,acf.image`;
        this.fetchApi(url);
    }

    componentWillMount() {
        this.getDes();
    }

    _componentDidUpdate() {
	    var arr = this.state.data.map((item,index) => {
	                return item.name;
        		});
		console.log(this.state.data);

		//========================= BLOODHOUND ==============================//
        let suggests = new Bloodhound({
            datumTokenizer: function (datum) {
                return Bloodhound.tokenizers.whitespace(datum.value);
            },
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            remote: {
                url: 'http://localhost/tut/reactjs/travel/wp-site/wp-json/wp/v2/destinations/%QUERY',
                filter: function (items) {
                    // Map the remote source JSON array to a JavaScript object array
                    return $.map(items, function (item) {
                        return {
                            value: item.name, // search original title
                            id: item.id // get ID of item simultaniously
                        };
                    });
                } // end filter
            } // end remote
        }); // end new Bloodhound

        suggests.initialize(); // initialise bloodhound suggestion engine

        //========================= END BLOODHOUND ==============================//

        //========================= TYPEAHEAD ==============================//
        // Instantiate the Typeahead UI
        $('.typeahead').typeahead({
            hint: true,
            highlight: true,
            minLength: 2
        }, {
        	source: suggests.ttAdapter(),
			templates: {
			        empty: [
			          '<div class="empty-message">',
			            'unable to find any Best Picture winners that match the current query',
			          '</div>'
			        ].join('\n'),
			        suggestion: function(data) {
			            return '<p><strong>' + data.value + '</strong> – ' + data.id + '</p>';
			        }
			      }
        }).on('typeahead:selected', function (obj, datum) {
            this.fetchApi(datum.id)
        }.bind(this)); // END Instantiate the Typeahead UI
        //========================= END TYPEAHEAD ==============================//
    }

    render() {
        return ( 
        	<div className="page-wrapper">
        		<ListDestination list={this.state.data}/>
        	</div> 
        );
    }
}

export default Home;
