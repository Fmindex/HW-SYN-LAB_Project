/* @flow */

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  Container: {
    flex:1,

    backgroundColor: 'whitesmoke',
    flexDirection: 'column',
  },
   
  
  rowContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'firebrick'
  
  },   
  row2Container: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  
  }, 
  columnContainer: {
    height:45,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'firebrick'
  
  }, 
  column2Container: {
    height:45,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  
  }, 
  AlertContainer: {
    height:130,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'firebrick'
  
  }, 
  Alert2Container: {
    height:100,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  
  }, 


  title: {
    color: 'steelblue',
    fontSize: 16,
    marginTop:8,
    marginBottom:8,
    textAlign:'center'
  },
  contentText: {

    marginLeft:12,
    color: 'white',
    fontSize: 20,
    marginTop:12,
     
  },
   contentText2: {

    marginLeft:12,
    color: 'white',
    fontSize: 16,
    marginTop:12,
     
  },

   divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#ccc'
  }
});