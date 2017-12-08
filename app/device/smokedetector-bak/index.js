import { FlatList,StyleSheet, Text, View, Button ,Image,Switch,Slider} from 'react-native';
import React, { Component } from 'react';
import { SceneMap, TabBar, TabViewAnimated } from 'react-native-tab-view';

import styles from './styles';

import { translate } from 'react-i18next';

@translate(['device', 'common'], { wait: true })


export default class Devicewaterleaksensor extends Component {
  static navigationOptions = ({ screenProps }) => ({
    title: 'Smoke Detectors & Alarms',
    headerRight: <Button title="Edit" onPress={()=>{}}/>,

  
  });
   state = {
    isEnabled: this.props.isEnabled,
    isEnabled2: this.props.isEnabled2,
    isEnabled3: this.props.isEnabled3,
    isEnabled4: this.props.isEnabled4,
    isEnabled5: this.props.isEnabled5,

  }

  _renderTimeColumn = (title: string,emergency:  string, time: string) =>
  <View style={styles.AlertContainer}>
    <View style={styles.rowContainer}>
      <View style={styles.columnContainer}>
        <Text style={styles.contentText}>
          Emergency: {emergency}
        
         </Text>
         <Text style={styles.contentText2}>
           {title}
         </Text>
      </View>

     <View style={{ flex: 1, padding: 6,flexDirection : 'row',justifyContent: 'flex-end' ,backgroundColor:'firebrick',marginTop :0,marginLeft :80}}>
        <Text style={{ color: 'grey', fontSize: 14, marginTop:12,paddingRight:10}}>
          {time}
        </Text>
      </View>
    </View>
    <View style={{ width: '100%', height: 1, backgroundColor: 'white',marginTop :35 }} />
    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', marginLeft:20,paddingBottom:10}}>
          See what to do
      </Text>
        
    
   
    
  </View>;




  render(): React.Element<any> {
    const { t } = this.props;

    return (
     <View style={styles.Container}>

        
      <Text style={styles.title} numberOfLines={1}>
                Messages
        </Text>
           
        
        
      <View>
        {this._renderTimeColumn('living room', 'smoke', '8h')}
     
      
      </View>
    <View style={styles.Alert2Container}>
      <View style={styles.row2Container}>
        <View style={styles.column2Container}>
          <Text style={{marginLeft:12,color: 'black',fontSize: 20,marginTop:12,}}>
            Smoke Detectors
            & Alarms
        
          </Text>
          <Text style={{marginLeft:12,color: 'grey',fontSize: 16,marginTop:12,}}>
            Bed Room
          </Text>
        </View>

      <View style={{ flex: 1, padding: 6,flexDirection : 'row',justifyContent: 'flex-end' ,backgroundColor:'white',marginTop :0,marginLeft :80}}>
          <Text style={{ color: 'grey', fontSize: 14, paddingRight:10,marginTop:12}}>
            8h
          </Text>
      </View>
    </View>

  <View style={styles.divider} />  
  </View>
      <View style={styles.Alert2Container}>
      <View style={styles.row2Container}>
        <View style={styles.column2Container}>
          <Text style={{marginLeft:12,color: 'black',fontSize: 20,marginTop:12,}}>
           Speakers
        
          </Text>
          <Text style={{marginLeft:12,color: 'grey',fontSize: 16,marginTop:12,}}>
            Working Room
          </Text>
        </View>

      <View style={{ flex: 1, padding: 6,flexDirection : 'row',justifyContent: 'flex-end' ,backgroundColor:'white',marginTop :0,marginLeft :80}}>
          <Text style={{ color: 'grey', fontSize: 14, paddingRight:10,marginTop:12}}>
            16h
          </Text>
      </View>
    </View>

  <View style={styles.divider} />      
  </View>     
  </View>   
    );
  }
}