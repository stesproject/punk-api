import React from "react";
import PropTypes from "prop-types";
import BeerCard from "BeerCard";
import {uid} from "react-uid";

class BeersParent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<React.Fragment>
				<nav className="beersParent">{this.showBeers()}</nav>
			</React.Fragment>
		);
	}

	showBeers() {
		const {beers} = this.props;

		if (beers.length <= 0) return;
		
		return beers.map((beers) => (<BeerCard key={uid(beers)} source={beers.image} description={beers.description} name={beers.name} id={beers.id} />));
	}
}

BeersParent.propTypes = {
    beers: PropTypes.array,
};

export default BeersParent;
