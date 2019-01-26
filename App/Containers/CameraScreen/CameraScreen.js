// @flow

import React, { Component } from 'react';
import { Text, View, TextInput, AsyncStorage } from 'react-native';
import { RNCamera } from 'react-native-camera'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Colors } from "../../Themes";
import styles from './CameraScreenStyles';

type Props = {
  navigation: any,
}

type State = {
  flashOn: boolean,
  cameraIsFront: boolean,
}

class CameraScreen extends Component<Props, State> { 
  constructor(props: any) {
    super(props);

    this.state = {
      flashOn: true,
      cameraIsFront: false,
    }
  }; 

  onBackPressed = () => {
    this.props.navigation.goBack(null)
  }

  onDirectionPressed = () => {
    this.setState(prevState => ({
      cameraIsFront: !prevState.cameraIsFront,
    }))
  }

  render() {
    return (
      <View style={styles.background}>
        <RNCamera 
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={this.state.cameraIsFront ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back}
          flashMode={this.state.flashOn ? RNCamera.Constants.FlashMode.on : RNCamera.Constants.FlashMode.off}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
        />
        <View style={styles.overlayWrapper}>
          {/* <View style={styles.topBar}>
            <Icon 
              name="arrow-left" 
              size={28} 
              color={Colors.white} 
              onPress={() => {}}
            />
          </View> */}
          <View style={styles.bottomBar}>
            <Icon 
              name="arrow-left"
              size={28} 
              color={Colors.white} 
              onPress={this.onBackPressed}
            />
            <View style={styles.cameraButtonWrapper}>
              <View style={styles.cameraButton}>
                <Icon name="brain" size={24} color={Colors.white} />
              </View>
            </View>
            <Icon 
              name={this.state.cameraIsFront ? "camera-rear" : "camera-front"}
              size={26} 
              color={Colors.white} 
              onPress={this.onDirectionPressed}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default CameraScreen;