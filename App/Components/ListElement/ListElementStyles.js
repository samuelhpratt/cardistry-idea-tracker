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
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    textAlign: "center",
    textAlignVertical: "center",
    margin: 2,

    fontSize: 18,
  }
})