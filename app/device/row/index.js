/* @flow */

import {  AsyncStorage, Image, Switch, Text, TouchableHighlight, View } from 'react-native';
import React, { Component } from 'react';
import axios from 'axios';
import styles from './styles';

export type DeviceRowType = {
  name: string,
  image: string,
  isEnabled: boolean
};

const createNavigateRoute = (deviceID) => {
    let keyList = {
        '1TH' : 'DeviceAir',
        '2DB' : 'DevicePhilips',
        '2HUE' : 'DevicePhilips',
        '2SDB' : 'DevicePhilips',
        '2WL' : 'DevicePhilips',
        '2WSL' : 'DevicePhilips',
        '3WSP' : 'DeviceSmartPlug',
        '3MOD' : 'DeviceSmartPlug',
        '3WP' : 'DeviceSmartPlug',
        '4INV' : 'DeviceSolarInverter',
        '5SMP' : 'DevicePowerMeter',
        '6SAM' : 'DeviceCameraImagePicker',
        '7FAN' : 'DeviceFan',
        '8FIB' : 'DeviceMultiSensor',
        '9REF' : 'DeviceSmartPlug',
        '10SON' : 'DeviceSpeaker',
        '11LGT' : 'DeviceSmartPlug',
        '11LG1' : 'DeviceSmartPlug',
        '11LG2' : 'DeviceSmartPlug',
        '12NET' : 'DeviceWeathersensorNew',
        '13ECH' : 'DeviceAmazonEcho',
        '14HGW' : 'DeviceSmartPlug',
        '15FIT' : 'DeviceFitbit',
        '16SCH' : 'EVCharger',
        '1DAIK' : 'DeviceAir',
        '1SAIJ' : 'DeviceAir',
        '17WLS' : 'Devicewaterleaksensor',
        '18DOR' : 'DeviceDoorsensor',
        '19SMO': 'DeviceSmokeDetector',
        '1SAJ1' : 'DeviceAir',
        '1SAJ2' : 'DeviceAir',
        '1SAJ3' : 'DeviceAir',
        '3WSP1' : 'DeviceSmartPlug',
        '3WSP2' : 'DeviceSmartPlug',
        '2HUEH' : 'DevicePhilips',
        '2HUEK' : 'DevicePhilips',
        '2HUEL' : 'DevicePhilips',
    };
    // console.log(deviceID);
    return keyList[deviceID];
};

export default class DeviceRow extends Component {
  props: DeviceRowType;
  state = {
    isEnabled: this.props.status == 'ON'
  };

  constructor(props) {
    super(props);
    this.state = {
      claimcode: '',
      mobile_backend_url: '',
      authorization: '',
      weatherunderground_url: ''
    };
    this.onSwitchChange = this.onSwitchChange.bind(this);
    this.getClaimcode();
    this.getMobileBackend.bind(this);
    this.getMobileBackend();
  }

  getClaimcode = async () => {
    try {
      const value = await AsyncStorage.getItem('save_claimcode');
      if (value) {
        this.setState({
          ...this.state,
          claimcode: JSON.parse(value).claimcode,
        });
        console.log('got save_claimcode '+ JSON.parse(value).claimcode);
      } else {
        console.log('there is no claimcode saved')
      }
    } catch (error) {
      console.log(error);
    }
  };

  getMobileBackend = async () => {
    try {
      const value1 = await AsyncStorage.getItem('mobile_backend_url');
      if (value1) {
        console.log('got mobile_backend_url '+ JSON.parse(value1).mobile_backend_url);
        this.setState({ mobile_backend_url: JSON.parse(value1).mobile_backend_url});
      } else {
        console.log('there is no mobile_backend_url')
      }
      const value3 = await AsyncStorage.getItem('weatherunderground_url');
      if (value3) {
        console.log('got weatherunderground_url '+ JSON.parse(value3).weatherunderground_url);
        this.setState({ weatherunderground_url: JSON.parse(value3).weatherunderground_url});
      } else {
        console.log('there is no weatherunderground_url')
      }
      const value2 = await AsyncStorage.getItem('authorization');
      if (value2) {
        console.log('got authorization '+ JSON.parse(value2).authorization);
        this.setState({ authorization: JSON.parse(value2).authorization});
      } else {
        console.log('there is no authorization')
      }
    } catch (error) {
      console.log(error);
    }
  };

  onSwitchChange(DeviceID) {
    let authorization = this.state.authorization;
    let config = {
      headers: {
        'Authorization': authorization,
      }
    };
    let body = {
      "topic": this.state.claimcode,
      "message": "",
    };
    if (DeviceID === '1DAIK') {
      body.message = {'status': !this.state.isEnabled ? 'ON' : 'OFF', 'stemp': 20 , 'mode': 3, 'device': DeviceID};
    } else if(DeviceID === '2HUE') {
      body.message = {'status': !this.state.isEnabled ? 'ON' : 'OFF', 'brightness': 100, 'color':[255,255,255], 'device': DeviceID};
    } else {
      body.message = {'status': !this.state.isEnabled ? 'ON' : 'OFF', 'device': DeviceID};
    }
    console.log('sent message with topic: '+ body.topic +' message: ' + body.message);
    console.log(body.message);

    this.setState({ isEnabled: !this.state.isEnabled });
    let mobile_backend_url = this.state.mobile_backend_url + '/api/v1.0/devicecontrol';
    axios.post(mobile_backend_url, body, config).then((data) => {
      console.log('posted to ' + mobile_backend_url + 'got return '+ data.status +' status');
    }, (error) => {
      console.log('post error ' + error);
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
        isEnabled: this.props.status == 'ON'
    });
  }

  render(): React.Element<any> {
    console.log('displaying device property from this.prob');
    console.log(this.props);
    return (
      <TouchableHighlight onPress={() => this.props.navigation.navigate(createNavigateRoute(this.props.device_model_id))}>
      <View>
        <View style={styles.container}>
          <Image
            source={{
              uri: this.props.image === null ? 'https://cdn.pixabay.com/photo/2017/04/13/17/48/floor-2228277_640.jpg' : this.props.image
            }}
            style={styles.image}
          />
          <Text style={styles.title}>
            {this.props.device_name}
          </Text>
          {
            this.props.is_enable !== null && this.props.is_enable &&
            <Switch
              value={this.state.isEnabled}
              onValueChange={() => this.onSwitchChange(this.props.device_model_id)}
            />
          }
        </View>
        <View style={styles.divider} />
      </View>
    </TouchableHighlight>
    );
  }
}
