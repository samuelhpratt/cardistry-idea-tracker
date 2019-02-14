// @flow

import React, { Component } from 'react';
import { Text, View, Animated, Easing, StatusBar, Dimensions, Platform } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AppNavigation from '../Navigation/AppNavigation';
import { Colors } from "../Themes";

type Props = {

}

type State = {
  splashScale: Animated.Value,
  splashOpacity: Animated.Value,
  splashVisible: boolean,
  statusColor: string,
}

class App extends Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      splashScale: new Animated.Value(Math.ceil(Dimensions.get('window').height/320)),
      splashOpacity: new Animated.Value(1),
      splashVisible: true,
      statusColor: Colors.white
    }
  }

  componentDidMount = () => {
    this.splashScreenAnimation()
  }

  isIPhoneX = () => {
    const size = Dimensions.get('screen')
    return size.height == 812 || size.width == 812 || size.height == 896 || size.width == 896
  }

  splashScreenAnimation = () => {
    setTimeout(() => {
      SplashScreen.hide()
      Animated.sequence([
        Animated.timing(
          this.state.splashScale,
          {
            delay: 400, // wait for splash to fade out
            toValue: 0.1,
            duration: 450,
          }
        ),
        Animated.timing(
          this.state.splashOpacity,
          {
            toValue: 0,
            duration: 400,
          }
        )
      ]).start(() =>
        this.setState({ splashVisible: false })
      );
    }, 10)
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar 
          translucent
          backgroundColor={Colors.transparent}
          barStyle="dark-content"
        />
        { Platform.OS === 'android' && <View style={{ height: StatusBar.currentHeight, backgroundColor: '#dcdee5' }}/>}
        <AppNavigation />
        { this.state.splashVisible && 
          <View 
            style={{ 
              position: 'absolute',
              bottom: this.isIPhoneX() ? -206 : -237,
              left: 0,
              right: 0,
              alignItems: 'center',
            }}
          >
            <Animated.View 
              opacity={this.state.splashOpacity}
              style={{ 
                backgroundColor: Colors.cameraButton,
                width: 560,
                height: 560,
                borderRadius: 280,
                transform: [
                  {
                    scale: this.state.splashScale
                  },
                ]
              }}
            />
          </View>
        }
      </View>
    )
  }
}

export default App;