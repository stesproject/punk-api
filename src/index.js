import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware } from "redux";
import {Provider} from "react-redux";
import Main from "Main";
import {reducer} from "Reducer";
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

const App = () => (
	<Provider store={store}>
		<Main />
	</Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
