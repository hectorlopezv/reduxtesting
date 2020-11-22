import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import store from './app/store';
import { Provider } from 'react-redux';//hook up redux store to react APP
import * as serviceWorker from './serviceWorker';

import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import resultReducer from './storeTest/reducers/result';
import counterReducer from './storeTest/reducers/counter';
//import redux-Thunk
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
  ctr: counterReducer,//props give us acces to that reducer state
  res: resultReducer  
});

const logger =  store => {
  return next => {
      return action => {//midleWare
        console.log('[MiddleWare] Dispatching', action);
        const result = next(action);//let action to conitnue to the reducer
        console.log('[MiddleWare] next state', store.getState());
        return result;
      }
  }
};


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)) );//Store Object - Store need a Reducer!

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
