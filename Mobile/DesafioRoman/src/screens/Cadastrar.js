import api from "../services/api";
import React, { Component } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { Picker } from "@react-native-picker/picker";
import jwtDecode from 'jwt-decode'


export default class Cadastrar extends Component {

    constructor(props){
        super(props);
        this.state = {
            idTema: 0,
            idProfessor: 0,
            nomeProjeto: '',
            descricao: ''
        }
    }

    cadastrarProjeto = async () => {
        const xambers = await AsyncStorage.getItem('userToken')
        this.props.goBack()
        
        console.warn(jwtDecode(xambers).idProfessor)

        const idProfessorToken = jwtDecode(xambers).idProfessor

        this.setState({idProfessor: parseInt(idProfessorToken)})

        console.warn(this.state)
        const resposta = await api.post('/Projetos',{
            IdTema: this.state.idTema,
            IdProfessor: this.state.idProfessor,
            TituloProjeto: this.state.nomeProjeto,
            Descricao: this.state.descricao
        },{
            headers:{
                authorization: 'Bearer ' + xambers
            }
        });

        console.warn(resposta)

        if (resposta.status === 201) {
            console.warn('Projeto cadastrado com sucesso')
        }
    }

    render() {

        return (
            <View style={styles.backgroundStyle}>
                <Text style={styles.titulo}>
                    Cadastrar
                </Text>
                <TextInput
                    placeholder="Nome do Projeto"
                    onChangeText={nomeProjeto => this.setState({nomeProjeto})}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Descrição"
                    onChangeText={descricao => this.setState({descricao})}
                    style={styles.input}
                />
                <Picker
                style={styles.input}
                selectedValue={this.state.idTema}
                onValueChange={tema => this.setState({idTema: tema})}
                >
                    <Picker.Item label="Selecione um tema" value={null}/>
                    <Picker.Item key='1' label='Gestão' value={1}/>
                    <Picker.Item key='2' label='HQs' value={2}/>
                </Picker>
                <TouchableOpacity style={styles.btnCadastro} onPress={this.cadastrarProjeto}><Text style={styles.btnCadastroTxt}>Cadastrar</Text></TouchableOpacity>
            </View>
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
    titulo: {
        fontSize: 36,
        fontFamily: 'Roboto',
        color: '#cc',
        letterSpacing: 3,
        borderBottomColor: '#3B0273',
        borderBottomWidth: 2,
        marginBottom: 30
    },
    input:{
        backgroundColor: 'white',
        width: 300,
        borderRadius: 5
        
    },
    btnCadastro:{
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        height: 60
    },
    btnCadastroTxt:{
        fontSize: 24,
        fontFamily: 'Roboto',
        color: '#fff',
        letterSpacing: 3,
    }
})