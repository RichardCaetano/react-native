import firebase from 'firebase';
import Alert from 'react-native';

export const ADD_ITEM = 'ADD_ITEM';
export const addItem = item =>({
    type: ADD_ITEM,
    item
});

export const TOOGLE_REFILL_ITEM = 'TOOGLE_REFILL_ITEM';
export const toogleRefillItem = itemId =>({
    type: TOOGLE_REFILL_ITEM,
    itemId
});

export const SET_EDITING_ITEM = 'SET_EDITING_ITEM';
export const setEditingItem = item =>{
    return{
    type: SET_EDITING_ITEM,
    item
    }
};

export const UPDATE_ITEM = 'UPDATE_ITEM';
export const updateItem = item =>({
    type: UPDATE_ITEM,
    item
});

export const DELETE_ITEM = 'DELETE_ITEM';
export const deteleItem = itemId =>({
    type: DELETE_ITEM,
    itemId
});

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const userLoginSuccess = user =>({
    type: USER_LOGIN_SUCCESS,
    user
});

export const USER_LOGOUT = 'USER_LOGOUT';
export const userLogout = user =>({
    type: USER_LOGOUT
});

export const tryLogin = ({ email, password }) => dispatch => {
    return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user =>{
            const action = userLoginSuccess(user);
            dispatch(action);
        })
        .catch(error => {
            return Promise.reject(error);
        })
}


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

export const saveItem = item =>{
    const {currentUser} = firebase.auth();
    alert(`/users/${currentUser.uid}`);
    const x = {
        nome: 'aaa',
        age: '2019-06-19'
    }
    console.log(item);
    const db = firebase
        .database()
        .ref(`/users/${currentUser.uid}`)
        .push(item)
        .then(()=>{
            alert('ok')
        })
        .catch(()=>{
            alert('erro')
        })
}

