import React, {Component} from 'react'
import CommentForm from './CommentForm'
import Attractions from './attractions'

const DestinationDetail = ({detail}) => {
	const geocoder = detail.metadata.martygeocoderlatlng[0].slice(1, -1).split(',');

	const position = { 
		lat: parseFloat(geocoder[0]), 
		lng: parseFloat(geocoder[1])
	}

	return (
		<div className="destination-detail">
			<div style={{ backgroundImage: `url(${detail.acf.main_image})` }} className="destination-banner">
				<img src={detail.acf.main_image} alt={detail.title.redered} />
				<div className="destination-title">
					<h1 className="container">{detail.title.rendered}</h1>
				</div>
			</div> 

			<div className="container">
				<div className="row">
					<div className="col-sm-9 pull-right">
						<div className="description" dangerouslySetInnerHTML={ {__html: detail.content.rendered} } />
						<Attractions center={position} />
					</div>
					<div className="col-sm-3 pull-left">
						<CommentForm postId={detail.id} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default DestinationDetail;