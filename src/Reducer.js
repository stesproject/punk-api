import {GET_BEERS, SAVE_DESCRIPTION} from "./Actions";

const initialState = {
	currentPage: 0,
	beers: [],
	descriptions: []
};

let Desc = [];

export function reducer(state = initialState, actions) {
	switch (actions.type) {
		case GET_BEERS: {
			const {data} = actions.payload;
			const {descriptions, beers, currentPage} = state;

			let Beers = [];

			for (const d of data) {
				Beers.push({image: d.image_url, description: d.description, id: d.id});
			}

			for (const beer of data) {
				if (beer.id > Desc.length) {
					Desc.push(beer.description);
				} else {
					/* debugger; */
					let i = data.indexOf(beer);
					Beers[i].description = Desc[beer.id - 1];
				}
			}

			return {
				...state,
				beers: Beers,
				descriptions: Desc,
				currentPage: actions.page
			};
		}

		case SAVE_DESCRIPTION: {
			const {description, id} = actions;
			const {descriptions} = state;

			return {
				...state,
				descriptions: (descriptions[id] = description)
			};
		}

		default:
			return state;
	}
}
