import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import styles from "./ListElementStyles";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


type Props = {
  id: number,
  title: string,
  thumbnail: string,
  date: string,
  tags: [],
}

class ListElement extends Component<Props> {
  static defaultProps = {
    title: "",
    thumbnail: "https://i.pinimg.com/236x/75/41/ab/7541ab930ad81a018cca45a27cbe9cf3--orion-nebula-the-deck.jpg", //generic placeholder image?
    date: "",
    tags: null,
  };

  renderTags = () => {
    tagList = this.props.tags.map(t => {
      return (
        <Text key={t.id} style={[styles.tagIcon, {backgroundColor: t.color}]}>
          {t.initials}
        </Text>
      )
    })
    return (tagList)
  }
  
  render() {
    return (
      <View style={styles.elementWrapper}>
        <Image style={styles.thumbnail}
          source={{uri: this.props.thumbnail}}
        ></Image>
        <View style={styles.infoWrapper}>
          <View style={styles.detailsWrapper}>
            <Text style={styles.detailsText}>{this.props.title}</Text>
            <Text style={styles.detailsText}>{this.props.date}</Text>
          </View>
          <View style={styles.tagsWrapper}>
            {this.renderTags()}
          </View>
        </View>
      </View>
    );
  }
}

export default ListElement;