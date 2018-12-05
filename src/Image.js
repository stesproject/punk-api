import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Button from "Button";
import {saveBeerDescription} from "Actions";

class Image extends React.Component {
	constructor(props) {
		super(props);

		this.IMG_WIDTH = "80px";
		this.IMG_HEIGHT = "200px";

		this.state = {
			description: undefined
		};

		this.onButtonClick = this.onButtonClick.bind(this);
		this.onTextBlur = this.onTextBlur.bind(this);
	}

	render() {
		const {source, description} = this.props;

		return (
			<React.Fragment>
				<div className="beerCard">
					<img src={source} width={this.IMG_WIDTH} height={this.IMG_HEIGHT} />
					<div>
						<textarea defaultValue={description} onBlur={this.onTextBlur} />
						<Button text="Save" onClick={this.onButtonClick} />
					</div>
				</div>
			</React.Fragment>
		);
	}

	onTextBlur(e) {
		this.setState({description: e.target.value});
	}

	// Save button
	onButtonClick(e) {
		const {dispatch, id} = this.props;
		const {description} = this.state;

		if (description == undefined) return;

		dispatch(saveBeerDescription(description, id - 1));
	}
}

Image.propTypes = {
	source: PropTypes.string.isRequired,
	description: PropTypes.string,
	id: PropTypes.number
};

const mapStateToProps = (state) => ({
	currentPage: state.currentPage,
	beers: state.beers
});

export default connect(mapStateToProps)(Image);
