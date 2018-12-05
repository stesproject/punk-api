import React from "react";
import PropTypes from "prop-types";

class ListElement extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const {text, param, onClick} = this.props;

		return (
			<li>
				<a data-param={param} href="#" onClick={onClick}>
					{text}
				</a>
			</li>
		);
	}
}

ListElement.propTypes = {
    text: PropTypes.string.isRequired,
    param: PropTypes.string,
};

export default ListElement;
