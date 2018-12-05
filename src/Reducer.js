import {GET_BEERS, SAVE_DESCRIPTION, SAVE_INPUTVALUE, SAVE_DROPDOWNVALUE} from "./Actions";

const initialState = {
	currentPage: 0,
	beers: [],
	descriptions: [],
	inputValue: "",
	dropdownValue: {text: "Name", param: "beer_name"}
};

let Desc = [];

export function reducer(state = initialState, actions) {
	switch (actions.type) {
		case GET_BEERS: {
			const {data} = actions.payload;

			let Beers = [];

			for (const d of data) {
				Beers.push({image: d.image_url, description: d.description, name: d.name, id: d.id});
			}

			for (const beer of data) {
				if (beer.id > Desc.length) {
					Desc.push(beer.description);
				} else {
					let i = data.indexOf(beer);
					Beers[i].description = Desc[beer.id - 1];
				}
			}

			let page = 0;
			if (actions.page != undefined) {
				page = actions.page;
			}

			return {
				...state,
				beers: Beers,
				descriptions: Desc,
				currentPage: page
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

		case SAVE_INPUTVALUE: {
			const {inputValue} = actions;
			Desc.length = 0;
			
			return {
				...state,
				inputValue: inputValue
			};
		}

		case SAVE_DROPDOWNVALUE: {
			const {dropdownValue} = actions;
			
			return {
				...state,
				dropdownValue: dropdownValue
			};
		}

		default:
			return state;
	}
}
