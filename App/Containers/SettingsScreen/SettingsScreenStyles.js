// @flow

import { StyleSheet } from "react-native"

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#1F2235",
  },
  wrapper: {
    flex: 1,
    backgroundColor: "#2A2F42",
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8, 
    borderRadius: 8,
  },
  text: {
    color: "#fff",
    fontSize: 18,   
    fontFamily: "InterUI-Regular",
  },
  input: {
    height: 36,
    fontSize: 20,
    color: '#fff',
    fontFamily: "InterUI-Regular",
    borderRadius: 18,
    backgroundColor: '#1A1C2B',
    padding: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
})