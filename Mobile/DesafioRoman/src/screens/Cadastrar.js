import api from "../services/api";
import React, { Component } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
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
            <View>
                <TextInput
                    placeholder="Nome do Projeto"
                    onChangeText={nomeProjeto => this.setState({nomeProjeto})}
                />
                <TextInput
                    placeholder="Descrição"
                    onChangeText={descricao => this.setState({descricao})}
                />
                <Picker
                selectedValue={this.state.idTema}
                onValueChange={tema => this.setState({idTema: tema})}
                >
                    <Picker.Item label="Selecione um tema" value={null}/>
                    <Picker.Item key='1' label='Gestão' value={1}/>
                    <Picker.Item key='2' label='HQs' value={2}/>
                </Picker>
                <TouchableOpacity onPress={this.cadastrarProjeto}><Text>Cadastrar</Text></TouchableOpacity>
            </View>
        )
    }
}