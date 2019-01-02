import { StyleSheet } from "react-native"

export default StyleSheet.create({
  elementWrapper: {
    backgroundColor: "#2A2F42",
    alignSelf: "stretch",
    flexDirection: "row",
    padding: 10,
    margin: 2, 
    borderRadius: 8,
  },
  thumbnail: {
    width: 80,
    height: 80,
    alignSelf: "flex-start",
    borderRadius: 6,
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
    color: "#fff",
    fontSize: 20,
    fontFamily: "InterUI-Regular",
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
    fontFamily: "InterUI-Regular",
  },
  rightButton: {
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 10,
  },
})