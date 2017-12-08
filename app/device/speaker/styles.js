/* @flow */

import { StyleSheet } from 'react-native';

const CIRCLE_DIAMETER: number = 200;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  title: {
    textAlign: 'center',
    color: 'skyblue'
  },
  controller: {
    padding: 16,
    flexDirection: 'row',
    backgroundColor: 'skyblue',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    backgroundColor: '#aadef0',
    width: CIRCLE_DIAMETER,
    height: CIRCLE_DIAMETER,
    borderColor: '#87ceebcc',
    borderRadius: CIRCLE_DIAMETER / 2,
    borderWidth: CIRCLE_DIAMETER / 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
    marginRight: 16
  },
  icon: {
    backgroundColor: 'transparent'
  },
  switchContainer: {
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 48,
    borderColor: 'lightgray',
    margin: 16,
    paddingBottom: 16,
    paddingTop: 16
  },
  sliderContainer: {
    flexDirection: 'row',
    margin: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  slider: {
    flex: 1,
    marginLeft: 16,
    marginRight: 16
  }
});
