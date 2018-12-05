import Axios from "axios";

const URL = "https://api.punkapi.com/v2/beers";
const ELEMENTS_PER_PAGE = 10;

export const GET_BEERS = "GET_BEERS";
export const SAVE_DESCRIPTION = "SAVE_DESCRIPTION";

export function getBeers(page) {
	return (dispatch) => {
		Axios.get(URL, {
			params: {
				["page"]: page,
				["per_page"]: ELEMENTS_PER_PAGE
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
