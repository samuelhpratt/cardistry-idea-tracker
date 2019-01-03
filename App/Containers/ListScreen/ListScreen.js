import React, { Component } from "react";
import { Text, View, ScrollView, AsyncStorage, TextInput, Animated, TouchableOpacity } from "react-native";
import ListElement from "../../Components/ListElement/ListElement"
import styles from "./ListScreenStyles";
import tagColours from "../../Themes/TagColours"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const placeholderIdeas = [
  {
    id: 1,
    title: "Nuke",
    thumbnail: "https://i.pinimg.com/236x/75/41/ab/7541ab930ad81a018cca45a27cbe9cf3--orion-nebula-the-deck.jpg",
    date: "6/4/16",
    tags: [2, 3, 9],
  },
  {
    id: 2,
    title: "Passport",
    thumbnail: "https://i.pinimg.com/236x/75/41/ab/7541ab930ad81a018cca45a27cbe9cf3--orion-nebula-the-deck.jpg",
    date: "2/5/18",
    tags: [2, 3],
  },
  {
   id: 3,
    title: "USB A",
    thumbnail: "https://i.pinimg.com/236x/75/41/ab/7541ab930ad81a018cca45a27cbe9cf3--orion-nebula-the-deck.jpg",
    date: "10/4/17",
    tags: [2, 3],
  }, 
  {
    id: 4,
    title: "Limbo",
    thumbnail: "https://i.pinimg.com/236x/75/41/ab/7541ab930ad81a018cca45a27cbe9cf3--orion-nebula-the-deck.jpg",
    date: "28/11/06",
    tags: [1, 3],
  },
  {
    id: 5,
    title: "Gurnard Fan",
    thumbnail: "https://i.pinimg.com/236x/75/41/ab/7541ab930ad81a018cca45a27cbe9cf3--orion-nebula-the-deck.jpg",
    date: "2/1/18",
    tags: [1, 6],
  },
  {
   id: 6,
    title: "Cragsman",
    thumbnail: "https://i.pinimg.com/236x/75/41/ab/7541ab930ad81a018cca45a27cbe9cf3--orion-nebula-the-deck.jpg",
    date: "10/4/18",
    tags: [2, 3],
  }, 
  {
    id: 7,
    title: "Updog",
    thumbnail: "https://i.pinimg.com/236x/75/41/ab/7541ab930ad81a018cca45a27cbe9cf3--orion-nebula-the-deck.jpg",
    date: "2/7/17",
    tags: [2, 3, 7],
  },
  {
   id: 8,
    title: "Crevice",
    thumbnail: "https://i.pinimg.com/236x/75/41/ab/7541ab930ad81a018cca45a27cbe9cf3--orion-nebula-the-deck.jpg",
    date: "10/7/18",
    tags: [1, 3],
  }, 
  {
    id: 9,
     title: "Flare",
     thumbnail: "https://i.pinimg.com/236x/75/41/ab/7541ab930ad81a018cca45a27cbe9cf3--orion-nebula-the-deck.jpg",
     date: "2/7/18",
     tags: [2, 3, 7, 9],
   },
   {
    id: 10,
     title: "No Strings Attached",
     thumbnail: "https://i.pinimg.com/236x/75/41/ab/7541ab930ad81a018cca45a27cbe9cf3--orion-nebula-the-deck.jpg",
     date: "14/8/18",
     tags: [2, 4, 7, 8],
   },
]

const placeholderTags = [
  {
    id: 1,
    title: "One Handed",
    initials: "OH", 
    style: tagColours.c4,
  },
  {
    id: 2,
    title: "Two Handed",
    initials: "TH",
    style: tagColours.c7,
  },
  {
   id: 3,
    title: "Packet Cut",
    initials: "PC",
    style: tagColours.c1,
  },
  {
    id: 4,
     title: "Isolation",
     initials: "I",
     style: tagColours.c2,
   },
   {
    id: 5,
    title: "Aerial",
    initials: "A", 
    style: tagColours.c5,
  },
  {
    id: 6,
    title: "Fan/Spread",
    initials: "FS",
    style: tagColours.c8,
  },
  {
   id: 7,
    title: "Single Card",
    initials: "SC",
    style: tagColours.c6,
  },
  {
    id: 8,
     title: "Magical",
     initials: "M",
     style: tagColours.c3,
   },
   {
    id: 9,
     title: "Display",
     initials: "D",
     style: tagColours.c9,
   },
   {
    id: 10,
     title: "Production",
     initials: "P",
     style: tagColours.c10,
   },
]

type Props = {
  navigation: Object,
}

type State = {
  ideaData: any,
  tagData: any,
  tagFilter: any,
  searchString: string,
  ideasToDisplay: any,
  fetchingIdeaData: boolean,
  hasIdeaData: boolean,
  usePlaceholder: boolean,
  filtersOpen: boolean,
  filtersAnimation: any,
}

class ListScreen extends Component<Props, State> { 
  constructor(props) {
    super(props);

    this.state = {
      ideaData: [],
      tagData: placeholderTags,
      tagFilter: [],
      ideasToDisplay: [],
      searchString: '',
      fetchingIdeaData: false,
      hasIdeaData: false,
      usePlaceholder: false, // should it use the placeholder data above?
      filtersOpen: false,
      filtersAnimation: new Animated.Value(60),
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
    const filteredIdeas = this.state.ideaData.filter(
      i => !this.state.tagFilter.some(t => !i.tags.includes(t))
    )  

    let searchedIdeas

    if (this.state.searchString != '') {
      searchedIdeas = filteredIdeas.filter(
        i => (i.title.toLowerCase().indexOf(this.state.searchString?.toLowerCase()) > -1
      ))
    } else {
      searchedIdeas = filteredIdeas
    }

    searchedIdeas.sort((a, b) => {
      var textA = a.title.toLowerCase();
      var textB = b.title.toLowerCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })

    this.setState({
      ideasToDisplay: searchedIdeas,
    })
  }

  onListElementPressed = (idea) => {
    this.props.navigation.navigate('IdeaScreen', {'idea': idea})
  }

  onSearchChangedText = (value) => {
    console.log(value)
    this.setState({
      searchString: value,
    }, () => (this.updateListFilters()))
  }

  toggleFilters = () => {
    let initialValue = this.state.filtersOpen? this.state.maxHeight + 60 : 60,
        finalValue   = this.state.filtersOpen? 60 : this.state.maxHeight + 60;

    this.setState({
      filtersOpen : !this.state.filtersOpen
    });

    this.state.filtersAnimation.setValue(initialValue);
    Animated.timing(
        this.state.filtersAnimation,
        {
            toValue: finalValue
        }
    ).start(); 
  }

  _setMaxHeight(event){
    this.setState({
      maxHeight: event.nativeEvent.layout.height,
    })
  }

  tagFilterPressed = (tagId) => {
    if (this.state.tagFilter.includes(tagId)) {
      this.setState(prevState => ({
        tagFilter: prevState.tagFilter.filter((id) => {
          return id !== tagId
        })
      }),
      () => (this.updateListFilters()))
    } else {
      this.setState(prevState => ({
        tagFilter: [...prevState.tagFilter, tagId]
      }),
      () => (this.updateListFilters()))
    }
  }

  renderTagsList = () => {
    tagList = this.state.tagData?.map(t => {
      return (
        <TouchableOpacity
          key={t.id} 
          style={[styles.tagBackground, t.style]} 
          onPress={() => this.tagFilterPressed(t.id)}
        >
          <Text
            style={[styles.tagText, t.style, this.state.tagFilter.includes(t.id)? styles.tagSelected : null]} 
          >
            {t.title}
          </Text>
        </TouchableOpacity>
      )
    })
    return (tagList)
  }

  renderFilters = () => {
    return (
      <Animated.View style={[styles.header,{height: this.state.filtersAnimation}]}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInputBar}
            placeholder={"Search..."}
            placeholderTextColor={"#91939E"}
            onChangeText={this.onSearchChangedText}
          />
          <Icon name="tune" size={38} color={this.state.filtersOpen? "#FFF" : "#91939E"} onPress={this.toggleFilters} />
        </View>
        
        <View style={styles.filtersWrapper} onLayout={this._setMaxHeight.bind(this)}>
          <View style={styles.tagsWrapper}>
            {this.renderTagsList()}
          </View>
        </View>
      </Animated.View>
    )
  }

  renderIdeasList = () => {
    if (this.state.hasIdeaData && !this.state.fetchingIdeaData) {
      ideaList = this.state.ideasToDisplay.map(e => {
        return (
          <ListElement key={e.id}
            idea={{
              id: e.id,
              title: e.title,
              thumbnail: e.thumbnail,
              date: e.date,
              tags: this.state.tagData.filter(t => (e.tags.includes(t.id))),
            }}
            onPress={this.onListElementPressed}            
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
        {this.renderIdeasList()}
      </View>
      
    );
  }
}

export default ListScreen;