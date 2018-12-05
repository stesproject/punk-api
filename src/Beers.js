import React from "react";
import {getBeers} from "Actions";
import Button from "Button";
import SearchBar from "SearchBar";
import Dropdown from "Dropdown";
import BeersParent from "BeersParent";
import {connect} from "react-redux";

class Beers extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};

		this.searchButton = this.searchButton.bind(this);
		this.previousButton = this.previousButton.bind(this);
		this.nextButton = this.nextButton.bind(this);
	}

	componentDidMount() {
		let lastParam = "beer_name";
		let param;
		let filter = document.getElementById("filter");

		if (filter == undefined) return;

		document.querySelector("li").addEventListener("click", setParam);

		function setParam(e) {
			param = e.target.getAttribute("data-param");

			if (lastParam !== param && param !== null) {
				setFilter(e.target.innerHTML);
				lastParam = param;
			}
		}

		function setFilter(f) {
			filter.innerHTML = f + "&#9660;";
		}
	}

	render() {
		const {beers} = this.props;

		return (
			<React.Fragment>
				<h1>Choose your beer</h1>

				<div className="menu-wrap">
					<Dropdown />
					<SearchBar type="text" placeholder="Search for..." />
				</div>

				<Button onClick={this.searchButton} text="Search" />

				<nav className="pages">
					<Button onClick={this.previousButton} text="←" />
					<Button onClick={this.nextButton} text="→" />
				</nav>

				<BeersParent beers={beers} />
			</React.Fragment>
		);
	}

	searchButton() {
		const {dispatch} = this.props;

		dispatch(getBeers(1));
	}

	previousButton() {
		const {currentPage, dispatch} = this.props;

		let page = currentPage - 1;

		if (page <= 0) {
			return;
		}

		dispatch(getBeers(page));
	}

	nextButton() {
		const {currentPage, dispatch} = this.props;

		let page = currentPage + 1;

		dispatch(getBeers(page));
	}
}

const mapStateToProps = (state) => ({
	currentPage: state.currentPage,
	beers: state.beers
});

export default connect(mapStateToProps)(Beers);
