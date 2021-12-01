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
import AsyncStorage from "@react-native-community/async-storage";


export default function Projetos() {
  const [listaProjetos, setListaProjetos] = useState([]);

  buscarProjetos = async () => {
    try {
      console.warn(AsyncStorage.getItem('userToken'))
      const resposta = await api('/Projetos', {
        headers: {
          Authorization: 'Bearer ' + AsyncStorageLib.getItem('userToken')
        }

      })
      const lista = resposta.data

      console.warn(lista)

      setListaProjetos(lista)

      useEffect(listaProjetos, [])
    } catch (error) {
      console.warn(error)
    }
  }





  return (

    <SafeAreaView>
      <View style={styles.backgroundStyle}>
        <Text
          style={styles.tituloProjetos}
        >PROJETOS
        </Text>
        {/* PARA CADA PROJETO LISTADO */}
        <View style={styles.cadaProjeto}>
          <View>
            <FlatList
              contentContainerStyle={styles.cadaProjeto}
              data={listaProjetos}
              keyExtractor={item => item.idProjeto}

            />
            <Text style={styles.corTexto}>Nome do Projeto</Text>
            <Text style={styles.corTexto}>Tema</Text>

          </View>
          <Text style={styles.corTexto}>Descricao Projeto</Text>
          <Text style={styles.corTexto}>Autor</Text>
        </View>
        <TouchableOpacity
          onPress={buscarProjetos}
          style={styles.btnLogin}
        >
          <Text style={styles.btnLoginText}>Login</Text>
        </TouchableOpacity>
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
  barraNavegacao: {
    height: 50,
  },
  corTexto: {
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontSize: 16,
  },
});