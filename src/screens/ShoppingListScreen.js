import React, {Component} from 'react';
import ShoppingListList from '../components/ShoppingListList';

const ShoppingListScreen = props =>(
    <ShoppingListList 
        onNav={editing => props.navigation.navigate('Insert', {editing})}
        onNav2={editing => props.navigation.navigate('Editing', {editing})}
    />    
);

export default ShoppingListScreen;