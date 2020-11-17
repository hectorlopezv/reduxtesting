import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//redux imports
import {createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';
//reducers import
import storeReducerAsign from '../src/Assigment/reducers/storeReducerAsign';


const rootReducer = combineReducers({
    str : storeReducerAsign
});
const store = createStore(rootReducer);


ReactDOM.render(<Provider store={store} ><App/></Provider>, document.getElementById('root'));
serviceWorker.unregister();
