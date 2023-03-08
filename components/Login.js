import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { firebase } from '../config';
import { allUsers, addUser, selectUser } from '../state_management/reducers/user';

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    loginUser = async (email, password) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            navigation.navigate("Home", {});
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <View>
            <View style={ styles.container }>
                <TextInput
                    style={ styles.textInput }
                    placeholder="Email"
                    onChangeText={ (email) => setEmail(email) }
                />
                <TextInput
                    style={ styles.textInput }
                    placeholder="Password"
                    onChangeText={ (password) => setPassword(password) }
                    maxLength={ 15 }
                    secureTextEntry={ true }
                />

                <TouchableOpacity
                    style={ styles.button }
                    onPress={ () => loginUser(email, password) }>
                    <Text style={ { fontWeight: 'bold', fontSize: 16, color: "white" } }>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={ styles.redirectButton }
                    onPress={ () => navigation.navigate('Registration') }>
                    <Text style={ { fontWeight: 'light', fontSize: 12, color: 'black' } }>
                        New user? <Text style={ { color: 'blue', fontSize: 16 } }>Register Here</Text>
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        margin: 40
    },
    textInput: {
        padding: 10,
        paddingBottom: 7,
        width: '80%',
        height: 40,
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        marginBottom: 20,
        textAlign: 'left'
    },
    button: {
        marginTop: 50,
        height: 50,
        width: 250,
        backgroundColor: '#000',
        color: "white",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    redirectButton: {
        marginTop: 50,
        height: 30,
        width: 250,
        backgroundColor: '#867D7A ',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    }
});

export default Login
