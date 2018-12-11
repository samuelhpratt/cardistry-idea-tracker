import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import ListScreen from '../Containers/ListScreen/ListScreen'
import SettingsScreen from '../Containers/SettingsScreen/SettingsScreen'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const TabNavigator = createBottomTabNavigator({
    CameraScreen: {
        screen: ListScreen, //placeholder

        navigationOptions: {
            tabBarLabel:"Record",
            tabBarIcon: ({ focused }) => (
                focused ?
                    <Icon name="lightbulb-on" size={30} color="#000" />
                    :
                    <Icon name="lightbulb-on" size={30} color="#555" />
            ),
        },
    },
    ListScreen: {
        screen: ListScreen,

        navigationOptions: {
            tabBarLabel:"List",
            tabBarIcon: ({ focused }) => (
                focused ?
                    <Icon name="home" size={30} color="#000" />
                    :
                    <Icon name="home" size={30} color="#555" />
            ),
        },
    },
    SettingsScreen: {
        screen: SettingsScreen,

        navigationOptions: {
            tabBarLabel:"Settings",
            tabBarIcon: ({ focused }) => (
                focused ?
                    <Icon name="settings" size={30} color="#000" />
                    :
                    <Icon name="settings" size={30} color="#555" />
            ),
        },
    },
},
{
    initialRouteName: 'ListScreen',
});

export default createAppContainer(TabNavigator);