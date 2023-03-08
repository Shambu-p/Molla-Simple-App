import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { firebase } from '../config';

const Registration = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const register = async (email, password, confPassword) => {
        try {

            if (confPassword != password) {
                throw new Error("password does not match!");
            }

            await firebase.auth().createUserWithEmailAndPassword(email, password);
            navigation.navigate("login", {});

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
                    required={ true }
                />
                <TextInput
                    style={ styles.textInput }
                    placeholder="Password"
                    onChangeText={ (password) => setPassword(password) }
                    maxLength={ 15 }
                    secureTextEntry={ true }
                    required={ true }
                />

                <TextInput
                    style={ styles.textInput }
                    placeholder="Confirm Password"
                    onChangeText={ (pd) => setConfirmPassword(pd) }
                    maxLength={ 15 }
                    secureTextEntry={ true }
                    required={ true }
                />

                <TouchableOpacity
                    style={ styles.button }
                    onPress={ () => register(email, password, confirmPassword) }>
                    <Text style={ { fontWeight: 'bold', fontSize: 22, color: "white" } }> Sign Up </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={ styles.redirectButton }
                    onPress={ () => navigation.navigate('login') }>
                    <Text style={ { fontWeight: 'light', fontSize: 12, color: 'black' } }>
                        Have an account?  <Text style={ { color: 'blue', fontSize: 16 } }>SignIn</Text>
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Registration

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        margin: 40
    },
    textInput: {
        color: '#000',
        background: 'black',
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
