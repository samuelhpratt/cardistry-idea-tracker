import React, { Component } from "react";
import { Text, View, ScrollView, AsyncStorage, Image } from "react-native";
import Video from 'react-native-video';

import styles from "./IdeaScreenStyles";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

type Props = {
  navigation: any,
}

type State = {
  idea: Object,
  videoLoaded: boolean,
}

class IdeaScreen extends Component<Props, State> { 
  constructor(props) {
    super(props);

    this.state = {
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
    tagList = this.state.idea?.tags.map(t => {
      return (
        <View key={t.id} style={[styles.tagBackground, {backgroundColor: t.style.backgroundColor}]}>
          <Text style={[styles.tagText, {color: t.style.color}]}>
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
              <Icon name="arrow-left" size={38} color="#fff" onPress={() => this.props.navigation.goBack()}/>
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

export default IdeaScreen;