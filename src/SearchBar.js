import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {saveInputValue} from "Actions";

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: "",
		};

		this.onSearchBlur = this.onSearchBlur.bind(this);
	}

	render() {
		const {placeholder} = this.props;

		return (
			<React.Fragment>
				<input className="search" type="text" placeholder={placeholder} onBlur={this.onSearchBlur} />
			</React.Fragment>
		);
	}

	onSearchBlur(e) {
		const {dispatch} = this.props;

		dispatch(saveInputValue(e.target.value));
	}
}

SearchBar.propTypes = {
	placeholder: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(SearchBar);
