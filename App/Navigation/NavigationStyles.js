import { StyleSheet } from "react-native"
import colors from "../Themes/Colours";

export default StyleSheet.create({
  tabBar: {
    height: 60,
    paddingBottom: 5,
    backgroundColor: '#fff',
    borderTopColor: "transparent",
  },
  cameraButtonWrapper: {
    backgroundColor: "#ccc",
    height: 84,
    width: 84,
    borderRadius: 42,
    borderWidth: 8,
    borderColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 5,
  },
  cameraButton: {
    backgroundColor: '#ff0a57',
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  }
})