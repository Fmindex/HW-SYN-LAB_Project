/* @flow */

import { Button, Image, ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react';
import appStyles, { primaryColor, secondaryColor } from '../../common/styles';
import { SettingTab, AppCard, SceneCard } from '../../common/device-setting';

import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo';
import Spinner from 'react-native-loading-spinner-overlay';
import axios from 'axios';
import styles from './styles';
import { translate } from 'react-i18next';

@translate(['device', 'common'], { wait: true })

export default class DeviceMultiSensor extends Component {

  static navigationOptions = ({ screenProps }) => ({
    title: screenProps.t('device:multisensor'),
    headerTitleStyle: { color: 'white', fontSize: 18 },
    headerStyle: {
      position: 'absolute',
      backgroundColor: 'transparent',
      zIndex: 100,
      top: 0,
      left: 0,
      right: 0,
      borderBottomWidth: 0,
    },
  });

  constructor(props) {
    super(props);

    this.state = {
      temp: '--',
      alarm: false,
      lux: '--',
      spinnerVisible: true,
    };
    
    let config = {
      headers: {
        Authorization: 'Basic a3dhcm9kb206dzMzMDAxMzY='
      }
    };
 
    axios.get('http://peahivebackend3.azurewebsites.net/api/devices/multisensor/', config).then((data) => {
      this.setState({
        ...this.state,
        lux: data.data.current[0].illuminance,
        alarm: (data.data.current[0].status === 'ON'),
        temp: data.data.current[0].temperature,
        spinnerVisible: false,
      });
    }, (error) => {
      console.log('Error');
    });

  }

  pinStyle(temp) {
    R = 105;

    let marginLeft = -Math.cos(Math.PI*temp/60.0) * R;
    let marginTop = -Math.sin(Math.PI*temp/60.0) * R;

    return {
      marginLeft: marginLeft-3, 
      marginTop: marginTop+14
    };
  }

  renderMotionCard() {
    return (
      <View style={[styles.card, {height: 175, flexDirection: 'column', flex: 4, justifyContent: 'flex-start', alignItems: 'center'}]}>
        <Text style={[styles.text, styles.titleText, {marginTop: 10}]}>Motion sensor</Text>
        <View style={{flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center', height: 130}}>
          <Image style={{height: 125, width: 125}} source={this.state.alarm ? require('./motion-on.png') : require('./motion-off.png')} />
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <Switch value={this.state.alarm} onValueChange={(value) => this.setState({alarm: value})}/>
            <Text style={[styles.text, styles.titleText, {marginTop: 5}]}>Alarm</Text>
          </View>
        </View>
      </View>
    );
  }

  renderLightCard() {
    return (
      <View style={[styles.card, {height: 175, flexDirection: 'column', flex: 3, marginLeft: 11, justifyContent: 'flex-start', alignItems: 'center'}]}>
        <Text style={[styles.text, styles.titleText, {marginTop: 10, marginBottom: 20}]}>Light sensor</Text>
        <Image style={{height: 95, width: 95}} source={require('./light.png')} />
        <View style={{flexDirection: 'column', marginTop: -65, alignItems: 'center'}}>
          <Text style={[styles.text, {fontSize: 20, color: '#ffffff'}]}>
            {this.state.lux}
          </Text>
          <Text style={[styles.text, {fontSize: 12, color: '#ffffff'}]}>lux</Text>
        </View>
      </View>
    );
  }

  renderTempCard() {
    return (
      <View style={[styles.card, {height: 140, flexDirection: 'row'}]}>
        <View style={styles.tempContainer}>
          <Image style={{width: 140, height: 115}} source={require('./temp.png')} />
          <View style={[styles.center, {width: 140, height: 115, position: 'absolute'}]}>
            <Text style={[styles.text, styles.titleText, {paddingTop: 30}]}>
              Temp sensor
            </Text>
          </View>
          <View style={[styles.center, {width: 140, height: 115, position: 'absolute', paddingTop: 15}]}>
            <Image style={[{width: 11, height: 11}, this.pinStyle(this.state.temp)]} source={require('./pin.png')} />
          </View>
        </View>
        <View style={styles.tempContainer}>
          <View style={{flexDirection: 'row'}}>
            <Image style={{width: 10, height: 30}} source={require('./meter.png')}/>
            <Image style={{width: 25, height: 28}} source={require('./man.png')} />
          </View>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <Text style={[styles.text, styles.tempText, {marginTop: 10}]}>
              {this.state.temp}°C
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image style={{width: 8, height: 8}} source={require('./pin.png')} />
              <Text style={styles.locationName}>Room Temp</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
  
  renderStatusCard() {
    return (
      <View style={[styles.card, {height: 136, flexDirection: 'column', justifyContent: 'space-between'}]}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.statusInfo}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.deviceName}>FIBARO multi sensor</Text>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 5}}>
              <FontAwesome name={'map-marker'} style={{color: 'rgba(236, 60, 77, 0.67)'}} size={20} />
              <Text style={styles.locationName}>Living room</Text>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 5}}>
              <FontAwesome name={'signal'} style={{color: '#07e192'}} size={20} />
              <Text style={styles.connectStatus}>Connected</Text>
            </View>
          </View>

          <View style={styles.deviceImage}>
            <Image source={require('./device.png')} style={styles.deviceIcon} />
          </View>
        </View>

        <SettingTab status={ true } onPressPower={ null } onPressSetting={ null } />
      </View>
    );
  }

  render(): React.Element<any> {

    return (
      <View style={styles.container}>
      <Spinner visible={this.state.spinnerVisible} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
        <LinearGradient start={[0, 1]} end={[1, 1]} colors={[secondaryColor, primaryColor]} style={styles.header} />
        <ScrollView style={styles.content}>
          {this.renderStatusCard()}
          {this.renderTempCard()}
          <View style={{width: '100%', flexDirection: 'row'}}>
            {this.renderMotionCard()}
            {this.renderLightCard()}
          </View>

          <View><AppCard /></View>
          
          <View style={{ marginTop: 12, marginBottom: 12 }} ><SceneCard /></View>
        </ScrollView>
      </View>
    );
  }
}
