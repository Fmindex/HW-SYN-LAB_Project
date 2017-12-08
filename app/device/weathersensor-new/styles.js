/* @flow */

import { accentedTextColor, primaryColor } from '../../common/styles';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    shadowColor: 'rgba(201,201,201,0.5)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    marginBottom: 11,
    // overflow: 'hidden'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    marginTop: -48,
    paddingLeft: 16,
    paddingRight: 16,
  },
  header: {
    width: '100%',
    height: 120
  },
  statusInfo: {
    marginLeft: 35,
    marginTop: 10,
    flexDirection: 'column',
    flex: 2,
  },
  deviceName: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    color: "#7a9ff8"
  },
  locationName: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    color: "#b4b4b4",
    paddingTop: 5,
    paddingLeft: 5,
  },
  connectStatus: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    color: "#07e192",
    paddingTop: 5,
    paddingLeft: 5,
  },
  deviceImageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 30,
    paddingTop: 8,
    flex: 1,
  },
  deviceImage: {
    marginTop: 3,
    height: 85,
    width: 66,
  },
  todayContainer: {
    height: 120,
    width: '100%',
    marginBottom: 11,
  },
  todayBackground: {
    height: '100%',
    width: '100%',
  },
  todayContent: {
    marginTop: -130,
    paddingLeft: 39,
    paddingRight: 39,
    paddingTop: 9,
    flexDirection: 'column',
    height: '100%',
  },
  todayTitle: {
    fontSize: 21,
    color: '#ffffff',
  },
  todayTemperature: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  todayTempCurrent: {
    fontSize: 72,
    color: '#ffffff',
  },
  todayMinMax: {
    flexDirection: 'column',
    paddingTop: 31,
    justifyContent: 'center',
  },
  todayMinMaxLabel: {
    fontSize: 14,
    color: '#ffffff',
    marginTop: 3,
    marginBottom: 3,
  },
  todayEtc: {
    paddingTop: 10,
    flexDirection: 'row',
    paddingLeft: 25,
    paddingRight: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  etc: {
    borderRightWidth: 1,
    borderColor: '#ffffff',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  etcLast: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  subText: {
    fontSize: 9,
    color: 'rgb(130, 130, 130)',
  },
  daysContainer: {
    width: '100%',
    height: '100%',
    paddingLeft: 17,
    paddingRight: 17,
    paddingTop: 8,
    paddingBottom: 8,
    flexDirection: 'column',
  },
  daysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 5,
  },
  day: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bar: {
    backgroundColor: 'rgb(200, 240, 252)',
    height: 100,
    width: 2,
    marginLeft: 10,
  },
  dayName: {
    fontSize: 18,
    color: 'rgb(100, 100, 100)',
  },
  dayMax: {
    fontSize: 14,
    color: 'rgb(44, 154, 240)',
    marginRight: 2,
  },
  dayMin: {
    fontSize: 14,
    color: 'rgb(103, 212, 239)',
    marginLeft: 2,
  },
  dayDate: {
    marginTop: 8,
    fontSize: 14,
    color: 'rgb(100, 100, 100)',
  },
  dayColumn: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 64,
  },
  sensorsContainer: {
    width: '100%',
    height: '100%',
    paddingTop: 5,
    flexDirection: 'column',
  },
  sensorsTitleContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  sensorsTitle: {
    fontSize: 14,
    color: 'rgb(100, 100, 100)',
  },
  sensorsContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentInfo: {
    flexDirection: 'column',
    paddingLeft: 10,
    paddingTop: 10,
  },
  sensorsText: {
    fontSize: 10,
    color: 'rgb(100, 100, 100)',
  },
  text: {
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },

});

export default styles;
