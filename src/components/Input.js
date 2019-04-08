import React, { Component } from 'react';
import { View,Text,StyleSheet, TextInput, Button} from 'react-native';

const Input = ({onChangeText, value}) =>(
    <TextInput 
        onChangeText={onChangeText}
        value={value}
        style={styles.input}
    />
);

const styles = StyleSheet.create({
    input:{
        borderColor:'#cde8fd',
        borderWidth: 1,
        color: 'green',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
});

export default Input;