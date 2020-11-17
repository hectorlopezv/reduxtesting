import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import store from './app/store';
import { Provider } from 'react-redux';//hook up redux store to react APP


import {createStore} from 'redux';
import storeTestReducer from './storeTest/storeTestReducer';


import * as serviceWorker from './serviceWorker';
//<React.StrictMode>
//<Provider store={store}>
 // <App />
//</Provider>
//</React.StrictMode>,
//document.getElementById('root')

const store = createStore(storeTestReducer);



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
