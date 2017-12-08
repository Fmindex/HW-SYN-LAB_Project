import React from 'react';
import { translate } from 'react-i18next';
import { FlatList,StyleSheet, Text, View, Button } from 'react-native';

import DeviceRow from '../row';
import type { DeviceRowType } from '../row';
@translate(['device', 'common'], { wait: true })
export default class AllDevice extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: screenProps.t('device:title')
  });


  devices: DeviceRowType[] = [
    {
      name: 'Philips Hue',
      image: 'https://www.wink.com/img/product/philips-hue-single-light-bulb/variants/046677426361/hero_01.png',
      isEnabled: true,
      route:'DevicePhillip'
      //navigation:this.props.navigation.set('Outside'),
      //onPress:={() => this.props.navigation.navigate('Outside')}


    },
    {
      name: 'Door Sensor',
      image: 'https://target.scene7.com/is/image/Target/51513049_Alt02?wid=520&hei=520&fmt=pjpeg',
      isEnabled: false,
      route:'Devicedoorsensor'
    },
    {
      name: 'motionsensor',
      image: 'https://target.scene7.com/is/image/Target/51513049_Alt02?wid=520&hei=520&fmt=pjpeg',
      isEnabled: false,
      route:'Devicemotionsensor'
    },
    {
      name: 'Daikin',
      image: 'https://target.scene7.com/is/image/Target/51513049_Alt02?wid=520&hei=520&fmt=pjpeg',
      isEnabled: false
    },
    {
      name: 'Google Home',
      image: 'https://target.scene7.com/is/image/Target/51513049_Alt02?wid=520&hei=520&fmt=pjpeg',
      isEnabled: false
    },
    {
      name: 'Google Home',
      image: 'https://target.scene7.com/is/image/Target/51513049_Alt02?wid=520&hei=520&fmt=pjpeg',
      isEnabled: false
    },
    {
      name: 'Google Home',
      image: 'https://target.scene7.com/is/image/Target/51513049_Alt02?wid=520&hei=520&fmt=pjpeg',
      isEnabled: false
    },
    {
      name: 'Google Home',
      image: 'https://target.scene7.com/is/image/Target/51513049_Alt02?wid=520&hei=520&fmt=pjpeg',
      isEnabled: false
    }
  ];
   _keyExtractor = (item, index) => index;
    render(): React.Element<any> {
      
    return (
      <FlatList
        keyExtractor={this._keyExtractor}
        data={this.devices}
        renderItem={renderItem => <DeviceRow {...renderItem.item} navigation={this.props.navigation} />}
        
      />
    );
  }
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  separate: {
    marginTop: 50
  }
});