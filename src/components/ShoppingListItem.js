import React, { Component } from 'react';
import { View,Text,StyleSheet,TouchableOpacity, Switch} from 'react-native';
/*
const FormRow = props =>{
    const {children} = props;
    const x = () => {

    }*/
const ShoppingListItem = props => {
    const { item, onPressItem, onPressRefill, onNav} = props;
    const click = () =>  {
        onPressItem();
        onNav();
    };
    return (
        <View style={styles.containerListagem}>
            <TouchableOpacity onPress={click}>
                <Text style={styles.itensListagem}>{item.name}</Text>
            </TouchableOpacity>

            <Switch style={{ marginRight: 20 }}
                value={item.refill}
                onValueChange={onPressRefill}
            />
        </View>
    )
};
const styles = StyleSheet.create({
    containerListagem: 
    {
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        flexDirection: 'row',
    },
    itensListagem: 
    {
        padding: 20,
        fontSize: 16,
        color: '#6ba086'
    }
});

export default ShoppingListItem;