import React,{useEffect,useState} from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import MainStack from './components/MainStack';
import AuthProvider from './components/AuthProvider'

import AsyncStorage from '@react-native-async-storage/async-storage'
import Splash from './components/Splash';
const App = () => {
  const [isloading,setIsLoading]=useState(true);
  const [token,setToken]=useState(null);
  useEffect(async ()=>{
    try{
      const tokens=await AsyncStorage.getItem("data")
      setToken(tokens)
    }
    catch(err){
      console.log(err);
    }
  })

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  if(isloading){
    return <Splash/>
  }
  return (
    <AuthProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </AuthProvider>

  );
};

const styles = StyleSheet.create({

});

export default App;
