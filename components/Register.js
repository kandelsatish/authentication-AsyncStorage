import React,{useState} from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Container, Content, Form, Item, Input, Label, Button } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage'
export default function Register({navigation}) {
    // const [username,setUsername]=useState('');
    // const [password,setPassword]=useState('');
    // const [confrompassword,setConfromPassword]=useState('');
     const [userdata,setUserData]=useState({
        username:'',
        password:'',
        confrompassword:''
    })

    const handelSignUp= async (userdata)=>{
        if(userdata.password===userdata.confrompassword){
            try{
                await AsyncStorage.setItem("data",JSON.stringify(userdata));
                navigation.goBack();
            }
            catch(err){
                console.log(err);
            }
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.formView}>
                <Form>
                    <Item>
                        <Input placeholder="Username"  onChangeText={(val)=>setUserData({...userdata,username:val})}/>
                    </Item>
                    <Item last>
                        <Input placeholder="Password"  onChangeText={(val)=>setUserData({...userdata,password:val})} />
                    </Item>
                    <Item last>
                        <Input placeholder="conform-password"  onChangeText={(val)=>setUserData({...userdata,confrompassword:val})}/>
                    </Item>
                </Form>
                <TouchableOpacity style={{alignSelf:'center',marginTop:40}}
                onPress={()=>handelSignUp(userdata)}
                >
                    <Text style={styles.loginbtn}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignSelf:'center',marginTop:20}}
                onPress={()=>navigation.goBack}
                >
                    <Text>Go Back</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    formView: {
        backgroundColor: '#ffff',
        height: 320,
        width: "90%",
        alignSelf: 'center'
    },
    loginbtn:{
        backgroundColor:'red',
        padding:20,
        borderRadius:10,
        color:'#fff'
    }
})
