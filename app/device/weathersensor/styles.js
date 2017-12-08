/* @flow */

 
 import { StyleSheet } from 'react-native';
 
 export default StyleSheet.create({
   Container: {
     flex:1,
     backgroundColor: 'white',
     flexDirection: 'column'
   },
    blueContainer: {
     flex:1,
     marginTop:5,
     flexDirection: 'row',
     justifyContent: 'center',
     alignItems:'center',
     backgroundColor: 'skyblue'
   },
  
   iconContainer: {
     flex: 1,
     flexDirection: 'row',
     paddingLeft: 30,
     paddingRight:30,
     marginTop:10,
     //justifyContent: 'space-around',
     backgroundColor: 'skyblue'
     
   },
   iconimage: {
     flex: 1,
     alignItems: 'center',
     flexDirection:'column',
     justifyContent: 'center',
     backgroundColor: 'skyblue'
   
   },
   scattered: {
     flex: 1,
     alignItems: 'center',
     flexDirection:'column',
     justifyContent: 'center',
     backgroundColor: 'skyblue'
   
   },
    dayContainer: {
     flex: 1,
     flexDirection: 'row',
     paddingLeft: 30,
     paddingRight:30,
     marginTop:10,
     paddingBottom:10,
     //justifyContent: 'space-around',
     backgroundColor: 'skyblue'
     
   },
 
     switchContainer: {
     flex: 0.6,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: 'white'
   
   }, 
    whiteContainer: {
     flex: 1.8,
     //alignItems: 'center',
     flexDirection:'column',
     justifyContent: 'space-around',
     backgroundColor: 'skyblue',
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
     fontSize: 50,
     marginTop:12,
     marginLeft:20,
 
     // //backgroundColor: 'skyblue',
     // //textAlign:'center'
   },
  
 
   contentText2: {
     color: 'white',
     //marginTop: 30,
     fontSize:20,
     //marginLeft: 30
 
   },
   contentText3: {
     color: 'white',
     marginTop: 10,
     fontSize:10,
     //marginLeft: 30
 
  },
   contentText4: {
     color: 'white',
     //marginTop: 10,
     fontSize:20,
     marginBottom: 20
 
  },
   contentText5: {
     color: 'white',
     //marginTop: 10,
     fontSize:14,
     //marginLeft: 30
 
  },
 
    divider: {
      marginLeft:20,    
     height: 1,
     width: '90%',
     backgroundColor: 'white'
   },
   divider2: {
     marginTop: 16,
     height: 50,
     width: 2,
     backgroundColor: 'whitesmoke'
   }
 }); 
