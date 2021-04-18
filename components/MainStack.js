import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Login from './Login';
import Register from './Register';
import Welcome from './Welcome'

const Stack=createStackNavigator();

export default function MainStack() {
    return (
       <Stack.Navigator headerMode="none">
           <Stack.Screen name="login" component={Login}/>
           <Stack.Screen name="register" component={Register}/>
           <Stack.Screen name="welcome" component={Welcome}/>

       </Stack.Navigator>
    )
}
