import React from "react";
import PropTypes from 'prop-types';

class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
    }

	render() {
        const {text, onClick, buttonId, disabled} = this.props;

		return (
			<React.Fragment>
                <button id={buttonId} onClick={onClick} disabled={disabled}>{text}</button>
			</React.Fragment>
		);
	}
}

Button.defaultProps = {
	disabled: false,
}

Button.propTypes = {
	buttonId: PropTypes.string,
	onClick: PropTypes.func,
	text: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
}

export default Button;
