import React, { Component } from "react";
import { Text, View, ScrollView, AsyncStorage, TextInput } from "react-native";
import ListElement from "../../Components/ListElement/ListElement"
import styles from "./ListScreenStyles";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

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
    tags: [1, 4, 7],
  },
  {
   id: 3,
    title: "Move 3",
    thumbnail: "https://i.pinimg.com/236x/75/41/ab/7541ab930ad81a018cca45a27cbe9cf3--orion-nebula-the-deck.jpg",
    date: "10/4/2017",
    tags: [1, 3],
  }, 
  {
    id: 4,
    title: "Move 4",
    thumbnail: "https://i.pinimg.com/236x/75/41/ab/7541ab930ad81a018cca45a27cbe9cf3--orion-nebula-the-deck.jpg",
    date: "28/11/2006",
    tags: [2, 5, 6],
  },
  {
    id: 5,
    title: "Move 5",
    thumbnail: "https://i.pinimg.com/236x/75/41/ab/7541ab930ad81a018cca45a27cbe9cf3--orion-nebula-the-deck.jpg",
    date: "2/1/2018",
    tags: [1, 4],
  },
  {
   id: 6,
    title: "Move 6",
    thumbnail: "https://i.pinimg.com/236x/75/41/ab/7541ab930ad81a018cca45a27cbe9cf3--orion-nebula-the-deck.jpg",
    date: "10/4/2018",
    tags: [2, 3, 5, 8],
  }, 
  {
    id: 7,
    title: "Move 7",
    thumbnail: "https://i.pinimg.com/236x/75/41/ab/7541ab930ad81a018cca45a27cbe9cf3--orion-nebula-the-deck.jpg",
    date: "2/7/2017",
    tags: [2, 6, 7],
  },
  {
   id: 8,
    title: "Move 8",
    thumbnail: "https://i.pinimg.com/236x/75/41/ab/7541ab930ad81a018cca45a27cbe9cf3--orion-nebula-the-deck.jpg",
    date: "10/7/2018",
    tags: [1, 8],
  }, 
]

const placeholderTags = [
  {
    id: 1,
    title: "One Handed",
    initials: "OH", 
    color: "#ffdddd",
  },
  {
    id: 2,
    title: "Two Handed",
    initials: "TH",
    color: "#ddffff",
  },
  {
   id: 3,
    title: "Packet Cut",
    initials: "PC",
    color: "#ffeedd",
  },
  {
    id: 4,
     title: "Isolation",
     initials: "I",
     color: "#ffffdd",
   },
   {
    id: 5,
    title: "Aerial",
    initials: "A", 
    color: "#ddffdd",
  },
  {
    id: 6,
    title: "Fan/Spread",
    initials: "FS",
    color: "#ddecff",
  },
  {
   id: 7,
    title: "Single Card",
    initials: "SC",
    color: "#e6ddff",
  },
  {
    id: 8,
     title: "Magical",
     initials: "M",
     color: "#ffddfc",
   },
]

type State = {
  ideaData: any,
  tagData: any,
  tagFilter: any,
  searchString: string,
  ideasToDisplay: any,
  fetchingIdeaData: boolean,
  hasIdeaData: boolean,
  usePlaceholder: boolean,
  filtersVisible: boolean,
}

class ListScreen extends Component<Props, State> { 
  constructor(props) {
    super(props);

    this.state = {
      ideaData: [],
      tagData: placeholderTags,
      ideasToDisplay: [],
      searchString: '',
      fetchingIdeaData: false,
      hasIdeaData: false,
      usePlaceholder: false, // should it use the placeholder data above?
      filtersVisible: false,
    }
  }

  componentDidMount = () => {
    this.setState({ "fetchingIdeaData": true }, () => {
      AsyncStorage.getItem('ideaData')
      .then((value) => {
        const loadedIdeaData = JSON.parse(value) 
        if (value != null && !this.state.usePlaceholder) {
          this.setState({ 'ideaData': loadedIdeaData, "fetchingIdeaData": false, "hasIdeaData": true },
            () => (this.updateListFilters()))
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
      this.updateListFilters()
    })
  }

  updateStoredIdeaData = () => {
    AsyncStorage.setItem('ideaData', JSON.stringify(this.state.ideaData));
  }

  updateListFilters = () => {
    console.log(this.state.searchString)
    const filteredIdeas = this.state.ideaData  
    
    //add tag search here

    let searchedIdeas

    if (this.state.searchString != '') {
      searchedIdeas = filteredIdeas.filter(
        i => (i.title.toLowerCase().indexOf(this.state.searchString?.toLowerCase()) > -1
      ))
    } else {
      searchedIdeas = filteredIdeas
    }

    this.setState({
      ideasToDisplay: searchedIdeas,
    })
  }

  onSearchChangedText = (value) => {
    console.log(value)
    this.setState({
      searchString: value,
    }, () => (this.updateListFilters()))
  }

  renderFilters = () => {
    if (this.state.filtersVisible) {
      return (
        <View style={styles.filterTopBar}>

        </View>
      )
    }
    return (
      <View style={styles.filterTopBarInactive}>
        <TextInput
          style={styles.searchInputBar}
          placeholder={"Search..."}
          onChangeText={this.onSearchChangedText}
        />
        <Icon name="tune" size={38} color="#aaa" />
      </View>
    )
  }

  renderList = () => {
    if (this.state.hasIdeaData && !this.state.fetchingIdeaData) {
      ideaList = this.state.ideasToDisplay.map(e => {
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
      if (ideaList.length == 0) {
        return (
          <View style={styles.loadingContainer}>
            <Text style={{ color: '#fff' }}>{"No results found :/"}</Text>
          </View>
        )
      }
      return (
        <ScrollView contentContainerStyle={styles.listContainer}>
          {ideaList}
        </ScrollView> 
      )
    }
    return (
      <View style={styles.loadingContainer}>
        <Text style={{ color: '#fff' }}>{"Loading..."}</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.wrapper}>
        {this.renderFilters()} 
        {this.renderList()}
      </View>
      
    );
  }
}

export default ListScreen;