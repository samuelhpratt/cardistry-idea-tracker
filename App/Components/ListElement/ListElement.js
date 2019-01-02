import React, { Component } from "react";
import { Text, View, Image, TouchableWithoutFeedback } from "react-native";
import styles from "./ListElementStyles";

type Props = {
  idea: Object,
  onPress: () => {},
}

class ListElement extends Component<Props> {
  static defaultProps = {
    idea: null,
    onPress: () => void(0),
  };

  elementPressed = () => {
    this.props.onPress(this.props.idea)
  }

  renderTags = () => {
    tagList = this.props.idea.tags.map(t => {
      return (
        <Text key={t.id} style={[styles.tagIcon, t.style]}>
          {t.initials}
        </Text>
      )
    })
    return (tagList)
  }
  
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.elementPressed()}>
        <View style={styles.elementWrapper}>
          <Image style={styles.thumbnail}
            source={{uri: this.props.idea.thumbnail}}
          />
          <View style={styles.infoWrapper}>
            <View style={styles.detailsWrapper}>
              <Text style={styles.detailsText}>{this.props.idea.title}</Text>
              <Text style={styles.detailsText}>{this.props.idea.date}</Text>
            </View>
            <View style={styles.tagsWrapper}>
              {this.renderTags()}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default ListElement;