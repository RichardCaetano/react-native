import {createAppContainer, createStackNavigator} from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import ShoppingListScreen from './screens/ShoppingListScreen';
import EditingItemScreen from './screens/EditingItemScreen';
 
const AppNavigator = createStackNavigator({
    'Login':{
        screen: LoginScreen,
        navigationOptions:{
            title: 'Login',
        }
    },
    'Main':{
        screen: ShoppingListScreen,
        navigationOptions:{
            title: 'Listagem de Itens',
        }
    },
    'Editing':{
        screen: EditingItemScreen,
        navigationOptions:{
            title: 'Edição de Itens',
        }
    },
    'Insert':{
        screen: EditingItemScreen,
        navigationOptions:{
            title: 'Inclusão de Itens',
        }
    }
},{
    defaultNavigationOptions:{
        title: "Shopping List!",
        headerTintColor:'#FFF',
        headerStyle:{
            backgroundColor: '#9db08a',
        },
        headerTitleStyle:{
            color:'#FFF',
            flexGrow:1,
            textAlign: 'center',
        }
    }
});

const Router = createAppContainer(AppNavigator);

export default Router;
