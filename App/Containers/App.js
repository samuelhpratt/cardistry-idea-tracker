import React, { Component } from 'react';
import { Text, View, Animated, Easing } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AppNavigation from '../Navigation/AppNavigation';
import { Colors } from "../Themes";

type Props = {

}

type State = {
  splashScale: Animated.Value,
  splashOpacity: Animated.Value,
}

class App extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      splashScale: new Animated.Value(25),
      splashOpacity: new Animated.Value(1),
    }
  }

  componentDidMount = () => {
    this.splashScreenAnimation()
  }

  splashScreenAnimation = () => {
    setTimeout(() => {
      Animated.sequence([
        Animated.timing(
          this.state.splashScale,
          {
            toValue: 1,
            duration: 400,
          }
        ),
        Animated.timing(
          this.state.splashOpacity,
          {
            toValue: 0,
            duration: 400,
          }
        )
      ]).start();
      SplashScreen.hide()
    }, 500)
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppNavigation />
        <View style={{ 
          position: 'absolute',
          bottom: 15,
          left: 0,
          right: 0,
          alignItems: 'center',
        }}
        >
          <Animated.View 
            opacity={this.state.splashOpacity}
            style={{ 
              backgroundColor: Colors.cameraButton,
              width: 56,
              height: 56,
              borderRadius: 28,
              transform: [
                {
                  scale: this.state.splashScale
                },
              ]
            }}
          />
        </View>
      </View>
    )
  }
}

export default App;