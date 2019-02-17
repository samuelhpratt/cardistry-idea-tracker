// @flow

import { StyleSheet } from "react-native"
import { Colors } from "../../Themes"

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  wrapper: {
    flex: 1,
    backgroundColor: Colors.white,
    margin: 8, 
    borderRadius: 8,
  },
  videoWrapper: {
    marginTop: 10,
    height: 400,
    backgroundColor: "#bbb",
  },
  video: {
    flex: 1,
  },
  videoButton: {
    padding: 20,
    marginTop: 180,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: 8,
  },
  thumbnailWrapper: {
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#bbb",
    borderRadius: 4,
    overflow: 'hidden',
  },
  thumbnailButton: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
    textAlignVertical: "center",
    fontFamily: "InterUI-Regular",
    color: Colors.black,
  },
  thumbnail: {
    width: 140,
    height: 140,
    resizeMode: 'contain',
    borderRadius: 4,
    overflow: 'hidden',
  },
  titleInput: {
    height: 36,
    fontSize: 20,
    color: Colors.black,
    fontFamily: "InterUI-Regular",
    borderRadius: 4,
    backgroundColor: Colors.background,
    padding: 1,
    paddingLeft: 8,
    paddingRight: 8,
    alignSelf: 'stretch',
    marginBottom: 8,
  },
  tagsWrapper: {
    flexDirection: "row",
    flexWrap: 'wrap',
    alignSelf: 'stretch',
    backgroundColor: Colors.white,
    borderRadius: 4,
    padding: 4,
  },
  tagBackground: {
    margin: 2,
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagText: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 12,
    fontFamily: "InterUI-Regular",
  },
  tagSelected: {
    color: '#FFF',
  },
  saveButton: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.highlight,
    borderRadius: 8,
    marginLeft: 8,
    marginRight: 8,
  },
})