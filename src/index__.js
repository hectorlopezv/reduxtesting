import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App__';
import * as serviceWorker from './serviceWorker';
//redux imports
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';

//reducers import
import storeReducerAsign from './Assigment/reducers/storeReducerAsign';

const logger = store => {//middleware just return another funciton
    //we also have access to the store
    return (next) => {// a function to execute to let the action continue its journey to the store!
        return action => { //code we want to run beetween action and store
            console.log('[MiddleWare] Dispatching', action);
            const result = next(action);//to let action continue!... we can modify thea ction
            console.log('[MiddleWare] next state', store.getState());

            return result;
        }
    }
}

const rootReducer = combineReducers({
    str : storeReducerAsign
});
const store = createStore(rootReducer, applyMiddleware(logger));
//reducer, enchancer(middleware) the will executed in order 
//if you pass multiple middlewares


ReactDOM.render(<Provider store={store} ><App/></Provider>, document.getElementById('root'));
serviceWorker.unregister();
