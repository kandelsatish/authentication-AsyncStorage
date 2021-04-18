import React, { useState, useContext } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Container, Content, Form, Item, Input, Label, Button } from 'native-base';
import { Authentication } from './AuthProvider'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Login({ navigation }) {
    // const {user,pass}=useContext(Authentication);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleLogin = async (username, password) => {
        try {
            const jsondata = await AsyncStorage.getItem('data');
            const jsonvalue = jsondata != null ? JSON.parse(jsondata) : null;
            console.log(jsonvalue.username);
            if (username === jsonvalue.username && password === jsonvalue.password) {
                navigation.navigate("welcome");
            }
            else {
                alert("invalid username or password");
            }
        }

        catch (e) {
            console.log(e);
        }

    }
    return (
        <View style={styles.container}>
            <View style={styles.formView}>
                <Form>
                    <Item>
                        <Input placeholder="Username" onChangeText={(val) => setUsername(val)} />
                    </Item>
                    <Item last>
                        <Input placeholder="Password" onChangeText={(val) => setPassword(val)} />
                    </Item>
                </Form>
                <TouchableOpacity style={{ alignSelf: 'center', marginTop: 40 }}
                    onPress={() => handleLogin(username, password)}
                >
                    <Text style={styles.loginbtn}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignSelf: 'center', marginTop: 40 }} onPress={() => navigation.navigate('register')}>
                    <Text>Not Registered? Click here</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red',
        justifyContent: 'center'
    },
    formView: {
        backgroundColor: '#ffff',
        height: 300,
        width: "90%",
        alignSelf: 'center'
    },
    loginbtn: {
        backgroundColor: 'red',
        padding: 20,
        borderRadius: 10,
        color: '#fff'
    }
})
