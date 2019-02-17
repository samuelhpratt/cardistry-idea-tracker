// @flow

import { StyleSheet } from "react-native"
import { Colors } from "../../Themes"

export default StyleSheet.create({
  elementWrapper: {
    backgroundColor: Colors.white,
    alignSelf: "stretch",
    flexDirection: "row",
    margin: 2, 
    borderRadius: 8,
    overflow: 'hidden',
  },
  thumbnail: {
    width: 100,
    height: 100,
    alignSelf: "flex-start",
  },
  infoWrapper: {
    flex: 1,
    margin: 10,
    flexDirection: "column",
    justifyContent: 'space-between',
  },
  detailsWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  titleText: {
    color: Colors.black,
    fontSize: 20,
    fontFamily: "InterUI-Regular",
  },
  dateText: {
    color: Colors.lightGrey,
    fontSize: 16,
    fontFamily: "InterUI-Regular",
  },
  tagsWrapper: {
    flexDirection: "row",
  },
  tagBackground: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    margin: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagText: {
    color: 'rgba(0, 0, 0, 0.1)',
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 12,
    fontFamily: "InterUI-Regular",
  },
  rightButton: {
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 10,
  },
})