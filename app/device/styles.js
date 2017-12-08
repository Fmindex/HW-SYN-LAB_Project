/* @flow */

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  imageContainer: {
    backgroundColor: 'white'
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
  subtitle: {
    color: 'white',
    marginTop: 8
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
  }
});
