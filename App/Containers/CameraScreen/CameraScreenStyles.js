// @flow

import { StyleSheet } from "react-native"
import { Colors } from "../../Themes";

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlayWrapper: {
    flex: 1,
    height: '100%',
    width: '100%',
    position: 'absolute',
    justifyContent: 'space-between',
  },
  topBar: {
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 9,
  },
  bottomBar: {
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 9,
  },
  cameraButtonWrapper: {
    backgroundColor: Colors.transparent,
    height: 68,
    width: 68,
    borderRadius: 34,
    borderWidth: 3,
    borderColor: Colors.lightGrey,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  cameraButton: {
    backgroundColor: Colors.cameraButton,
    height: 58,
    width: 58,
    borderRadius: 29,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  }
})