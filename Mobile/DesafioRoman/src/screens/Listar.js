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
import { Component } from "react";


export default class Projetos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listaProjetos: []
    }
  }


  buscarProjetos = async () => {
    try {
      console.warn(AsyncStorage.getItem('userToken'))
      const xambers = await AsyncStorage.getItem('userToken')

      const resposta = await api('/Projetos', {
        headers: {
          Authorization: 'Bearer ' + xambers
        }

      })
      const lista = resposta.data

      console.warn(lista)

      this.setState({listaProjetos: lista})

    } catch (error) {
      console.warn(error)
    }


  }

  componentDidMount(){
    this.buscarProjetos();
  }


  renderItem = ({ item }) => (

    <View style={styles.cadaProjeto}>
      <View>
        <Text style={styles.corTexto}>{item.tituloProjeto}</Text>
        <Text style={styles.corTexto}>{item.idTemaNavigation.tituloTema}</Text>
      </View>
      <Text style={styles.corTexto}>{item.descricao}</Text>
      <Text style={styles.corTexto}>{item.idProfessorNavigation.idUsuarioNavigation.nomeUsuario}</Text>
    </View>
  )


  render() {

    return (

      <SafeAreaView>
        <View style={styles.backgroundStyle}>
          <Text
            style={styles.tituloProjetos}
          >PROJETOS
          </Text>
          {/* PARA CADA PROJETO LISTADO */}
          <View style={styles.cadaProjeto}>
            <FlatList
              contentContainerStyle={styles.cadaProjeto}
              data={this.state.listaProjetos}
              keyExtractor={item => item.idProjeto}
              renderItem={this.renderItem}
            />
          </View>

        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#9530D9',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  tituloProjetos: {
    fontSize: 36,
    fontFamily: 'Roboto',
    color: '#cc',
    letterSpacing: 3,
    borderBottomColor: '#3B0273',
    borderBottomWidth: 2,
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
    letterSpacing: 2,
  },
});