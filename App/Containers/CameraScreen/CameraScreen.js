import React, { Component } from 'react';
import { Text, View, TextInput, AsyncStorage } from 'react-native';
import styles from './CameraScreenStyles';

type State = {
}

class CameraScreen extends Component<State> { 
  static defaultProps = {
  }; 

  render() {
    return (
      <View style={styles.background}>

      </View>
    );
  }
}

export default CameraScreen;