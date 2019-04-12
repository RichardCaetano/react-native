import React, { Component } from 'react';
import { View,Text,StyleSheet, TextInput, Button} from 'react-native';
import {connect} from 'react-redux';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Input from './Input';
import { addItem, setEditingItem, updateItem, deteleItem} from '../actions';
import DatePicker from 'react-native-datepicker'

const radio_props = [
    {label: 'Kg', value: 0 },
    {label: 'Lt', value: 1 },
    {label: 'Und', value: 2 },
    {label: 'Lata', value: 3 }
  ];


class ShoppingListForm extends Component {
    
    constructor(props){
        super(props)
        this.state = new Date()
    }

    onChangeHandler(field,value){
        this.props.setEditingItem({field,value});
    }

    cadItem(item){
        item.itemId ? this.props.updateItem(item) : this.props.addItem(item);
        this.props.onNav();
    }

    renderBtDel(item) {
        if (item.itemId)
            return (
                <Button
                    title='REMOVER ITEM'
                    onPress={() => {this.props.deteleItem(item.itemId); this.props.onNav();}}
                />
            )
    }
    

    render(){
        const {item} = this.props;
        console.log('meu item2', item);
        const name = item.name;
        const date = item.date;
        const unit = item.unit;

        return (
            <View style={ [styles.containerListagem, {flex:1}]}>
                
                <View style={{marginBottom: 10, marginTop:10}}>
                    <Text style={styles.box}>Nome do item</Text>
                    <Input
                        placeholder='Digite nome do item'
                        onChangeText={name => this.onChangeHandler('name',name)}
                        value={name}
                    />
                </View>

                <View  style={{marginBottom: 10}}>
                    <Text style={[styles.box,{marginBottom: 10}]}>Unidade de medida</Text>
                    <RadioForm
                        radio_props={radio_props}
                        initial={unit}
                        formHorizontal={true}
                        onPress={unit => this.onChangeHandler('unit',unit)}
                        buttonColor={'#cde8fd'}
                        buttonInnerColor={'#cde8fd'}
                        selectedButtonColor={'#6ba086'}
                        labelStyle={{fontSize:15,marginLeft: 2,marginRight: 15,color:'#6ba086'}}
                        
                        

                        />
                </View>

                <View  style={{marginBottom: 10}}>
                    <Text style={styles.box}>Data da Compra</Text>
                    
                    <DatePicker
                        style={{width: '100%'}}
                        date={date}
                        mode="date"
                        placeholder="Selecione a data da compra"
                        format="YYYY-MM-DD"
                        minDate= '2015-01-01'
                        maxDate="2030-12-31"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        showIcon={false}
                        customStyles={{                            
                            dateInput: {
                              color:'red',
                              alignItems:'flex-start',
                              paddingLeft: 10,
                              borderColor:'#cde8fd'
                            }
                            // ... You can check the source to find the other keys.
                          }}
                        onDateChange={date => this.onChangeHandler('date',date)}
                    />
                </View>

                <View style={styles.botoes}>
                    <Button
                        onPress = {() => this.cadItem(item)}
                        title={item.itemId ? 'SALVAR' : 'INCLUIR'}

                    />
                    { this.renderBtDel(item) }            
                </View>
            </View>
        )
      }
}
const styles = StyleSheet.create({
    containerListagem:{
        paddingLeft:20,
        paddingRight:20,
    },
    botoes:{
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input:{
        borderColor:'#6ba086',
        borderWidth: 1,
        width:'100%'
    },
    itensListagem: 
    {
        padding: 20,
        fontSize: 16,
        color: '#6ba086'
    },
    switchListagem:
    {
        padding: 20
    },
    box:{
        color: '#6ba086'
    }
});


const mapStateToProps = state =>{
    return{
        item: state.editingItem
    }
}

export default connect(mapStateToProps, {addItem, setEditingItem, updateItem, deteleItem})(ShoppingListForm);

/*
const mapStateToProps = store =>({
    newValue:store.editaState.newValue
});

export default connect(mapStateToProps)(EditaItens);

*/