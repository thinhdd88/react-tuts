import React, {Component} from 'react';
import CommentForm from './CommentForm';

const DestinationDetail = ({detail}) => {
	console.log(detail);
	return (
		<div className="destination-detail">
			<div className="container">
				<h1>{detail.title.rendered}</h1>
				<div className="destination-banner">
					<img src={detail.acf.main_image} alt={detail.title.redered} />
				</div> 
				<div className="description" dangerouslySetInnerHTML={ {__html: detail.content.rendered} } />
				<CommentForm id={detail.id} />
			</div>
		</div>
	)
}

export default DestinationDetail;