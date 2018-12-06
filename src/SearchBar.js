import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {saveInputValue} from "Actions";
import Downshift from "downshift";
import axios from "axios";

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: "",
			beers: []
		};

		this.fetchBeers = this.fetchBeers.bind(this);
		this.inputOnChange = this.inputOnChange.bind(this);
		this.downshiftOnChange = this.downshiftOnChange.bind(this);
	}

	inputOnChange(event) {
		if (!event.target.value) {
			return;
		}
		this.fetchBeers(event.target.value);
	}

	downshiftOnChange(selectedBeer) {
		const {dispatch} = this.props;
		console.log(selectedBeer);
		dispatch(saveInputValue(selectedBeer.name));
	}

	// Fetch the beers from Punk API.
	fetchBeers(value) {
		const {dropdownValue} = this.props;

		const URL = "https://api.punkapi.com/v2/beers";
		axios
			.get(URL, {
				params: {
					[dropdownValue.param]: value,
					["per_page"]: "10",
				}
			})
			.then((response) => {
				this.setState({beers: response.data});
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	render() {
		const {placeholder} = this.props;
		const {beers} = this.state;

		return (
			<Downshift onChange={this.downshiftOnChange} itemToString={(item) => (item ? item.name : "")}>
				{({selectedItem, getInputProps, getItemProps, highlightedIndex, isOpen, inputValue, getLabelProps}) => (
					<div>
						{/* <label style={{marginTop: "1rem", display: "block"}} {...getLabelProps()}>
							Choose your beer
						</label>{" "}
						<br /> */}
						<input
							{...getInputProps({
								className: "search",
								placeholder: placeholder,
								onChange: this.inputOnChange
							})}
						/>
						{isOpen ? (
							<div className="downshift-dropdown">
								{// Filter the beers in the state
								beers
									.filter((item) => !inputValue || item.name.toLowerCase().includes(inputValue.toLowerCase()))
									// Map the filtered beers and display their name.
									.map((item, index) => (
										<div
											className="downshift-dropdown"
											{...getItemProps({key: index, index, item})}
											style={{
												backgroundColor: highlightedIndex === index ? "#ffbf71" : "#ffe4c2",
												fontWeight: selectedItem === item ? "bold" : "normal"
											}}
										>
											{item.name}
										</div>
									))}
							</div>
						) : null}
					</div>
				)}
			</Downshift>
		);
	}
}

SearchBar.propTypes = {
	placeholder: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
	dropdownValue: state.dropdownValue
});

export default connect(mapStateToProps)(SearchBar);
