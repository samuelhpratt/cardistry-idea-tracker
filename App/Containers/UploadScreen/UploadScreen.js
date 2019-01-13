import React, { Component } from "react";
import { Text, View, AsyncStorage, Image, Button, TextInput, TouchableOpacity } from "react-native";
import ImagePicker from 'react-native-image-picker';
import Video from 'react-native-video';
import tagColours from "../../Themes/TagColours"

import styles from "./UploadScreenStyles";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

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
  navigation: any,
}

type State = {
  newTitle: string,
  newThumbnail: string,
  newTags: [],
  newVideoUri: string,
}

class UploadScreen extends Component<Props, State> { 
  constructor(props) {
    super(props);

    this.state = {
      tagData: placeholderTags,
      newTitle: "",
      newThumbnail: "",
      newTags: [],
      newVideoUri: "",
    }
  }

  componentDidMount = () => { 
  }

  uploadThumbnail = () => {
    ImagePicker.launchImageLibrary(
      {
        title: "Select thumbnail image",
        takePhotoButtonTitle: null,
        mediaType: 'photo',
        storageOptions: {
          skipBackup: true,
        }
      }, (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          this.setState({
            newThumbnail: response.uri,
          });
        }
      }
    )
  }

  uploadVideo = () => {
    ImagePicker.launchImageLibrary(
      {
        title: "Select video",
        takePhotoButtonTitle: null,
        mediaType: 'video',
        storageOptions: {
          skipBackup: true,
        } 
      }, (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          this.setState({ 
            newVideoUri: response.uri,
            hasVideo: true,
          })
        }
      }
    )
  }

  saveIdea = () => {
    if (
      this.state.newThumbnail != "" &&
      this.state.newTags.length > 1 &&
      this.state.newVideoUri != ""
    ) {
      AsyncStorage.getItem('lastId')
        .then((idValue) => {
          const oldId = JSON.parse(idValue)
          const newId = oldId!= null ? oldId + 1 : 0
          AsyncStorage.setItem('lastId', JSON.stringify(newId)).then(() => {
            const today = new Date()
            newIdea = {
              id: newId,
              title: this.state.newTitle != "" ? this.state.newTitle : "untitled",
              thumbnail: this.state.newThumbnail,
              date: today.getDate().toString()  + "/" + (today.getMonth()+1).toString() + "/" + today.getFullYear().toString().substr(-2),
              tags: this.state.newTags,
              videoUri: this.state.newVideoUri,
            }
            AsyncStorage.getItem('ideaData')
            .then((value) => {
              const loadedIdeaData = JSON.parse(value) 
              const newIdeaData = [...loadedIdeaData, newIdea]
              AsyncStorage.setItem('ideaData', JSON.stringify(newIdeaData)).then(() => {
                this.props.navigation.navigate('ListScreen')
              })
            })
          })
        })  
    }
  }

  tagPressed = (tagId) => {
    if (this.state.newTags.includes(tagId)) {
      this.setState(prevState => ({
        newTags: prevState.newTags.filter((id) => {
          return id !== tagId
        })
      }))
    } else {
      this.setState(prevState => ({
        newTags: [...prevState.newTags, tagId]
      }))
    }
  }

  renderTagsList = () => {
    tagList = this.state.tagData.map(t => {
      return (
        <TouchableOpacity
          key={t.id} 
          style={[styles.tagBackground, {backgroundColor: t.style.backgroundColor}]} 
          onPress={() => this.tagPressed(t.id)}
        >
          <Text
            style={[styles.tagText, {color: t.style.color}, this.state.newTags.includes(t.id)? styles.tagSelected : null]} 
          >
            {t.initials}
          </Text>
        </TouchableOpacity>
      )
    })
    return (tagList)
  }

  render() {
    return (
      <View style={styles.background}>
        <View style={styles.wrapper}>
          <View style={styles.videoWrapper}>
            { this.state.hasVideo ?
              this.state.newVideoUri != "" &&
              <Video
                source={{uri: this.state.newVideoUri}}
                ref={(ref) => {
                  this.player = ref
                }}
                onBuffer={() => {}} 
                onError={(error) => {console.log(error)}}          
                style={styles.video}
                repeat={true}
                resizeMode="cover"
                muted={true}
              />
              :
              <TouchableOpacity onPress={this.uploadVideo}  style={styles.videoButton} >
                <Text style={styles.buttonText} >{"Upload Video"}</Text>
              </TouchableOpacity>
            }
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 8}}>

            <View style={{flex: 1, marginRight: 8}}>
              <TextInput
                placeholder="Move Title"
                style={styles.titleInput}
                placeholderTextColor={"#91939E"}
                onChangeText={(text) => this.setState({newTitle: text})}
                value={this.state.newTitle}
              />
              <View style={styles.tagsWrapper}>
                {this.renderTagsList()}
              </View>
            </View>

            <View style={styles.thumbnailWrapper}>
            { this.state.newThumbnail != "" ?
              <Image style={styles.thumbnail} source={{uri: this.state.newThumbnail}} />
              :
              <TouchableOpacity onPress={this.uploadThumbnail}  style={styles.thumbnailButton} >
                <Text style={styles.buttonText} >{"Upload\nThumbnail"}</Text>
              </TouchableOpacity>           
            }
            </View>

          </View>

          <TouchableOpacity onPress={this.saveIdea} style={styles.saveButton} >
            <Text style={styles.buttonText} >{"Save to library"}</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

export default UploadScreen;