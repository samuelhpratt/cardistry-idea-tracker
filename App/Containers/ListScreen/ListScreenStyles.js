import { StyleSheet } from "react-native"
import { Colors } from "../../Themes"

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  searchWrapper: {
    height: 60,
    padding: 8,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  }, 
  searchInputBar: {
    flex: 1,
    height: 36,
    fontSize: 18,
    color: Colors.black,
    fontFamily: "InterUI-Regular",
    borderRadius: 6,
    backgroundColor: Colors.background,
    padding: 1,
    paddingLeft: 14,
    paddingRight: 14,
    marginRight: 8,
  },
  filtersWrapper: {
    backgroundColor: '#fff',
  },
  filterIcon: {
    margin: 4,
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
    fontSize: 16,
    fontFamily: "InterUI-Regular",
  },
  tagSelected: {
    color: '#fff',
  },
  listContainer: {
    backgroundColor: Colors.background,
    padding: 6,
    alignSelf: "stretch", 
    flexGrow: 1,
  },
  loadingContainer: {
    backgroundColor: Colors.background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})