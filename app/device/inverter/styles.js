/* @flow */

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  title: {
    textAlign: 'center',
    color: 'skyblue'
  },
  hero: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  box: {
    backgroundColor: '#aadef0',
    borderRadius: 8,
    margin: 8,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  boxTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 8,
  },
  boxDescription: {
    color: 'white'
  },
  energyTime: {
    flexDirection: 'row',
    marginTop: 16
  },
  energyTimeContainer: {
    flex: 1,
    alignItems: 'center'
  },
  energyTitle:{
    fontWeight: 'bold',
    color: 'skyblue',
    marginRight: 4,
    fontSize: 20
  },
  energyUnit: {
    fontWeight: 'bold',
    color: 'gray',
    fontSize: 18
  },
  energyDescription:{
    color: 'lightgray'
  },
  dividerHorizontal: {
    height: '100%',
    width: 1,
    backgroundColor: 'skyblue'
  },
  dividerVertical: {
    height: 1,
    width: '100%',
    backgroundColor: 'skyblue'
  },
  energyDivider:{
    width: 64,
    marginTop: 4,
    marginBottom: 4
  },
  switchContainer: {
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 48,
    borderColor: 'lightgray',
    margin: 16,
    paddingBottom: 16,
    paddingTop: 16
  }
});
