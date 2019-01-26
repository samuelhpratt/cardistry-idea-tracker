// @flow

import React, { Component } from 'react';
import { Text, View, TextInput, AsyncStorage } from 'react-native';
import styles from './SettingsScreenStyles';

type State = {
  testValue: string,
}

class SettingsScreen extends Component<State> { 
  static defaultProps = {
    testValue: "",
  }; 

  componentDidMount = () => AsyncStorage.getItem('testValue')
  .then((value) => this.setState({ testValue: value }))

  setValue = (value: any) => {
    AsyncStorage.setItem('testValue', value);
    this.setState({ testValue: value });
  }

  render() {
    return (
      <View style={styles.background}>
        <View style={styles.wrapper}>
          <TextInput style={styles.input} autoCapitalize = 'none'
            onChangeText = {this.setValue}/>
          <Text style={styles.text}>
            {this.state?.testValue}
          </Text>
        </View>
      </View>
    );
  }
}

export default SettingsScreen;