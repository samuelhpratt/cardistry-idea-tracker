import { StyleSheet } from "react-native"

export default StyleSheet.create({
  listContainer: {
    backgroundColor: "#1F2235",
    padding: 6,
    alignSelf: "stretch", 
  },
  loadingContainer: {
    backgroundColor: "#1F2235",
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
    backgroundColor: '#1A1C2B',
  },
  searchInputBar: {
    flex: 1,
    height: 36,
    fontSize: 20,
    color: '#fff',
    borderRadius: 18,
    backgroundColor: '#2A2F42',
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