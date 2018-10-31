import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';
import {fetchTaskManagers, fetchJobs, fetchClusterInfo} from './actions';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import {library} from '@fortawesome/fontawesome-svg-core'
import {
	faTachometerAlt,
	faTasks,
	faCheckCircle,
	faSitemap,
	faServer,
	faUpload,
	faSignInAlt,
	faMemory,
	faHandshake,
	faBatteryThreeQuarters
} from '@fortawesome/free-solid-svg-icons'

library.add(faTachometerAlt)
library.add(faTasks)
library.add(faCheckCircle)
library.add(faSitemap)
library.add(faServer)
library.add(faUpload)
library.add(faSignInAlt)
library.add(faMemory)
library.add(faHandshake)
library.add(faBatteryThreeQuarters)

const loggerMiddleware = createLogger()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(
		thunkMiddleware, // lets us dispatch() functions
		loggerMiddleware // neat middleware that logs actions
	))
)

// Dispatch actions
setInterval(() => {
	store.dispatch(fetchJobs())
	store.dispatch(fetchTaskManagers())
	store.dispatch(fetchClusterInfo())
}, 5000)

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
