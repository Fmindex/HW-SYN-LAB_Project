/* @flow */

 
 import { StyleSheet } from 'react-native';
 
 export default StyleSheet.create({
   Container: {
     flex:1,
     backgroundColor: 'white',
     flexDirection: 'column'
   },
    blueContainer: {
     flex:2,
     marginTop:5,
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems:'center',
     backgroundColor: 'skyblue'
   },
  
   iconContainer: {
     flex: 1,
     flexDirection: 'row',
     
     justifyContent: 'space-around',
     backgroundColor: 'white'
     
   },
   iconimage: {
     flex: 1,
     alignItems: 'center',
     flexDirection:'column',
     justifyContent: 'center',
     backgroundColor: 'skyblue'
   
   },
   // content: {
 
   //   flex: 1,
   //   flexDirection: 'row',
   //   justifyContent: 'space-around',
   //   backgroundColor: 'skyblue'
   
   //},
 
     switchContainer: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: 'white'
   
   }, 
    whiteContainer: {
     flex: 1,
     //alignItems: 'center',
     justifyContent: 'space-around',
     backgroundColor: 'white',
     paddingBottom:8
   
   },
   firstrowContainer: {
     flex: 1,
     flexDirection: 'row',
     marginTop:14,
     marginRight:12,
     marginLeft:12,
     justifyContent: 'space-between',
     backgroundColor: 'white'
   
   }, 
 
 
   title: {
     color: 'steelblue',
     fontSize: 16,
     marginTop:12,
     marginBottom:8,
     textAlign:'center'
   },
   contentText: {
     color: 'white',
     fontSize: 10,
     marginTop:12,
      //marginBottom:2,
 
     // //backgroundColor: 'skyblue',
     // //textAlign:'center'
   },
  
 
   contentText2: {
     color: 'white',
     marginTop: 30,
     fontSize:16
 
   },
  
 
    divider: {
     height: 1,
     width: '100%',
     backgroundColor: '#ccc'
   }
 }); 