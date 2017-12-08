/* @flow */
import { Button, FlatList, Image, Slider, StyleSheet, Switch, Text, View } from 'react-native';
import React, { Component } from 'react';
import { SceneMap, TabBar, TabViewAnimated } from 'react-native-tab-view';

import styles from './styles';
import { translate } from 'react-i18next';

export default class Doorsensor extends Component {
   static navigationOptions = ({ screenProps }) => ({
     title: 'All around home',
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
                 All around home
         </Text>
         <View style={styles.blueContainer}>
             <Image style={styles.modeIcon} source={require('./powerful.png')} />  
              <Text style={styles.contentText2} >
                        Everything is OK
                     </Text>
         </View>
         <View style={styles.whiteContainer}>
                              
             <View style={styles.divider} />
             <View style={styles.iconContainer}>

                 <View style={styles.iconimage}>
           
                     <Image style={{width: 40, height: 40}} source={require('./powerful.png')} />
                     <Text style={styles.contentText} >
                         Alarms (away)
                     </Text>
                 </View>
                <View style={styles.iconimage}>
           
                     <Image style={{width: 40, height: 40}} source={require('./powerful.png')} />
                     <Text style={styles.contentText} >
                         Alarms (stay)
                     </Text>
                 </View>
                  <View style={styles.iconimage}>
           
                     <Image style={{width: 40, height: 40}} source={require('./powerful.png')} />
                     <Text style={styles.contentText} >
                         Dis Alarms
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