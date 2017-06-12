import React, {Component} from 'react';
import {Link } from 'react-router'; 

// class Destination extends Component {
// 	render() {
// 		return(
// 			<li className="col-md-4 hover-effect item">
// 				<figure className="effect-lily">
// 					<img src={this.props.data.acf.image} alt={this.props.data.name} />
// 					<figcaption>
// 						<div>
// 							<h2>{this.props.data.name}</h2>
// 							<p className="description" dangerouslySetInnerHTML={ {__html: this.props.data.description} } />
// 						</div>
//                         <Link className="nav-link" to={'/destination/' + this.props.data.slug} >View more</Link>
// 					</figcaption>			
// 				</figure>
// 			</li>
// 		); 
// 	}
// }

const Destination = ({data}) => (
	<li className="col-md-4 col-xs-6 hover-effect item">
		<figure className="effect-lily">
			<img src={data.acf.image} alt={data.name} />
			<figcaption>
				<div>
					<h2>{data.name}</h2>
					<p className="description" dangerouslySetInnerHTML={ {__html: data.description} } />
				</div>
	            <Link className="nav-link" to={'/destination/' + data.slug} >View more</Link>
			</figcaption>			
		</figure>
	</li>
)

export default Destination;

