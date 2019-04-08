import React, { Component } from 'react';
import { View,Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';

import ShoppingListItem from './ShoppingListItem';
import { toogleRefillItem, setEditingItem} from '../actions';

const ShoppingListList = ({ listItems, toogleRefillItem, setEditingItem , onNav, onNav2}) => (
    <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.containerListagem}>
                <Text style={styles.tituloListagem}>Itens</Text>
                <Text style={styles.tituloListagem}>Repor?</Text>
            </View>
            {
                listItems.map(item =>
                    <ShoppingListItem 
                        key={item.itemId}
                        item={item}
                        onPressItem={()=> setEditingItem(item)}
                        onPressRefill={()=> toogleRefillItem(item.itemId)}
                        onNav={onNav2}
                    />
                )
            }
        </ScrollView>
        <View style={{ alignItems: 'flex-end', }}>
            <TouchableOpacity
                 style={styles.adicionarItem}
                 onPress={onNav}
            >
                <Text style={{ color: 'white', fontSize: 30 }}>+</Text>
            </TouchableOpacity>
        </View>

    </View>
);

const styles = StyleSheet.create({
    containerListagem:
    {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    tituloListagem:
    {
        padding: 10,
        fontSize: 28,
        color: '#347d59'
    },
    adicionarItem: { 
        backgroundColor: '#377c59',
        width: 50,
        height: 50,
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20 
    }
});

const mapStateToProps = state =>{
    const {listItems} = state;
    return {listItems};
}

export default connect(mapStateToProps,{toogleRefillItem, setEditingItem})(ShoppingListList);