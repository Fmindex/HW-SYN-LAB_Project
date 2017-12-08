/* @flow */

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    height: 116,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  titleText: {
    fontSize: 18,
    fontWeight: "500",
    letterSpacing: 0.19,
    textAlign: "center",
    color: "#ffffff",
    paddingTop: 29,
    paddingBottom: 15,
  },
  cardContainer: {
    borderRadius: 16,
    backgroundColor: "#ffffff",
    shadowColor: "rgba(175, 175, 175, 0.5)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 3,
    shadowOpacity: 1,
    marginBottom: 11,
    marginLeft: 14,
    marginRight: 14,
  },
  statusCard: {
    marginTop: 65,
    flex: 1,
    flexDirection: 'column',
    height: 128,
  },
  statusCardInfo: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  statusCardImage: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 50,
  },
  statusCardLocationInfo: {
    paddingTop: 15,
    paddingLeft: 20,
    flexDirection: 'row',
  },
  statusCardLocationTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#7a9ff8",
    paddingTop: 6,
    paddingLeft: 8,
    marginBottom: 4,
  },
  statusCardCurrent: {
    fontSize: 14,
    fontWeight: "500",
    color: "#b4b4b4",
    paddingLeft: 38,
  },
  statusCardTempurature: {
    fontSize: 30,
    fontWeight: "300",
    color: "#6e6e6e",
    marginLeft: 16,
  },
  speedCard: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    height: 105,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "500",
    letterSpacing: 0.26,
    color: "#6e6e6e",
    paddingTop: 5,
    textAlign: 'center',
  },
  speedButtonBar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineButtonBar: {
    width: 285,
    height: 4,
    borderRadius: 11,
    backgroundColor: "#f7d4d7"
  },
  buttonContainer: {
    width: 285,
    height: '100%',
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  speedButton: {
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 2,
    shadowOpacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonActive: {
    backgroundColor: '#809efc',
  },
  buttonInactive: {
    backgroundColor: "#d8d8d8",
  },
  buttonSize1: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  buttonSize2: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
  },
  buttonSize3: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  buttonSize4: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
  },
  timerCard: {
    height: 168,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  timerButtonBar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerLabel: {
    fontSize: 14,
    fontWeight: "500",
    paddingTop: 8,
    textAlign: 'center',
  },
  activeLabel: {
    color: "#6e6e6e"
  },
  inactiveLabel: {
    color: "#e6e6e6"
  },
  timerButtonContainer: {
    paddingTop: 24,
  },
  on: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    color: "#3ce8aa",
    paddingTop: 4,
  },
  off: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    color: "#e6e6e6",
    paddingTop: 4,
  },
  switchContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  angleCard: {
    flex: 1,
    height: 228,
  },
  angleButtonBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 11.5,
  },
  angleButtonContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  powerButtonContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 5,
  }
});
