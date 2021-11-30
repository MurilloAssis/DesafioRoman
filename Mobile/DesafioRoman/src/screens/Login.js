import api from "../services/api";
import React, { useState } from "react";
import { TextInput, SafeAreaView } from "react-native";
import { AsyncStorage } from '@react-native-async-storage/async-storage';

export default function login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    realizarLogin = async () => {
        const resposta = await api.post('/Login', {
            email: email,
            senha: senha
        })

        const token = resposta.data.token
        await AsyncStorage.setItem('userToken', token)

        console.warn(token)
    }
    return (
        <SafeAreaView >
            <TextInput
                placeholder="Email"
                placeholderTextColor="#000"
                onChangeText={email => setEmail({ email })}
            >
            </TextInput>
            <TextInput
                placeholder="Senha"
                placeholderTextColor="#000"
                onChangeText={senha => setSenha({ senha })}
            >
            </TextInput>
        </SafeAreaView>
    );
}
