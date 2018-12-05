import React from "react";
import PropTypes from "prop-types";
import ListElement from "ListElement";
import {saveDropdownValue} from "Actions";
import {connect} from "react-redux";
import {uid} from "react-uid";

class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            text: "Name",
			param: "beer_name"
        };
        
		this.saveDropdownValue = this.saveDropdownValue.bind(this);
	}

	render() {
		const {listElements, dropdownValue} = this.props;

		return (
			<React.Fragment>
				<nav className="menu">
					<ul>
						<li>
							<a id="filter" href="#">
								{dropdownValue.text}
								<span className="arrow">&#9660;</span>
							</a>

							<ul className="sub-menu">
								{this.displayListElements(listElements)}
							</ul>
						</li>
					</ul>
				</nav>
			</React.Fragment>
		);
	}

	displayListElements(listElements) {
		return listElements.map((el) => <ListElement key={uid(el)} text={el.text} param={el.param} onClick={this.saveDropdownValue} />);
    }
    
    saveDropdownValue(e) {
        const {dispatch} = this.props;
        
		dispatch(saveDropdownValue({text: e.target.text, param:  e.target.dataset.param}));
    }
}

Dropdown.propTypes = {
    listElements: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
	dropdownValue: state.dropdownValue
});

export default connect(mapStateToProps)(Dropdown);
