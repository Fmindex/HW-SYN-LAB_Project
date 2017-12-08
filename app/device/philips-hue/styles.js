/* @flow */

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  Container: {
    flex:1,
    backgroundColor: 'white'
  },
  imageContainer: {
    backgroundColor: 'white'
  },
  settingContainer: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 10
  },
  scheduleContainer: {
    flex:1,
    backgroundColor: 'white'
  },
  offonContainer: {
    //flex:1,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 8
  },
  scheduleText: {
    //flex:1,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    //marginLeft: 50,
    marginRight: 50,
    marginTop: 8,
    marginBottom:10
  },
  brightnessContainer: {
    //flex:1,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 0
  },
  sliderContainer: {
    //alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  timedayContainer: {
    //alignItems: 'center',
    flexDirection: 'row',
  },
  
  image: {
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0, 0)'
  },
  title: {
    color: 'white',
    fontSize: 36
  },
  titlesetting: {
    alignItems: 'flex-end',

    color: 'black',
    fontSize: 18,
    marginLeft: 8,
    marginTop: 8
  },
  titlecolor: {
    alignItems: 'flex-end',

    color: 'black',
    fontSize: 18,
    marginLeft: 58,
    marginTop: 4
  },
  subtitle: {
    color: 'white',
    marginTop: 8
  },
  timetitle: {
    marginLeft:58,
    color: 'black',
    fontSize: 26,
  },
  ampmtitle: {
    marginLeft:10,
    marginTop:6,
    color: 'gray',
    fontSize: 18,
  },
  daytitle: {
    color: 'black',
    fontSize: 14,
    marginTop: 12,
    marginLeft: 30
  },
  roomtitle: {
    color: 'gray',
    fontSize: 14,
    marginTop: 12,
    marginLeft: 58
  },
  titlenumpercent: {
    color: 'black',
    marginTop:4,
    fontSize: 24
  },
  sectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: 'white'
  },
  tabbar: {
    backgroundColor: 'white'
  },
  indicator: {
    backgroundColor: '#000'
  },
  labelText: {
    color: 'black',
    textAlign: 'center'
  },
   divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#ccc'
  }
});
