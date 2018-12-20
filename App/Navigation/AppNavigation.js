import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import ListScreen from '../Containers/ListScreen/ListScreen'
import SettingsScreen from '../Containers/SettingsScreen/SettingsScreen'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './NavigationStyles'

const TabNavigator = createBottomTabNavigator({
    CameraScreen: {
        screen: ListScreen, //placeholder

        navigationOptions: {
            tabBarLabel:"Record",
            tabBarIcon: ({ tintColor }) => (
                <Icon name="lightbulb-on" size={30} color={tintColor} />
            ),
        },
    },
    ListScreen: {
        screen: ListScreen,

        navigationOptions: {
            tabBarLabel:"List",
            tabBarIcon: ({ tintColor }) => (
                <Icon name="view-list" size={30} color={tintColor} />
            ),
        },
    },
    SettingsScreen: {
        screen: SettingsScreen,

        navigationOptions: {
            tabBarLabel:"Settings",
            tabBarIcon: ({ tintColor }) => (
                <Icon name="settings" size={30} color={tintColor} />
            ),
        },
    },
},
{
    initialRouteName: 'ListScreen',
    tabBarOptions: {
        style: styles.tabBar,
        activeTintColor: "#fff",
        inactiveTintColor: "#aaa"
    },
});

export default createAppContainer(TabNavigator);