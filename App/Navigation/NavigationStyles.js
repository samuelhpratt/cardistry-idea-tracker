import { StyleSheet } from "react-native"
import { Colors } from "../Themes"

export default StyleSheet.create({
  tabBar: {
    height: 60,
    paddingBottom: 5,
    backgroundColor: Colors.white,
    borderTopColor: "transparent",
  },
  cameraButtonWrapper: {
    backgroundColor: "#ccc",
    height: 84,
    width: 84,
    borderRadius: 42,
    borderWidth: 8,
    borderColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 5,
  },
  cameraButton: {
    backgroundColor: Colors.cameraButton,
    height: 62,
    width: 62,
    borderRadius: 31,
    borderWidth: 2,
    borderColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  }
})