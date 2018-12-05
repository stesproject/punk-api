import Axios from "axios";

const URL = "https://api.punkapi.com/v2/beers";
const ELEMENTS_PER_PAGE = 12;

export const GET_BEERS = "GET_BEERS";
export const SAVE_DESCRIPTION = "SAVE_DESCRIPTION";
export const SAVE_INPUTVALUE = "SAVE_INPUTVALUE";
export const SAVE_DROPDOWNVALUE = "SAVE_DROPDOWNVALUE";

export function getBeers({page, param, input}) {
	let param1, value1, param2, value2;
	
	if (page != undefined) {
		param1 = "page";
		value1 = page;
		param2 = "per_page";
		value2 = ELEMENTS_PER_PAGE;
	}
	else {
		param1 = param;
		value1 = input;
	}

	return (dispatch) => {
		Axios.get(URL, {
			params: {
				[param1]: value1,
				[param2]: value2
			}
		})
			.then(function(Response) {
				dispatch({type: GET_BEERS, payload: {data: Response.data}, page: page});
			})
			.catch(function(error) {
				console.log(error);
			});
	};
}

export function saveBeerDescription(description, id) {
	return (dispatch) => {
		dispatch({type: SAVE_DESCRIPTION, description: description, id: id});
	};
}

export function saveInputValue(value) {
	return (dispatch) => {
		dispatch({type: SAVE_INPUTVALUE, inputValue: value});
	};
}

export function saveDropdownValue(value) {
	return (dispatch) => {
		dispatch({type: SAVE_DROPDOWNVALUE, dropdownValue: value});
	};
}
