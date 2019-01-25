import React, { Component } from 'react';
import { Text, View, Animated, Easing, StatusBar, Dimensions } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AppNavigation from '../Navigation/AppNavigation';
import { Colors } from "../Themes";

type Props = {

}

type State = {
  splashScale: Animated.Value,
  splashOpacity: Animated.Value,
  splashVisible: boolean,
}

class App extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      splashScale: new Animated.Value(Math.ceil(Dimensions.get('window').height/28)),
      splashOpacity: new Animated.Value(1),
      splashVisible: true,
    }
  }

  componentDidMount = () => {
    this.splashScreenAnimation()
  }

  splashScreenAnimation = () => {
    setTimeout(() => {
      SplashScreen.hide()
      Animated.sequence([
        Animated.timing(
          this.state.splashScale,
          {
            delay: 400, // wait for splash to fade out
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
      ]).start(() =>
        this.setState({ splashVisible: false })
      );
    }, 10)
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar 
          backgroundColor="black"
          barStyle="light-content"
        />
        <AppNavigation />
        { this.state.splashVisible && <View style={{ 
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
        </View>}
      </View>
    )
  }
}

export default App;