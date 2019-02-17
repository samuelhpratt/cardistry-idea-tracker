// @flow

import React, { Component } from "react";
import { Text, View, ScrollView, AsyncStorage, TextInput, Animated, TouchableOpacity, SafeAreaView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from "react-native-linear-gradient";
import ListElement from "../../Components/ListElement/ListElement";

import styles from "./ListScreenStyles";
import { Colors, TagColors } from "../../Themes";

const placeholderTags = [
  {
    id: 1,
    title: "One Handed",
    initials: "OH", 
    style: TagColors.c4,
  },
  {
    id: 2,
    title: "Two Handed",
    initials: "TH",
    style: TagColors.c7,
  },
  {
   id: 3,
    title: "Packet Cut",
    initials: "PC",
    style: TagColors.c1,
  },
  {
    id: 4,
     title: "Isolation",
     initials: "I",
     style: TagColors.c2,
   },
   {
    id: 5,
    title: "Aerial",
    initials: "A", 
    style: TagColors.c5,
  },
  {
    id: 6,
    title: "Fan/Spread",
    initials: "FS",
    style: TagColors.c8,
  },
  {
   id: 7,
    title: "Single Card",
    initials: "SC",
    style: TagColors.c6,
  },
  {
    id: 8,
     title: "Magical",
     initials: "M",
     style: TagColors.c3,
   },
   {
    id: 9,
     title: "Display",
     initials: "D",
     style: TagColors.c9,
   },
   {
    id: 10,
     title: "Production",
     initials: "P",
     style: TagColors.c10,
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
  filtersOpen: boolean,
  filtersAnimation: any,
  maxHeight: number,
}

class ListScreen extends Component<Props, State> { 
  constructor(props: any) {
    super(props);

    this.state = {
      ideaData: [],
      tagData: placeholderTags,
      tagFilter: [],
      ideasToDisplay: [],
      searchString: '',
      fetchingIdeaData: false,
      hasIdeaData: false,
      filtersOpen: false,
      filtersAnimation: new Animated.Value(60),
      maxHeight: 0,
    }
  }



  componentDidMount(){
    this.loadList()
    this.props.navigation.addListener('willFocus', this.loadList)
  }

  loadList = () => {
    this.setState({ fetchingIdeaData: true }, () => {
      AsyncStorage.getItem('ideaData')
      .then((value) => {
        const loadedIdeaData = JSON.parse(value) 
        if (value != null) {
          this.setState({ ideaData: loadedIdeaData, fetchingIdeaData: false, hasIdeaData: true },
            () => (this.updateListFilters()))
        } else {
          AsyncStorage.setItem('lastId', JSON.stringify(-1))
        }
      })
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
        i => (i.title.toLowerCase().indexOf(this.state.searchString.toLowerCase()) > -1
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

  onListElementPressed = (idea: Object) => {
    this.props.navigation.navigate('PreviewScreen', {'idea': idea})
  }

  onSearchChangedText = (value: string) => {
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

  tagFilterPressed = (tagId: number) => {
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
    if (this.state.tagData.length > 0) {
      const tagList = this.state.tagData.map(t => {
        return (
          <TouchableOpacity
            key={t.id} 
            style={[styles.tagBackground, this.state.tagFilter.includes(t.id)? 
              [{ borderColor: t.style.light }, styles.tagSelected] :
              { backgroundColor: t.style.light }
            ]} 
            onPress={() => this.tagFilterPressed(t.id)}
          >
            <Text
              style={[styles.tagText, {color: t.style.dark}]} 
            >
              {t.title}
            </Text>
          </TouchableOpacity>
        )
      })
      return (tagList)
    }
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
          <Icon 
            name="tune" 
            size={30} 
            color={this.state.filtersOpen? Colors.black : Colors.lightGrey} 
            onPress={this.toggleFilters} 
            style={styles.filterIcon}
          />
        </View>
        
        <View style={styles.filtersWrapper} onLayout={this._setMaxHeight.bind(this)}>
          <LinearGradient 
            locations={[0.2, 0.8]}
            colors={["rgba(81, 84, 99, 0.05)", "rgba(81, 84, 99, 0)"]}
            style={styles.filterShadow}
            pointerEvents="none"
          />
          <View style={styles.tagsWrapper}>
            {this.renderTagsList()}
          </View>
        </View>
      </Animated.View>
    )
  }

  renderIdeasList = () => {
    if (this.state.hasIdeaData && !this.state.fetchingIdeaData) {
      const ideaList = this.state.ideasToDisplay.map(e => {
        const idea = {
          id: e.id,
          title: e.title,
          thumbnail: e.thumbnail,
          date: e.date,
          tags: this.state.tagData.filter(t => (e.tags.includes(t.id))),
          videoUri: e.videoUri,
        }
        return (
          <ListElement key={e.id}
            idea={idea}
            onPress={() => this.onListElementPressed(idea)}            
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
        <View style={{ flex: 1 }}>
          <ScrollView contentContainerStyle={styles.listContainer}>
            {ideaList}
          </ScrollView> 
          <LinearGradient 
            locations={[0.2, 0.8]}
            colors={["rgba(81, 84, 99, 0.05)", "rgba(81, 84, 99, 0)"]}
            style={styles.topShadow}
            pointerEvents="none"
          />
          <LinearGradient 
            locations={[0.2, 0.8]}
            colors={["rgba(81, 84, 99, 0)", "rgba(81, 84, 99, 0.05)"]}
            style={styles.bottomShadow}
            pointerEvents="none"
          />
        </View>
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
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
        <View  style={styles.wrapper}>
          {this.renderFilters()} 
          {this.renderIdeasList()}
        </View>
      </SafeAreaView>
    );
  }
}

export default ListScreen;