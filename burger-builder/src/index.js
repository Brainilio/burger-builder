import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter } from "react-router-dom"

//redux methods and components
import thunk from "redux-thunk"
import burgerBuilderReducer from "./store/reducers/burgerBuilder"
import orderReducer from "./store/reducers/order"
import authReducer from "./store/reducers/auth"
import { createStore, applyMiddleware, compose, combineReducers } from "redux"
import { Provider } from "react-redux"

//combine reducers
const rootReducer = combineReducers({
	burgerBuilder: burgerBuilderReducer,
	order: orderReducer,
	auth: authReducer,
})

const devtools =
	process.env.NODE_ENV === "test"
		? (x) => x /* eslint-disable no-underscore-dangle */
		: window.__REDUX_DEVTOOLS_EXTENSION__ &&
		  window.__REDUX_DEVTOOLS_EXTENSION__()
/* eslint-enable no-underscore-dangle */

//create store and compose applymiddleware + devtools
const store = createStore(rootReducer, compose(applyMiddleware(thunk)))

const app = (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
)
ReactDOM.render(app, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
