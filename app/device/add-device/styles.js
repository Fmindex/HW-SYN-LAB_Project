/* @flow */

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
  header: {
    zIndex: 1,
    width: '100%',
    height: 64,
    paddingTop: 32,
    flexDirection: 'column',
    alignItems: 'center',
    shadowColor: "rgba(123, 176, 227, 0.22)",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 23,
    shadowOpacity: 1,
  },
  title: {
    zIndex: 2,
    fontSize: 20,
    fontWeight: "500",
    color: "#ffffff",
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  content: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  textButton: {
    fontSize: 16,
    color: "#ffffff",
    backgroundColor: 'transparent',
  },
  button: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 100,
    shadowColor: "rgba(255, 255, 255, 0.28)",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowRadius: 32,
    shadowOpacity: 1,
  },
  upperLine: {
    borderTopWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  itemSelector: {
    justifyContent: 'space-around', 
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: "#ffffff",
    shadowColor: "rgba(175, 175, 175, 0.5)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 7,
    shadowOpacity: 1
  },
  circleImage: {
    width: 68,
    height: 68,
    borderRadius: 36
  },
  shadowAround: {
    shadowColor: "rgba(51, 51, 112, 0.41)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 16,
    shadowOpacity: 1,
  },
  groupBackground: { 
    height: 40, 
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start', 
    alignItems: 'center',
    paddingLeft: 12,
    backgroundColor: "#f5f8ff",
  },
  groupTitle: {
    fontSize: 14,
    letterSpacing: 0.39,
    textAlign: "center",
    color: "#4a4a4a"
  },
  deviceTitle: {
    fontSize: 18,
    letterSpacing: 0.5,
    color: "#4a4a4a"
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: "rgba(151, 151, 151, 0.25)"
  },
  textInput: {
    width: 240,
    height: 44,
    borderColor: '#9b9b9b',
    borderWidth: 2,
    borderRadius: 25,
    color: '#9b9b9b',
    paddingLeft: 30,
    paddingRight: 20,
    fontSize: 13,
    marginVertical: 10,
  },
  next12: {
    marginBottom: 12,
  },
  next16: {
    marginBottom: 16,
  },
  prev8: {
    marginTop: 8,
  },
  prev16: {
    marginTop: 16,
  },
  prev24: {
    marginTop: 24,
  },
  prev32: {
    marginTop: 32,
  },
  right8: {
    marginRight: 8,
  },
  left8: {
    marginLeft: 8,
  },
  descript1: {
    fontSize: 13, 
    fontWeight: "500", 
    color: "#4a4a4a"
  },
  descript2: {
    fontSize: 18,
    fontWeight: "300",
    color: "#9b9b9b",
    textAlign: 'center',
  },
  descript3: {
    fontSize: 20,
    fontWeight: "300",
    letterSpacing: 0.56,
    color: "#4a4a4a"
  },
  descript4: {
    fontSize: 14,
    fontWeight: "300",
    color: "#9b9b9b",
    textAlign: 'center',
  },
  descript5: {
    fontSize: 16,
    fontWeight: "300",
    letterSpacing: 0.44,
    textAlign: "center",
    color: "#4a4a4a"
  },
  descript6: {
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 0.44,
    color: "#4a4a4a"
  },
  descript7: {
    fontSize: 14,
    fontWeight: "300",
    letterSpacing: 0.56,
    color: "#4a4a4a"
  },
});
