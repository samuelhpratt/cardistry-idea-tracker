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
  .then((value) => this.setState({ 'testValue': value }))

  setValue = (value) => {
    AsyncStorage.setItem('testValue', value);
    this.setState({ 'testValue': value });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput style={{backgroundColor: "#ddd"}} autoCapitalize = 'none'
          onChangeText = {this.setValue}/>
        <Text>
          {this.state?.testValue}
        </Text>
      </View>
    );
  }
}

export default SettingsScreen;