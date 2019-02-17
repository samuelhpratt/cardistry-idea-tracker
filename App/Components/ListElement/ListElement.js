// @flow

import React, { Component } from "react";
import { Text, View, Image, TouchableWithoutFeedback } from "react-native";
import styles from "./ListElementStyles";

type Props = {
  idea: Object,
  onPress: Function,
}

class ListElement extends Component<Props> {
  static defaultProps = {
    idea: null,
    onPress: () => void(0),
  };

  elementPressed = () => {
    this.props.onPress()
  }

  renderTags = () => {
    const tagList = this.props.idea.tags.map(t => {
      return (
        <View key={t.id} style={[styles.tagBackground, {backgroundColor: t.style.light}]}>
          <Text style={[styles.tagText, {color: t.style.dark}]}>
            {t.initials}
          </Text>
        </View>
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
              <Text style={styles.titleText}>{this.props.idea.title}</Text>
              <Text style={styles.dateText}>{this.props.idea.date}</Text>
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