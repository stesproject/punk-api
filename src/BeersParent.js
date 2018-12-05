import React from "react";
import PropTypes from "prop-types";
import Image from "Image";
import {uid} from "react-uid";

class BeersParent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<React.Fragment>
				<nav className="beersParent">{this.showImages()}</nav>
			</React.Fragment>
		);
	}

	showImages() {
		const {beers} = this.props;

		if (beers.length <= 0) return;
		
		return beers.map((beers) => (<Image key={uid(beers)} source={beers.image} description={beers.description} id={beers.id} />));
	}
}

BeersParent.propTypes = {
    beers: PropTypes.array,
};

export default BeersParent;
