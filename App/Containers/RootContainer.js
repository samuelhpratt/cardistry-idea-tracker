
// @flow

import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import AppNavigation from '../Navigation/AppNavigation';

type Props = {
  startup: () => void
}

type State = {

}
class RootContainer extends Component<Props, State> {
  render() {
    return (
      <View>
        <StatusBar barStyle='light-content' />
        <AppNavigation />
      </View>
    )
  }
}

export default RootContainer;
