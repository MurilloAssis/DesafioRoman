import api from "../services/api";
import React, { useState } from "react";
import { 
    
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    useColorScheme,
    View,
    Image,
    TouchableOpacity,
    ImageBackground,


} from "react-native";
import { AsyncStorage } from '@react-native-async-storage/async-storage';

import { useNavigation } from "@react-navigation/core";

export default function login() {

    const navigation = new useNavigation()

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    realizarLogin = async () => {
        console.warn(email)
        const resposta = await api.post('/Login', {
            email: email,
            senha: senha
        })
        console.warn(resposta.status)
        
        
        if (resposta.status === 200) {
            console.warn("asd")
            const token = resposta.data.token
            await AsyncStorage.setItem('userToken', token)
            navigation.navigate('Main')
          }

    }
    return (
       <SafeAreaView style={styles.backgroundStyle}>
        <Image
          source={require('../assets/img/RomanLogo.png')}
          style={styles.romanLogo}
        />
        <TextInput
          style={styles.inputLogin}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          placeholderTextColor="#929292"
        >""
        </TextInput>
        <TextInput
          style={styles.inputLogin}
          placeholder="Senha"
          placeholderTextColor="#929292"
          onChangeText={text => setSenha(text)}
        >
        </TextInput>
        <TouchableOpacity
        onPress={realizarLogin}
        style={styles.btnLogin}
        >
          <Text style={styles.btnLoginText}>Login</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    backgroundStyle:{
      backgroundColor: '#9530D9',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
    romanLogo: {
      width: 166,
      height: 145
    },
    inputLogin:{
      backgroundColor: '#FFF',
      width:190,
      height:40,
      fontSize:18,
      borderRadius: 10,
      color: '#929292',
    },
    btnLogin: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      width: 150,
      borderColor: '#FFFFFF',
      color: '#FFFFFF',
      borderWidth: 2,
      borderRadius: 10,
    },
    btnLoginText:{
      fontSize: 24, 
      fontFamily: 'Open Sans', 
      color: '#FFFFFF', 
      letterSpacing: 4, 
      textTransform: 'uppercase',
    }, 
  });
  
