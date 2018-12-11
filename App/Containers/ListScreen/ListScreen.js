import React, { Component } from "react";
import { Text, View, ScrollView, AsyncStorage } from "react-native";
import ListElement from "../../Components/ListElement/ListElement"
import styles from "./ListScreenStyles";

const placeholderIdeas = [
  {
    id: 1,
    title: "Move 1",
    thumbnail: "https://i.pinimg.com/236x/75/41/ab/7541ab930ad81a018cca45a27cbe9cf3--orion-nebula-the-deck.jpg",
    date: "6/4/2016",
    tags: [2, 3, 4],
  },
  {
    id: 2,
    title: "Move 2",
    thumbnail: "https://i.pinimg.com/236x/75/41/ab/7541ab930ad81a018cca45a27cbe9cf3--orion-nebula-the-deck.jpg",
    date: "2/5/2018",
    tags: [1, 4],
  },
  {
   id: 3,
    title: "Move 3",
    thumbnail: "https://i.pinimg.com/236x/75/41/ab/7541ab930ad81a018cca45a27cbe9cf3--orion-nebula-the-deck.jpg",
    date: "10/4/2017",
    tags: [1, 3],
  }, 
]

const placeholderTags = [
  {
    id: 1,
    title: "One Handed",
    initials: "OH", 
    color: "#ddf",
  },
  {
    id: 2,
    title: "Two Handed",
    initials: "TH",
    color: "#fdd",
  },
  {
   id: 3,
    title: "Packet Cut",
    initials: "PC",
    color: "#dfd",
  },
  {
    id: 4,
     title: "Isolation",
     initials: "I",
     color: "#fdf",
   },
]

type State = {
  ideaData: any,
  tagData: any,
  fetchingIdeaData: boolean,
  hasIdeaData: boolean,
  usePlaceholder: boolean,
}

class ListScreen extends Component<Props, State> { 
  constructor(props) {
    super(props);

    this.state = {
      ideaData: [],
      tagData: placeholderTags,
      fetchingIdeaData: false,
      hasIdeaData: false,
      usePlaceholder: true, // should it use the placeholder data above?
    }
  }

  componentDidMount = () => {
    this.setState({ "fetchingIdeaData": true }, () => {
      AsyncStorage.getItem('ideaData')
      .then((value) => {
        const loadedIdeaData = JSON.parse(value) 
        if (value != null && !this.state.usePlaceholder) {
          this.setState({ 'ideaData': loadedIdeaData, "fetchingIdeaData": false, "hasIdeaData": true })
        } else {
          this.usePlaceholderIdeaData()
        }
      })
    })
  }

  usePlaceholderIdeaData = () => {
    console.warn("No data found - using placeholder")
    this.setState({ 'ideaData': placeholderIdeas, "fetchingIdeaData": false, "hasIdeaData": true }, () => {
      this.updateStoredIdeaData()
    })
  }

  updateStoredIdeaData = () => {
    AsyncStorage.setItem('ideaData', JSON.stringify(this.state.ideaData));
  }

  renderList = () => {
    if (this.state.hasIdeaData && !this.state.fetchingIdeaData) {
      ideaList = this.state.ideaData.map(e => {
        return (
          <ListElement key={e.id}
            id={e.id}
            title={e.title}
            thumbnail={e.thumbnail}
            date={e.date}
            tags={this.state.tagData.filter(t => (e.tags.includes(t.id)))}              
          />
        )
      })
      return (ideaList)
    }
    return <Text>{"Loading..."}</Text>
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{ backgroundColor: "#ddd", padding: 2, alignSelf: "stretch", }}>
      {this.renderList()}
      </ScrollView>
    );
  }
}

export default ListScreen;