import {combineReducers} from 'redux'

import shoppingListItemReducer from './shoppingListItemReducer';
import editingItemReducer from './editingItemReducer';
import userReducer from './userReducer';


const rootReducer = combineReducers({
    user: userReducer,
    listItems: shoppingListItemReducer,
    editingItem: editingItemReducer
});

export default rootReducer;

