import { StyleSheet } from "react-native"

export default StyleSheet.create({
  elementWrapper: {
    backgroundColor: "#fff",
    alignSelf: "stretch",
    flexDirection: "row",
    padding: 10,
    margin: 2, 
  },
  thumbnail: {
    width: 80,
    height: 80,
    alignSelf: "flex-start",
  },
  infoWrapper: {
    flex: 1,
    marginLeft: 10,
    flexDirection: "column",
    justifyContent: 'space-between',
  },
  detailsWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  detailsText: {
    color: "#222",
    fontSize: 20,
  },
  tagsWrapper: {
    flexDirection: "row",
  },
  tagIcon: {
    width: 38,
    height: 38,
    borderRadius: 38 / 2,
    textAlign: "center",
    textAlignVertical: "center",
    margin: 2,

    fontSize: 18,
  },
  rightButton: {
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 10,
  },
})