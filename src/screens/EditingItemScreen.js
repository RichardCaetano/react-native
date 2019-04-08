import React, {Component} from 'react';

import ShoppingListForm from '../components/ShoppingListForm';



 const EditingItemScreen = props =>(
    <ShoppingListForm onNav={editing=> props.navigation.navigate('Main', {editing})}/>
 );

export default EditingItemScreen