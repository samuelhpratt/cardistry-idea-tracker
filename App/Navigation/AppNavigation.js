import React, { Component } from 'react';
import { Text, View, Animated, Easing } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import ListScreen from '../Containers/ListScreen/ListScreen'
import UploadScreen from '../Containers/UploadScreen/UploadScreen'
import PreviewScreen from '../Containers/PreviewScreen/PreviewScreen'
import SettingsScreen from '../Containers/SettingsScreen/SettingsScreen'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './NavigationStyles'
import { Colors } from "../Themes"

const ListNavigator = createStackNavigator({
  ListScreen: {
    screen: ListScreen,

    navigationOptions: {
    },
  },
  PreviewScreen: {
    screen: PreviewScreen,

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
  UploadScreen: {
    screen: UploadScreen, //placeholder

    navigationOptions: {
      tabBarLabel:"NEW",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="plus" size={24} color={tintColor} />
      ),
    },
  },
  IdeaListStack: {
    screen: ListNavigator,

    navigationOptions: {
      tabBarLabel:"IDEAS",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="lightbulb-on" size={24} color={tintColor} />
      ),
    },
  },
  CameraScreen: {
    screen: SettingsScreen,

    navigationOptions: {
      title: '',
      tabBarIcon: ({ tintColor }) => (
        <View style={styles.cameraButtonWrapper}>
          <View style={styles.cameraButton}>
            <Icon name="brain" size={24} color={Colors.white} />
          </View>
        </View>
      ),
    },
  },
  MoveListStack: {
    screen: ListNavigator,

    navigationOptions: {
      tabBarLabel:"MOVES",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="view-list" size={24} color={tintColor} />
      ),
    },
  },
  SettingsScreen: {
    screen: SettingsScreen,

    navigationOptions: {
      tabBarLabel:"SETTINGS",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="settings" size={24} color={tintColor} />
      ),
    },
  },
},
{
  initialRouteName: 'MoveListStack',
  tabBarOptions: {
    style: styles.tabBar,
    activeTintColor: Colors.black,
    inactiveTintColor: "#91939E"
  },
});

export default createAppContainer(TabNavigator);