/* @flow */

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 48,
    height: 48,
    marginLeft: 16,
    marginRight: 16
  },
  title: {
    flex: 1
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#ccc'
  }
});
