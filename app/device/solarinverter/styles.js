/* @flow */

 import { StyleSheet } from 'react-native';

 export default StyleSheet.create({
   header: {
     height: 116,
   },
   container: {
     flexDirection: 'column',
     justifyContent: 'center',
   },
   text: {
     backgroundColor: 'rgba(0, 0, 0, 0)',
   },
   titleText: {
     fontSize: 18,
     fontWeight: "500",
     letterSpacing: 0.19,
     textAlign: "center",
     color: "#ffffff",
     paddingTop: 29,
     paddingBottom: 15,
   },
   cardContainer: {
     borderRadius: 16,
     backgroundColor: "#ffffff",
     shadowColor: "rgba(175, 175, 175, 0.5)",
     shadowOffset: {
       width: 0,
       height: 1
     },
     shadowRadius: 3,
     shadowOpacity: 1,
     marginBottom: 11,
     marginLeft: 14,
     marginRight: 14,
   },
   cardContainer2: {
     borderRadius: 16,
     backgroundColor: "#ffffff",
     shadowColor: "rgba(175, 175, 175, 0.5)",
     shadowOffset: {
       width: 0,
       height: 1
     },
     shadowRadius: 3,
     shadowOpacity: 1,

   },
   buttonContainer: {
     width:160,
     height:20,
     borderRadius: 10,
     backgroundColor: "#ffffff",
     shadowColor: "rgba(175, 175, 175, 0.8)",
     shadowOffset: {
       width: 2,
       height: 1
     },
     shadowRadius: 2.5,
     shadowOpacity: 2,
     marginLeft:50,
     marginTop:8
   },
   statusCard: {
     marginTop: 65,
     flex: 1,
     flexDirection: 'row',
     height: 105,
   },
   statusCardInfo: {
     flex: 2,
     flexDirection: 'column',
     justifyContent: 'flex-start',
   },
 });
