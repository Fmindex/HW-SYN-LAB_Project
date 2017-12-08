import { FlatList,StyleSheet, Text, View, Button ,Image,Switch,Slider} from 'react-native';


 import React, { Component } from 'react';
 import { SceneMap, TabBar, TabViewAnimated } from 'react-native-tab-view';
 
 import styles from './styles';
 
 import { translate } from 'react-i18next';
 
 @translate(['device', 'common'], { wait: true })
 
 export default class Motionsensor extends Component {
   static navigationOptions = ({ screenProps }) => ({
     title: 'Motion Sensor',
     headerRight: <Button title="Edit" onPress={()=>{}}/>,
   
   });
    state = {
     isEnabled: this.props.isEnabled,
     isEnabled2: this.props.isEnabled2
   }
 
 
   render(): React.Element<any> {
     const { t } = this.props;
 
     return (
      <View style={styles.Container}>
         <Text style={styles.title} numberOfLines={1}>
                 Indoors
         </Text>
         <View style={styles.blueContainer}>
             <View style={styles.imageContainer}>
           
               <Image style={styles.modeIcon} source={require('../../home/inside/powerful.png')} />           
             </View>                   
             <View style={styles.divider} />
             <View style={styles.iconContainer}>

                 <View style={styles.iconimage}>
           
                     <Image style={{width: 40, height: 40}} source={require('../../home/inside/powerful.png')} />
                     <Text style={styles.contentText} >
                         TEMP
                     </Text>
                 </View>
                <View style={styles.iconimage}>
           
                     <Image style={{width: 40, height: 40}} source={require('../../home/inside/powerful.png')} />
                     <Text style={styles.contentText} >
                         LUX
                     </Text>
                 </View>
                  <View style={styles.iconimage}>
           
                     <Image style={{width: 40, height: 40}} source={require('../../home/inside/powerful.png')} />
                     <Text style={styles.contentText} >
                         MOVING
                     </Text>
                 </View>
                  <View style={styles.iconimage}>
           
                     <Image style={{width: 40, height: 40}} source={require('../../home/inside/powerful.png')} />
                     <Text style={styles.contentText} >
                         SYNCED
                     </Text>
                 </View>
                  <View style={styles.iconimage}>
           
                     <Image style={{width: 40, height: 40}} source={require('../../home/inside/powerful.png')} />
                     <Text style={styles.contentText} >
                         BATTERY
                     </Text>
                 </View>
 
                     
                     
            
                 </View>   
            
         </View>
         <View style={styles.whiteContainer}>
             <View style ={styles.firstrowContainer}>
                 <Text style={styles.contentText2} >
                     SmartApps
                 </Text>
                 <Switch 
                       value={this.state.isEnabled}
                       onTintColor='skyblue'
                       onValueChange={() => this.setState({ isEnabled: !this.state.isEnabled })}/>
         
 
             </View>
                 <View style ={styles.firstrowContainer}>
                     <Text style={styles.contentText2} >
                         Preferances
                     </Text>
                     <Text style={styles.contentText3} >
                         >
                     </Text>
 
                 </View>
                 <View style ={styles.firstrowContainer}>
                      <Text style={styles.contentText2} >
                          Activity
                       </Text>
                       <Text style={styles.contentText3} >
                         >
                     </Text>
 
                 </View>
             </View>
 
             <View style={styles.switchContainer}>
                 <Switch 
                     value={this.state.isEnabled2}
                     onTintColor='skyblue'
                     onValueChange={() => this.setState({ isEnabled2: !this.state.isEnabled2 })}/>
             </View>   
       </View>   
     );
   }
 } 

