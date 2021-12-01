import React, { Component } from 'react';
import {
    Image,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Projetos from './Listar';

const bottomTab = createBottomTabNavigator();

export default class Main extends Component {
    render() {
        return (
            <View style={styles.main}>
                <StatusBar hidden={false} />

                <bottomTab.Navigator
                    initialRouteName='Listar'

                    screenOptions={({ route }) => ({
                        tabBarIcon: () => {
                            if (route.name === 'Listar') {
                                return (
                                    <Image
                                        source={require('../assets/img/navListar.png')}
                                        style={styles.tabBarIcon}
                                    />
                                )
                            }
                        },

                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarActiveBackgroundColor: '#B727FF',
                        tabBarInactiveBackgroundColor: '#DD99FF',
                        // tabBarActiveTintColor: 'red',
                        // tabBarInactiveTintColor: 'blue',
                        
                    })}


                >
                    <bottomTab.Screen name="Listar" component={Projetos}/>
                </bottomTab.Navigator>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    // conteúdo da main
    main: {
      flex: 1,
      backgroundColor: '#F1F1F1'
    },
     // estilo dos ícones da tabBar
     tabBarIcon: {
      width: 22,
      height: 22
    }
  });