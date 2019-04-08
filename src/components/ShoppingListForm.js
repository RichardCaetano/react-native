import React, { Component } from 'react';
import { View,Text,StyleSheet, TextInput, Button} from 'react-native';
import {connect} from 'react-redux';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Input from './Input';
import { addItem, setEditingItem, updateItem, deteleItem} from '../actions';

var radio_props = [
    {label: 'Kg', value: 0 },
    {label: 'Lt', value: 1 },
    {label: 'Und', value: 2 },
    {label: 'Lata', value: 3 }
  ];


class ShoppingListForm extends Component {
    
    onChangeText(name){
        this.props.setEditingItem({name:name,parc:1});
    }

    onPress(name){  
        this.props.addItem(name);
    }

    cadItem(item){
        item.itemId ? this.props.updateItem(item) : this.props.addItem(item.name);
        this.props.onNav();
    }

    renderBtDel(item) {
        if (item.itemId)
            return (
                <Button
                    title='REMOVER ITEM'
                    onPress={() => this.props.deteleItem(item.itemId)}
                />
            )
    }
    

    render(){
        const {item} = this.props;
        const name = item.name;

        return (
            <View style={ [styles.containerListagem, {flex:1}]}>
                
                <View style={{marginBottom: 10, marginTop:10}}>
                    <Text style={styles.box}>Nome do item</Text>
                    <Input
                        placeholder='Digite nome do item'
                        onChangeText={name => this.onChangeText(name)}
                        value={name}
                    />
                </View>

                <View  style={{marginBottom: 10}}>
                    <Text style={[styles.box,{marginBottom: 10}]}>Unidade de medida</Text>
                    <RadioForm
                        radio_props={radio_props}
                        initial={0}
                        formHorizontal={true}
                        onPress={(value) => {this.setState({value:value})}}
                        buttonColor={'#cde8fd'}
                        buttonInnerColor={'#cde8fd'}
                        selectedButtonColor={'#6ba086'}
                        labelStyle={{fontSize:15,marginLeft: 2,marginRight: 15,color:'#6ba086'}}
                        
                        

                        />
                </View>

                <View  style={{marginBottom: 10}}>
                    <Text style={styles.box}>Data da Compra</Text>
                    <Input
                        placeholder='Digite data da compra'
                        style={styles.box}/>
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