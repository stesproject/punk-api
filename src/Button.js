import React from "react";
import PropTypes from 'prop-types';

class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
    }

	render() {
        const {text, onClick, buttonId} = this.props;

		return (
			<React.Fragment>
                <button id={buttonId} onClick={onClick}>{text}</button>
			</React.Fragment>
		);
	}
}

Button.propTypes = {
	buttonId: PropTypes.string,
	onClick: PropTypes.func,
    text: PropTypes.string.isRequired,
}

export default Button;
