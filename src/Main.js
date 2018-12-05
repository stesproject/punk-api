import React from "react";
import Button from "Button";
import SearchBar from "SearchBar";
import Dropdown from "Dropdown";
import BeersParent from "BeersParent";
import {getBeers} from "Actions";
import {connect} from "react-redux";

class Main extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};

		this.searchButton = this.searchButton.bind(this);
		this.previousButton = this.previousButton.bind(this);
		this.nextButton = this.nextButton.bind(this);
	}

	render() {
		const {beers, currentPage} = this.props;

		return (
			<React.Fragment>
				<h1>Choose Your Beer!</h1>

				<div className="menu-wrap">
					<Dropdown
						listElements={[
							{text: "Name", param: "beer_name"},
							{text: "Yeast", param: "yeast"},
							{text: "Malt", param: "malt"},
							{text: "Hops", param: "hops"},
							{text: "Food", param: "food"},
							{text: "ID", param: "ids"}
						]}
					/>
					<SearchBar placeholder="Search for..." />
				</div>

				<Button onClick={this.searchButton} text="Search" />

				<nav className="pages">
					<Button onClick={this.previousButton} text="←" disabled={currentPage <= 1} />
					{this.showCurrentPage()}
					<Button onClick={this.nextButton} text="→" disabled={!currentPage >= 1} />
				</nav>

				<BeersParent beers={beers} />
			</React.Fragment>
		);
	}

	showCurrentPage() {
		const {currentPage} = this.props;

		if (currentPage > 0) {
			return <h6>Page {currentPage}</h6>;
		}
	}

	searchButton() {
		this.getBeers(1);
	}

	previousButton() {
		const {currentPage} = this.props;

		this.getBeers(currentPage - 1);
	}

	nextButton() {
		const {currentPage} = this.props;

		this.getBeers(currentPage + 1);
	}

	getBeers(page) {
		const {dispatch, inputValue, dropdownValue} = this.props;

		if (inputValue != "") {
			dispatch(getBeers({param: dropdownValue.param, input: inputValue}));
		} else {
			dispatch(getBeers({page: page}));
		}
	}
}

const mapStateToProps = (state) => ({
	currentPage: state.currentPage,
	beers: state.beers,
	inputValue: state.inputValue,
	dropdownValue: state.dropdownValue
});

export default connect(mapStateToProps)(Main);
