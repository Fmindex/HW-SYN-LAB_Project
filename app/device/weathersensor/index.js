/* @flow */
import { FlatList,StyleSheet, Text, View, Button ,Image,Switch,Slider} from 'react-native';


 import React, { Component } from 'react';
 import { SceneMap, TabBar, TabViewAnimated } from 'react-native-tab-view';
 
 import styles from './styles';
 
 import { translate } from 'react-i18next';
 
 @translate(['device', 'common'], { wait: true })
 
 export default class Weathersensor extends Component {
   static navigationOptions = ({ screenProps }) => ({
     title: 'Weather Sensor',
     //headerRight: <Button title="Edit" onPress={()=>{}}/>,
   
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
                 All around home
         </Text>
         <View style={styles.blueContainer}>
             <Image style={{width: 140, height: 140,marginTop:10}} source={require('../../home/outside/stromy.png')} />  
             
              <Text style={styles.contentText} >
                        16 °
                     </Text>
         </View>
         <View style={styles.whiteContainer}>
                              
            
             <View style={styles.iconContainer}>

                 <View style={styles.iconimage}>
           
                     
                     <Text style={styles.contentText2} >
                         6°
                     </Text>
                     <Text style={styles.contentText3} >
                         min
                     </Text>
                 </View>
                <View style={styles.divider2} />
                 <View style={styles.iconimage}>
           
                     
                     <Text style={styles.contentText2} >
                         22°
                     </Text>
                     <Text style={styles.contentText3} >
                         max
                     </Text>
                 </View>
                 <View style={styles.divider2} />
                 <View style={styles.iconimage}>
           
                     
                     <Text style={styles.contentText2} >
                         55°
                     </Text>
                     <Text style={styles.contentText3} >
                         humidity
                     </Text>
                 </View>
                 <View style={styles.divider2} />
                 <View style={styles.iconimage}>
           
                     
                     <Text style={styles.contentText2} >
                         21°
                     </Text>
                     <Text style={styles.contentText3} >
                         Feels like
                     </Text>
                 </View>
                 
                
             </View>
             <View style={styles.scattered}>
           
                     <Text style={styles.contentText4} >
                         Scattered Thundershowers
                     </Text>
                      <View style={styles.divider} />  
            </View>
              
            <View style={styles.dayContainer}>

                 <View style={styles.iconimage}>
                     <Text style={styles.contentText5} >
                         Mon
                     </Text>
                     <Image style={{width: 40, height: 40,marginTop:10,marginBottom:10}} source={require('../../home/outside/cloudy.png')} />
                     <Text style={styles.contentText5} >
                         22/16
                     </Text>
                 </View>
                 <View style={styles.iconimage}>
                     <Text style={styles.contentText5} >
                         Tue
                     </Text>
                     <Image style={{width: 40, height: 40,marginTop:10,marginBottom:10}} source={require('../../home/outside/stromy.png')} />
                     <Text style={styles.contentText5} >
                         20/13
                     </Text>
                 </View>
                 <View style={styles.iconimage}>
                     <Text style={styles.contentText5} >
                         Wed
                     </Text>
                     <Image style={{width: 40, height: 40,marginTop:10,marginBottom:10}} source={require('../../home/outside/rainy.png')} />
                     <Text style={styles.contentText5} >
                         18/11
                     </Text>
                 </View>
                 <View style={styles.iconimage}>
                     <Text style={styles.contentText5} >
                         Thu
                     </Text>
                     <Image style={{width: 40, height: 40,marginTop:10,marginBottom:10}} source={require('../../home/outside/cloudy.png')} />
                     <Text style={styles.contentText5} >
                         22/16
                     </Text>
                 </View>
                 <View style={styles.iconimage}>
                     <Text style={styles.contentText5} >
                         Fri
                     </Text>
                     <Image style={{width: 40, height: 40,marginTop:10,marginBottom:10}} source={require('../../home/outside/sunshine.png')} />
                     <Text style={styles.contentText5} >
                         25/14
                     </Text>
                 </View>
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
 
