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
            <View>
                <StatusBar hidden={false} />

                <bottomTab.Navigator
                    initialRouteName='Listar'

                    screenOptions={({ route }) => ({
                        tabBarIcon: () => {
                            if (route.name === 'Listar') {
                                return (
                                    <Image
                                        source={require('../assets/img/navListar.png')}
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
                        tabBarStyle: { height: 50 }
                    })}


                >
                    <bottomTab.Screen name="Listar" component={Projetos}/>
                </bottomTab.Navigator>
            </View>
        )
    }
}