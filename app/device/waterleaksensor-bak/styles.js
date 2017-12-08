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
    color: 'black',
    fontSize: 16,
    marginTop:12,
     
  },
 

   divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#ccc'
  }
});