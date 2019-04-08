import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const FormRow = props =>{
    const {children} = props;
    return(
        <View>
            {children}
        </View>
    )
};

export default FormRow;
