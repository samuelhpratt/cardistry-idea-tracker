import { StyleSheet } from "react-native"

export default StyleSheet.create({
  elementWrapper: {
    backgroundColor: "#fff",
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
    color: "#000",
    fontSize: 20,
    fontFamily: "InterUI-Regular",
  },
  dateText: {
    color: "#bbb",
    fontSize: 16,
    fontFamily: "InterUI-Regular",
  },
  tagsWrapper: {
    flexDirection: "row",
  },
  tagBackground: {
    width: 38,
    height: 38,
    borderRadius: 38 / 2,
    margin: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagText: {
    color: 'rgba(0, 0, 0, 0.1)',
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 16,
    fontFamily: "InterUI-Regular",
  },
  rightButton: {
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 10,
  },
})