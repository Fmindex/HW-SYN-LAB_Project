import { AppCard, SceneCard, SettingTab } from '../../common/device-setting';
import { Button, Image, ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
/* @flow */
import React, { Component } from 'react';
import appStyles, { primaryColor, secondaryColor } from '../../common/styles';

import { LinearGradient } from 'expo';
import styles from './styles';
import { translate } from 'react-i18next';

export default class DeviceDoorSensor extends Component {

  static navigationOptions = ({ screenProps }) => ({
    title: screenProps.t('device:doorsensor'),
    headerTitleStyle: { color: 'white', fontSize: 18 },
    headerStyle: {
      position: 'absolute',
      backgroundColor: 'transparent',
      zIndex: 100,
      top: 0,
      left: 0,
      right: 0,
      borderBottomWidth: 0
    },
  });

  constructor(props) {
    super(props);

    this.state = {
      status: 1,
      whatTodo: false,
      DeviceEnabled:this.props.DeviceEnabled
    };



    this.fakeToggleAlert = this.fakeToggleAlert.bind(this);
  }

  fakeToggleAlert() {
    this.setState({
      alert: !this.state.alert
    });
  }

  toggleStatus() {
    this.setState({
      status: !this.state.status
    });
  }

  renderStatusCard() {
    return (
      <View style={[styles.card, {height: 152, justifyContent: 'space-between', flexDirection: 'column'}]}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.statusInfo}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.deviceName}>
                Samsung SmartThings Multipurpose Sensor
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
               <FontAwesome name={'map-marker'} style={{color: 'rgba(236, 60, 77, 0.67)',marginTop:4}} size={20} />
               <Text style={[styles.text, {  fontSize: 14,fontWeight: "500", color: "#b4b4b4",marginTop:8,marginLeft:8}]}>
                Master Bedroom
               </Text>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 5}}>
              <MaterialCommunityIcons name={'access-point'} style={{color: 'rgb(7, 225, 146)',marginTop:0,marginLeft:-5}} size={30} />
              <Text style={styles.connectStatus}>Connected</Text>
            </View>
          </View>
        </View>

        <SettingTab status={ true } onPressPower={ null } onPressSetting={ null } />
      </View>
    );
  }

  renderAlertCard(timeOpen) {
    if(this.state.status==1) {
      return (
        <View style={[styles.card, {flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 289, backgroundColor: 'rgba(247, 102, 73, 0.27)'}]} >
          <Image source={require('./orange.png')} style={{width: 150, height: 150}} />
          <Text style={{marginTop: 2, fontSize: 24, color: 'rgb(74, 74, 74)'}}>OPEN</Text>
          <View style={{flexDirection:'row'}}>
            <FontAwesome name={'map-marker'} style={{color: 'rgba(236, 60, 77, 0.67)',marginTop:18}} size={20} />
            <Text style={{marginTop: 16,marginLeft:7, fontSize: 18, color: 'rgb(74, 74, 74)'}}>Master bedroom</Text>
            </View>
          <Text style={{marginTop: 8, opacity: 0.8, fontSize: 14, color: 'rgb(74, 74, 74)'}}>{timeOpen}</Text>
          <View style={{position:'absolute',alignItems:'flex-end',flexDirection:'column',width:'100%',paddingRight:14}}>
              <Switch
                  value={this.state.status==3}
                  style={{marginTop:230,paddingRight:15}}
                  onValueChange={() => this.setState({ status: 2 })}/>
                  <Text style={{marginTop: 2,marginLeft:8, opacity: 0.8, fontSize: 14,fontWeight:'600', color: 'rgb(175, 175, 175)'}}>On Device</Text>
          </View>
        </View>
      );
    }
    else if(this.state.status==2){
      return (
        <View style={[styles.card, {flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 289, backgroundColor: 'rgba(140, 193, 79, 0.35)'}]} >
          <Image source={require('./green.png')} style={{width: 150, height: 150}} />
          <Text style={{marginTop: 2, fontSize: 24, color: 'rgb(74, 74, 74)'}}>Close</Text>
          <Text style={{marginTop: 16, fontSize: 24, color: 'rgb(74, 74, 74)'}}>Normal Operation</Text>
          <Text style={{marginTop: 8, opacity: 0.8, fontSize: 12, color: 'rgb(74, 74, 74)'}}>Everything OK</Text>

          <View style={{position:'absolute',alignItems:'flex-end',flexDirection:'column',width:'100%',paddingRight:14}}>
              <Switch
                  value={this.state.status==2}
                  style={{marginTop:230,paddingRight:15}}
                  onValueChange={() => this.setState({ status: 1})}/>
                  <Text style={{marginTop: 2,marginLeft:8, opacity: 0.8, fontSize: 14,fontWeight:'600', color: 'rgb(175, 175, 175)'}}>On Device</Text>
          </View>

        </View>
      );
    }
    if(this.state.status==3) {
      return (
        <View style={[styles.card, {flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 289, backgroundColor: 'rgba(175, 175, 175, 0.3)'}]} >
          <Image source={require('./gray.png')} style={{width: 150, height: 150}} />
          <Text style={{marginTop: 2, fontSize: 24, color: 'rgb(74, 74, 74)'}}>CLOSE</Text>
          <View style={{flexDirection:'row'}}>
            <FontAwesome name={'map-marker'} style={{color: 'rgba(236, 60, 77, 0.67)',marginTop:18}} size={20} />
            <Text style={{marginTop: 16,marginLeft:7, fontSize: 18, color: 'rgb(74, 74, 74)'}}>Master bedroom</Text>
            </View>
          <Text style={{marginTop: 8, opacity: 0.8, fontSize: 14, color: 'rgb(74, 74, 74)'}}>Everything's OK</Text>
          <View style={{position:'absolute',alignItems:'flex-end',flexDirection:'column',width:'100%',paddingRight:14}}>
              <Switch
                  value={this.state.status==3}
                  style={{marginTop:230,paddingRight:15}}
                  onValueChange={() => this.setState({ status:2 })}/>
                  <Text style={{marginTop: 2,marginLeft:8, opacity: 0.8, fontSize: 14,fontWeight:'600', color: 'rgb(175, 175, 175)'}}>On Device</Text>
          </View>
        </View>
      );
    }
  }





  render(): React.Element<any> {

    return (
      <View style={styles.container}>
        <LinearGradient start={[0, 1]} end={[1, 1]} colors={[secondaryColor, primaryColor]} style={styles.header} />
        { this.state.whatTodo && this.renderWhatTodo() }
        { !this.state.whatTodo &&
          <ScrollView style={styles.content}>
            {this.renderStatusCard()}
            {this.renderAlertCard('at 12:02 am on Sep 15,2017')}
          </ScrollView>
        }
      </View>
    );
  }
}
