import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import products from './products.json';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import {appReducer} from './modules/reducer';



const initialState = {
                      products:
                      products.reduce(
                        (hashmap, item) =>
                         ({
                         ...hashmap,
                         [item.id]: item
                       }),
                    {}),
                      cart: {},
                     }
const store = createStore(appReducer, initialState,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
