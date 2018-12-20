import { StyleSheet } from "react-native"

export default StyleSheet.create({
  listContainer: {
    backgroundColor: "#000",
    padding: 4,
    alignSelf: "stretch", 
  },
  loadingContainer: {
    backgroundColor: "#000",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterTopBarInactive: {
    height: 60,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#222',
  },
  searchInputBar: {
    flex: 1,
    height: 36,
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#aaa',
    borderStyle: 'solid',
    borderRadius: 18,
    backgroundColor: '#fff',
    padding: 1,
    paddingLeft: 14,
    paddingRight: 14,
    marginRight: 8,
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#000',
  },
})