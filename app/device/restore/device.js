

//import { Button, Image, Text, View } from 'react-native';
import { FlatList,StyleSheet, Text, View, Button ,Image} from 'react-native';
import React, { Component } from 'react';
import { SceneMap, TabBar, TabViewAnimated } from 'react-native-tab-view';

import SceneEditDevice from '../scene/edit/device';
import SceneEditRoom from '../scene/edit/room';

import styles from './styles';
import type { SceneType } from '../scene/index';


import { translate } from 'react-i18next';


import AllDevice from './alldevice';
import type { DeviceRowType } from './alldevice';
@translate(['device', 'common'], { wait: true })

export default class Device extends Component {
  static navigationOptions = ({ navigation,screenProps }) => ({
    title: 'Devices',
    headerRight: <Button title="+" onPress={()=>{}}/>,
  
  });

  state = {
    index: 0,
    routes: [{ key: '1', title: 'All Devices' }, { key: '2', title: 'Sort by Room' }]
  };

  //scene: SceneType = this.props.navigation.state.params;

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => {
    return (   
    <View>
        
    
        <TabBar
          {...props}
          style={styles.tabbar}
          indicatorStyle={styles.indicator}
          labelStyle={styles.labelText} />
      </View>
    );
  };

  _renderScene = SceneMap({
    '1': () => <AllDevice navigation={this.props.navigation} />,
    '2': SceneEditDevice
  });

  render(): React.Element<any> {
    //console.log(this.props)
    //console.log('asb')
    return (

      <TabViewAnimated
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}
