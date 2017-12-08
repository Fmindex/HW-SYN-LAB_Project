import { FlatList,StyleSheet, Text, View, Button ,Image,Switch,Slider} from 'react-native';
import React, { Component } from 'react';
import { SceneMap, TabBar, TabViewAnimated } from 'react-native-tab-view';

import styles from './styles';

import { translate } from 'react-i18next';

@translate(['device', 'common'], { wait: true })


export default class Devicewaterleaksensor extends Component {
  static navigationOptions = ({ screenProps }) => ({
    title: 'Water leak Sensor',
    headerRight: <Button title="Done" onPress={()=>{}}/>,
  
  });
   state = {
    isEnabled: this.props.isEnabled,
    isEnabled2: this.props.isEnabled2,
    isEnabled3: this.props.isEnabled3,
    isEnabled4: this.props.isEnabled4,
    isEnabled5: this.props.isEnabled5,

  }


  render(): React.Element<any> {
    const { t } = this.props;

    return (
     <View style={styles.Container}>

        
      <Text style={styles.title} numberOfLines={1}>
                Bathroom
        </Text>
           
        
        
            <View style ={styles.rowContainer}>
                <Text style={styles.contentText} >
                    User every Moisture sensor
                </Text>
                <Switch 
                      style = {{marginTop:8}}

                      value={this.state.isEnabled}
                      onTintColor='skyblue'
                      onValueChange={() => this.setState({ isEnabled: !this.state.isEnabled })}/>
        

            </View>

            <View style={styles.divider} />
            <View style ={styles.rowContainer}>
                <Text style={styles.contentText} >
                    Text push Notifications
                </Text>
                <Switch 
                      style = {{marginTop:8}}
                      value={this.state.isEnabled2}
                      onTintColor='skyblue'
                      onValueChange={() => this.setState({ isEnabled2: !this.state.isEnabled2 })}/>
        

            </View>
            <View style={styles.divider} />
            <View style ={styles.rowContainer}>
                <Text style={styles.contentText} >
                    Audio Notifycations
                </Text>
                <Switch 
                      style = {{marginTop:8}}
                      value={this.state.isEnabled3}
                      onTintColor='skyblue'
                      onValueChange={() => this.setState({ isEnabled3: !this.state.isEnabled3 })}/>
        

            </View>
            <View style={styles.divider} />
            <View style ={styles.rowContainer}>
                <Text style={styles.contentText} >
                    Alert with Sirens
                </Text>
                <Switch 
                      style = {{marginTop:8}}
                      value={this.state.isEnabled4}
                      onTintColor='skyblue'
                      onValueChange={() => this.setState({ isEnabled4: !this.state.isEnabled4 })}/>
        

            </View>
            <View style={styles.divider} />
            <View style ={styles.rowContainer}>
                <Text style={styles.contentText} >
                    Alert with Lights
                </Text>
                <Switch 
                      style = {{marginTop:8}}
                      value={this.state.isEnabled5}
                      onTintColor='skyblue'
                      onValueChange={() => this.setState({ isEnabled5: !this.state.isEnabled5 })}/>
        

            </View>
            <View style={styles.divider} />

        
      </View>   
    );
  }
}