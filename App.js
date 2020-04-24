import { createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'

import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyA6Hd7o9ZBCqR-gbb31MV_pfG3n8utfwLY",
    authDomain: "translatorapp-b2df5.firebaseapp.com",
    databaseURL: "https://translatorapp-b2df5.firebaseio.com",
    projectId: "translatorapp-b2df5",
    storageBucket: "translatorapp-b2df5.appspot.com",
    messagingSenderId: "182168425329",
    appId: "1:182168425329:web:a4a2df0468b659bfb49cd0",
    measurementId: "G-S42Y2MF2FE"
  };
  
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  const AppStack = createStackNavigator({
      Home:HomeScreen
  })

  const AuthStack = createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen
})

export default createAppContainer(
    createSwitchNavigator(
    {
        Loading: LoadingScreen,
        App: AppStack,
        Auth: AuthStack
    },
    {
        initialRouteName: "Loading"

    }
    )
)