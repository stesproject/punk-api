import React from "react";
import PropTypes from "prop-types";

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const {type, placeholder} = this.props;

		return (
			<React.Fragment>
				<input className="search" type={type} placeholder={placeholder} />
			</React.Fragment>
		);
	}
}

SearchBar.propTypes = {
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired
};

export default SearchBar;
