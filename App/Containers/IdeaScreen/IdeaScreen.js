import React, { Component } from "react";
import { Text, View, ScrollView, AsyncStorage, Image } from "react-native";
import styles from "./IdeaScreenStyles";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

type Props = {
  navigation: any,
}

type State = {
  idea: Object,
}

class IdeaScreen extends Component<Props, State> { 
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  componentDidMount = () => {
    this.setState({
      'idea': this.props.navigation.getParam('idea'), 
    })
  }

  renderTags = () => {
    tagList = this.state.idea?.tags.map(t => {
      return (
        <Text key={t.id} style={[styles.tag, t.style]}>
          {t.title}
        </Text>
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
          <View style={styles.videoPreview}>
            <Image style={styles.thumbnail}
              source={{uri: this.state.idea?.thumbnail}}
            />
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