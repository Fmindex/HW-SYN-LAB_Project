/* @flow */

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { Switch, Text, View } from 'react-native';

import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';
import { translate } from 'react-i18next';

// import styles from './styles';

@translate(['device', 'common'], { wait: true })
export default class DeviceRefrigerator extends Component {
  static navigationOptions = ({ screenProps }) => ({
    title: screenProps.t('device:Refrigerator')
  });

  constructor(props) {
    super(props);
    this.state = {
      status: false,
      power: 7,
      visible: true,
    };
    let config = {
      headers: {
        Authorization: 'Basic a3dhcm9kb206dzMzMDAxMzY=',
      }
    };
    axios.get('http://peahivebackend3.azurewebsites.net/api/devices/plugload/', config).then((data) => {
      console.log(data.data.current[0]);
      this.setState({
        ...this.state,
        power: data.data.current[0].power,
        status: data.data.current[0].status == 'ON',
        visible: false,
      });
    }, (error) => {
      console.log('get plugload error');
    });
    this.onSwitchChange = this.onSwitchChange.bind(this);
  }

  onSwitchChange() {
    let config = {
      headers: {
        'Authorization': 'Basic cGVhaGl2ZToyOFNlcDE5NjA=',
      }
    };
    let body = {
      'topic': 'hue01',
      'message': `{\"status\":\"${!this.state.status ? "ON" : "OFF"}\",\"stemp\":\"19\",\"mode\":\"3\", \"device\": \"daikin1\"}`,
    };

    axios.post('http://peahivebackend3.azurewebsites.net/api/v1.0/devicecontrol?data=admin', body, config).then((data) => {
      console.log('post');
      console.log(body.message);
    }, (error) => {
      console.log('post error');
    });

    this.setState({
      ...this.state,
      status: !this.state.status,
    });
  }

  _renderTimeColumn = (title: string, value: string, unit: string) =>
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ paddingBottom: 8, color: 'white' }}>
        {title}
      </Text>
      <View style={{ width: '100%', height: 1, backgroundColor: 'white' }} />
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: 'white', marginTop: 32, fontSize: 32, fontWeight: 'bold' }}>
          {value}
        </Text>
        <Text style={{ color: 'white', marginTop: 48 }}>
          {unit}
        </Text>
      </View>
    </View>;

  _renderTimeRow = (icon: string, rowTitle1: string, rowValue1: string, rowTitle2: string, rowValue2: string) =>
    <View style={{ marginLeft: 16, marginRight: 16, marginTop: 8, marginBottom: 8 }}>
      <View style={{ flexDirection: 'row' }}>
        <Ionicons name={icon} size={40} color="skyblue" style={{ marginRight: 16, width: 48 }} />
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <View style={{ flexDirection: 'row', marginBottom: 8 }}>
            <Text style={{ flex: 1, fontSize: 18, color: 'gray' }}>
              {rowTitle1}:
            </Text>
            <Text style={{ fontSize: 20, color: 'skyblue' }}>
              {rowValue1}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 4 }}>
            <Text style={{ flex: 1, fontSize: 14, color: 'lightgray' }}>
              {rowTitle2}:
            </Text>
            <Text style={{ fontSize: 20, color: 'gray' }}>
              {rowValue2}
            </Text>
          </View>
          <View style={{ width: '100%', height: 1, backgroundColor: 'skyblue' }} />
        </View>
      </View>
    </View>;

  render(): React.Element<any> {
    const { t } = this.props;

    return (
      <View>
        <Spinner visible={this.state.visible} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
        <Text style={{ textAlign: 'center' }}>some device name</Text>
        <View style={{ backgroundColor: 'skyblue', flexDirection: 'row', padding: 16 }}>
          {this._renderTimeColumn(t('device:duration'), '56', 'min')}
          <View style={{ height: '100%', width: 1, backgroundColor: 'white' }} />
          {this._renderTimeColumn(t('device:since'), '12:30', 'pm')}
        </View>
        {this._renderTimeRow('md-stopwatch', 'Today', '4h 30min', 'Avg day', '1h 58min')}
        {this._renderTimeRow('md-cash', 'Estimate monthly', '$ 0.75', 'Today', '$ 0.06')}
        {this._renderTimeRow('md-flash', 'Avg when on', '111w', 'Now', `${this.state.power}w`)}
        <View
          style={{
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 48,
            borderColor: 'lightgray',
            margin: 16,
            paddingBottom: 16,
            paddingTop: 16
          }}
        >
          <Text>{this.state.status ? 'ON' : 'OFF'}</Text>
          <Switch onTintColor="skyblue" value={this.state.status} onValueChange={() => this.onSwitchChange()} />
        </View>
      </View>
    );
  }
}
