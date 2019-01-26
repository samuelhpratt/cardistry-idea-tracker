// @flow

import React, { Component } from "react";
import { Text, View, ScrollView, AsyncStorage, Image } from "react-native";
import Video from 'react-native-video';

import styles from "./PreviewScreenStyles";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

type Props = {
  navigation: any,
}

type State = {
  idea: Object,
  videoLoading: boolean,
}

class PreviewScreen extends Component<Props, State> { 
  constructor(props: any) {
    super(props);

    this.state = {
      idea: null,
      videoLoading: false,
    }
  }

  componentDidMount = () => {
    this.setState({
      'idea': this.props.navigation.getParam('idea'), 
    })
  }

  onVideoLoad = () => {
    this.setState({ videoLoading: false })
  }

  renderTags = () => {
    const tagList = this.state.idea?.tags.map(t => {
      return (
        <View key={t.id} style={[styles.tagBackground, {backgroundColor: t.style.light}]}>
          <Text style={[styles.tagText, {color: t.style.dark}]}>
            {t.title}
          </Text>
        </View>
      )
    })
    return (tagList)
  }

  render() {
    return (
      <View style={styles.background}>
        <View style={styles.wrapper}>
          <View style={styles.header}>
            <View style={styles.headerLeftContainer}>
              <Icon name="arrow-left" size={24} color="#000" onPress={() => this.props.navigation.goBack()}/>
            </View>
            <Text style={styles.headerText}>{this.state.idea?.title}</Text>
            <View style={styles.headerRightContainer}>
              <Text style={styles.headerText}>{this.state.idea?.date}</Text>
            </View>
          </View>
          <View style={styles.videoWrapper}>
            { this.state.idea != null &&
            <Video style={styles.video}
              source={{uri: this.state.idea?.videoUri}}
              onBuffer={() => {}} 
              onError={(error) => {console.log(error)}}  
              onLoad={() => this.onVideoLoad()}        
              repeat={true}
              resizeMode="cover"
              paused={this.state.videoLoading}
              muted={true}
            />}
          </View>
          <View style={styles.tagsWrapper}>
            {this.renderTags()}
          </View>
        </View>
      </View>
    );
  }
}

export default PreviewScreen;