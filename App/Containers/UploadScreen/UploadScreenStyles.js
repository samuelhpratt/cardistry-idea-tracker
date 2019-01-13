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
  videoWrapper: {
    marginTop: 10,
    height: 400,
    backgroundColor: "#141521",
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
    backgroundColor: "#414866",
    borderRadius: 8,
  },
  thumbnailWrapper: {
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#141521",
    borderRadius: 4,
    overflow: 'hidden',
  },
  thumbnailButton: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#414866",
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
    textAlignVertical: "center",
    fontFamily: "InterUI-Regular",
    color: "#fff",
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
    color: '#fff',
    fontFamily: "InterUI-Regular",
    borderRadius: 4,
    backgroundColor: '#1A1C2B',
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
    backgroundColor: '#1A1C2B',
    borderRadius: 4,
    padding: 4,
  },
  tagBackground: {
    margin: 2,
    width: 38,
    height: 38,
    borderRadius: 38 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagText: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 18,
    fontFamily: "InterUI-Regular",
  },
  tagSelected: {
    color: '#FFF',
  },
  saveButton: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#414866",
    borderRadius: 8,
    marginLeft: 8,
    marginRight: 8,
  },
})