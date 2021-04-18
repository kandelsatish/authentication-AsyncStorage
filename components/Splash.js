import React from 'react'
import {View,Text,ActivityIndicator,StyleSheet} from 'react-native'
export default function Splash() {
    return (
       <View style={styles.container}>
           <ActivityIndicator size="large" color="red"/>
       </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
