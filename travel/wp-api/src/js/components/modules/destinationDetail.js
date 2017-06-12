import React, {Component} from 'react';

const DestinationDetail = ({detail}) => {
	return (
		<div className="destination-detail">
			<div className="container">
				<h1>{detail.name}</h1>
				<div className="destination-banner">
					<img src={detail.acf.image} alt={detail.name} />
				</div> 
				<div className="description" dangerouslySetInnerHTML={ {__html: detail.description} } />
			</div>
		</div>
	)
}

export default DestinationDetail;