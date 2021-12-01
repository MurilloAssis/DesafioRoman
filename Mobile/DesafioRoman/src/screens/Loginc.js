import api from "../services/api";
import React, { useState, Component } from "react";
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

import AsyncStorage from "@react-native-community/async-storage";

export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'adm@gmail.com',
            senha: '123',
        };
    }

    realizarLogin = async () => {
        const resposta = await api.post('/Login', {
            email: this.state.email,
            senha: this.state.senha
        })
        console.warn(resposta.status)

        const token = resposta.data.token
        console.warn(token)
        await AsyncStorage.setItem('userToken', token)
        
        if (resposta.status === 200) {
            console.warn("asd")
            console.warn(AsyncStorage.getItem('userToken'))
            this.props.navigation.navigate('Main')
        }
    };

    render() {
        return (

            <SafeAreaView style={styles.backgroundStyle}>
                <Image
                    source={require('../assets/img/RomanLogo.png')}
                    style={styles.romanLogo}
                />
                <TextInput
                    style={styles.inputLogin}
                    placeholder="Email"
                    onChangeText={email => this.setState({email})}
                    placeholderTextColor="#929292"
                >""
                </TextInput>
                <TextInput
                    style={styles.inputLogin}
                    placeholder="Senha"
                    placeholderTextColor="#929292"
                    onChangeText={senha => this.setState({senha})}
                >
                </TextInput>
                <TouchableOpacity
                    onPress={this.realizarLogin}
                    style={styles.btnLogin}
                >
                    <Text style={styles.btnLoginText}>Login</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
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
  