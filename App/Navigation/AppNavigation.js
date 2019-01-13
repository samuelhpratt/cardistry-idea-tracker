import React, { Component } from 'react';
import { Text, View, Animated, Easing } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import ListScreen from '../Containers/ListScreen/ListScreen'
import UploadScreen from '../Containers/UploadScreen/UploadScreen'
import IdeaScreen from '../Containers/IdeaScreen/IdeaScreen'
import SettingsScreen from '../Containers/SettingsScreen/SettingsScreen'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './NavigationStyles'

const ListNavigator = createStackNavigator({
  ListScreen: {
    screen: ListScreen,

    navigationOptions: {
    },
  },
  IdeaScreen: {
    screen: IdeaScreen,

    navigationOptions: {
    },
  },
},  
{
  initialRouteName: 'ListScreen',
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  },
  transitionConfig : () => ({
    transitionSpec: {
      duration: 0,
      timing: Animated.timing,
      easing: Easing.step0,
    },
  }),
})

const TabNavigator = createBottomTabNavigator({
    CameraScreen: {
        screen: SettingsScreen, //placeholder

        navigationOptions: {
            tabBarLabel:"Record",
            tabBarIcon: ({ tintColor }) => (
                <Icon name="lightbulb-on" size={30} color={tintColor} />
            ),
        },
    },
    UploadScreen: {
        screen: UploadScreen, //placeholder

        navigationOptions: {
            tabBarLabel:"New",
            tabBarIcon: ({ tintColor }) => (
                <Icon name="plus" size={30} color={tintColor} />
            ),
        },
    },
    ListStack: {
        screen: ListNavigator,

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
    initialRouteName: 'ListStack',
    tabBarOptions: {
        style: styles.tabBar,
        activeTintColor: "#fff",
        inactiveTintColor: "#91939E"
    },
});

export default createAppContainer(TabNavigator);