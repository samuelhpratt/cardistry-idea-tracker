import { StyleSheet } from "react-native"

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#1F2235",
  },
  wrapper: {
    flex: 1,
    backgroundColor: "#2A2F42",
    margin: 8, 
    borderRadius: 8,
  },
  header: {
    height: 50,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 6,
    paddingRight: 6,
  },
  headerLeftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  headerRightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 6,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,   
  },
  videoWrapper: {
    height: 400,
    backgroundColor: "#000",
  },
  video: {
    flex: 1,
  },
  tagsWrapper: {
    flexDirection: "row",
    flexWrap: 'wrap',
    padding: 4,
  },
  tagBackground: {
    height: 38,
    borderRadius: 38 / 2,
    margin: 4,
    paddingLeft: 12,
    paddingRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagText: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 18,
    fontFamily: "InterUI-Regular",
  },
})