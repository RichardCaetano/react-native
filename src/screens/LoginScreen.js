import React, {Component} from 'react';
import {View, Text, TextInput, Button, StyleSheet, ActivityIndicator, Alert} from 'react-native';

import firebase from 'firebase';

import FormRow from '../components/FormRow';

import { userLoginSuccess } from '../actions';
import { connect } from 'react-redux';

class LoginScreen extends Component{

    constructor(props){
        super(props);
        this.state ={
            mail: '',
            password: '',
            isLoading: false,
            message: ''
        }
    }

    onChangeHandler(field, value){
        this.setState({[field] : value});
    }

    componentDidMount(){
        const config = {
            apiKey: "AIzaSyBOIGIJyxPRbAl8mzQAcBGYBfzDfZALRoE",
            authDomain: "shoppinglist-e4e59.firebaseapp.com",
            databaseURL: "https://shoppinglist-e4e59.firebaseio.com",
            projectId: "shoppinglist-e4e59",
            storageBucket: "shoppinglist-e4e59.appspot.com",
            messagingSenderId: "842373526324"
          };

          if(!firebase.apps.length)
            firebase.initializeApp(config);

    }

    tryLogin(){
        this.setState({isLoading:true});

        const {mail : email, password } = this.state;

        const loginUserSucess = user =>{
            this.props.userLoginSuccess(user);
            this.props.navigation.replace('Main');
        }
        const loginUserFailed = error =>{
            Alert.alert(
                'Ops... Algo deu errado!',
                error.code
            )
        }

        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(loginUserSucess)
        .catch(error =>{
            if(error.code === 'auth/user-not-found'){
                Alert.alert(
                    'Usuário não encontrado!',
                    'Deseja cadastar um usuário com as informações inseridas?',
                    [{
                        text: 'Não',
                        onPress: () => {}
                    },{
                        text: 'Sim',
                        onPress: () => {
                            firebase.auth()
                            .createUserWithEmailAndPassword(email, password)
                            .then(loginUserSucess)                            
                            .catch(loginUserFailed)
                        }
                    }],
                    { cancelable:false }
                )
                return;
            }
            loginUserFailed(error);
        })
        .then(() => this.setState({ isLoading: false }))
    }

    renderButton() {
        if(this.state.isLoading)
            return <ActivityIndicator/>

        return (
            <Button
                title="Entrar"
                onPress={() => this.tryLogin()}
            />
        )
    }

    render(){
        return(
            <View>
                <FormRow>
                    <TextInput style={styles.input}
                        placeholder='user@mail.com'
                        value={this.state.mail}
                        onChangeText={value => this.onChangeHandler('mail', value)}
                    />
                </FormRow>                
                <FormRow>
                    <TextInput style={styles.input}
                        placeholder='*******'
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={value => this.onChangeHandler('password', value)}
                    />
                </FormRow>
                { this.renderButton() }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input:{
        borderColor:'#6ba086',
        borderWidth: 1,
        color: 'green',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,
    }
});

//mapStateToProps
export default connect(null, {userLoginSuccess} )(LoginScreen);