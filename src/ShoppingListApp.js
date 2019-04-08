import React, {Component} from 'react';
import Router from './Router';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk'
//import devToolsEnhancer from 'remote-redux-devtools';
import { composeWithDevTools } from 'remote-redux-devtools';

import rootReducer from './reducers';
  
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(reduxThunk)
));

const ShoppingListApp = prop => (
    <Provider store={store}>
        <Router />
    </Provider>
);

export default ShoppingListApp;

/*
export default class ShoppingListApp extends Component{
    render(){
        return(
            <Provider store={store}>
                <Router/>
            </Provider>
            
        );
    }
}
*/


/*
import {createStore} from 'redux';
import rootReducer from './reducers';

import ShoppingListForm from './components/ShoppingListForm';
import ShoppingListList from './components/ShoppingListList';

import devToolsEnhancer from 'remote-redux-devtools';


const store = createStore(rootReducer,devToolsEnhancer());
export default class ShoppingList extends Component{

    render(){
        return(
            <Provider store={store}>
                <ShoppingListForm/>
                <ShoppingListList/>
            </Provider>
        );
    }
}*/
