import React from "react";
import PropTypes from "prop-types";

class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const {} = this.props;

		return (
			<React.Fragment>
				<nav className="menu">
					<ul>
						<li>
							<a id="filter" href="#">
								Name
								<span className="arrow">&#9660;</span>
							</a>

							<ul className="sub-menu">
								<li>
									<a data-param="beer_name" href="#">
										Name
									</a>
								</li>
								<li>
									<a data-param="yeast" href="#">
										Yeast
									</a>
								</li>
								<li>
									<a data-param="malt" href="#">
										Malt
									</a>
								</li>
								<li>
									<a data-param="food" href="#">
										Food
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
			</React.Fragment>
		);
	}
}

Dropdown.propTypes = {
};

export default Dropdown;
