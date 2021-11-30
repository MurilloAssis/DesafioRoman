import api from "../services/api";
import React, { useState, useEffect } from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    useColorScheme,
    FlatList,
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
  } from 'react-native';
import { AsyncStorage } from '@react-native-async-storage/async-storage';


export default function Projetos(){
    const [listaProjetos, setListaProjetos] = useState([]);

    buscarProjetos = async () => {
        const resposta = await api('/Projetos', {
            headers:{
                'Authorization' : 'Bearer ' + AsyncStorage.getItem('userToken')
            }
            
        })
        const lista = resposta.data

        setListaProjetos(lista)

        useEffect(listaProjetos, [])
    }

    return(

        <SafeAreaView>
        <View style={styles.backgroundStyle}>
          <Text
            style={styles.tituloProjetos}
          >PROJETOS
          </Text>
          {/* PARA CADA PROJETO LISTADO */}
          <View style={styles.cadaProjeto}>
            <View>
              <Text style={styles.corTexto}>Nome do Projeto</Text>
              <Text style={styles.corTexto}>Tema</Text>
            </View>
            <Text style={styles.corTexto}>Descricao Projeto</Text>
            <Text style={styles.corTexto}>Autor</Text>
          </View>
        </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#9530D9',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: '80%',
  },
  tituloProjetos: {
    fontSize: 36,
    fontFamily: 'Roboto',
    color: '#cc',
    letterSpacing: 3,
    borderBottomColor: '#3B0273',
    borderBottomWidth: 3,
  },
  cadaProjeto: {
    width: 295,
    borderBottomColor: '#3B0273',
    borderBottomWidth: 2,
  },
  nomeProjetoTema: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  barraNavegacao : {
    height:50,
  },
  corTexto:{
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontSize: 16,
  },
});