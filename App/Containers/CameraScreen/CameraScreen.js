// @flow

import React, { Component } from 'react';
import { Text, View, TextInput, AsyncStorage, SafeAreaView } from 'react-native';
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
  recording: boolean,
}

class CameraScreen extends Component<Props, State> { 
  constructor(props: any) {
    super(props);

    this.state = {
      flashOn: false,
      cameraIsFront: false,
      recording: false,
    }
  }; 

  async startRecording() {
    this.setState({ recording: true });
    // default to mp4 for android as codec is not set
    const { uri, codec = "mp4" } = await this.camera.recordAsync();
  }

  onBackPressed = () => {
    this.camera.stopRecording();
    this.props.navigation.goBack(null)
  }

  onDirectionPressed = () => {
    this.setState(prevState => ({
      cameraIsFront: !prevState.cameraIsFront,
    }))
  }

  onFlashPressed = () => {
    this.setState(prevState => ({
      flashOn: !prevState.flashOn,
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
          flashMode={this.state.flashOn ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
          permissionDialogTitle={'Allow camera access?'}
          permissionDialogMessage={'We need your permission to use your camera'}
          onCameraReady={this.startRecording}
        />
        <View style={styles.overlayWrapper}>
          <View style={styles.topBar}>
            <Icon 
              name="arrow-left" 
              size={28} 
              color={Colors.white} 
              onPress={this.onBackPressed}
            />
          </View>
          <View style={styles.bottomBar}>
            <Icon 
              name={this.state.flashOn ? "flash" : "flash-off"}
              size={28} 
              color={Colors.white} 
              onPress={this.onFlashPressed}
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