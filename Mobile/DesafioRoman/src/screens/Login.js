import api from "../services/api";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { AsyncStorage } from '@react-native-async-storage/async-storage';

export default function login(){

    const [email, setEmail] = useState('');
    const [senha, serSenha] = useState('');


    realizarLogin = async () => {
        const resposta = await api.post('/Login',{
            email : email,
            senha : senha
        })

        const token = resposta.data.token
        await AsyncStorage.setItem('userToken', token)

        console.warn(token)
    }
    
    
}