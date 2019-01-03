import { StyleSheet } from "react-native"

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#1F2235',
  },
  header: {
    backgroundColor: '#1A1C2B',
    overflow: 'hidden',
  },
  searchWrapper: {
    height: 60,
    padding: 8,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1A1C2B',
  }, 
  searchInputBar: {
    flex: 1,
    height: 36,
    fontSize: 20,
    color: '#fff',
    fontFamily: "InterUI-Regular",
    borderRadius: 18,
    backgroundColor: '#2A2F42',
    padding: 1,
    paddingLeft: 14,
    paddingRight: 14,
    marginRight: 8,
  },
  filtersWrapper: {
    backgroundColor: '#141521',
  },
  tagsWrapper: {
    flexDirection: "row",
    flexWrap: 'wrap',
    padding: 6,
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
  tagSelected: {
    color: '#FFF',
  },
  listContainer: {
    backgroundColor: "#1F2235",
    padding: 6,
    alignSelf: "stretch", 
    flexGrow: 1,
  },
  loadingContainer: {
    backgroundColor: "#1F2235",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})