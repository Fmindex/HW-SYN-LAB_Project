import React, { Component } from 'react';
import { Image, Button, View, Text, ScrollView, TouchableOpacity, Switch } from 'react-native';
import appStyles, { primaryColor, secondaryColor } from '../../common/styles';
import { SettingTab, AppCard, SceneCard } from '../../common/device-setting';
import { LinearGradient } from 'expo';
import styles from './styles';
import { FontAwesome } from '@expo/vector-icons';

import { translate } from 'react-i18next';
@translate(['device', 'common'], { wait: true })

export default class DeviceSmokeDetector extends Component {

  static navigationOptions = ({ screenProps }) => ({
    title: screenProps.t('device:smoke_sensor'),
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
      alert: true,
      whatTodo: false,
    };

    this.toggleWhatTodo = this.toggleWhatTodo.bind(this);
    this.fakeToggleAlert = this.fakeToggleAlert.bind(this);
  }

  fakeToggleAlert() {
    this.setState({
      alert: !this.state.alert
    });
  }

  toggleWhatTodo() {
    this.setState({
      whatTodo: !this.state.whatTodo
    });
  }

  renderStatusCard() {
    return (
      <View style={[styles.card, {height: 152, justifyContent: 'space-between', flexDirection: 'column'}]}>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          
          <View style={styles.statusInfo}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.deviceName}>First Alert</Text>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 5}}>
              { this.state.alert && <Text style={styles.caution}>Caution</Text> }
              { !this.state.alert && <Text style={styles.ok}>Everything’s OK</Text> }
            </View>
            <View style={{flexDirection: 'row', paddingTop: 5}}>
              <FontAwesome name={'signal'} style={{color: '#07e192'}} size={20} />
              <Text style={styles.connectStatus}>Connected</Text>
            </View>
          </View>

          <View style={{paddingRight: 40}} >
            <Image source={require('./device.png')} style={{height: 80, width: 80}} />
          </View>
        </View>

        <SettingTab status={ true } onPressPower={ null } onPressSetting={ null } />
      </View>
    );
  }

  renderAlertCard() {
    if(this.state.alert) {
      return (
        <View style={[styles.card, {flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 257, backgroundColor: 'rgba(247, 102, 73, 0.27)'}]} >
          <Image source={require('./red.png')} style={{width: 132, height: 132}} />
          <Text style={{marginTop: 18, fontSize: 24, color: 'rgb(74, 74, 74)'}}>Smoke</Text>
          <Text style={{marginTop: 8, opacity: 0.8, fontSize: 12, color: 'rgb(74, 74, 74)'}}>Check what’s happening</Text>
        </View>
      );
    } 
    else {
      return (
        <View style={[styles.card, {flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 257, backgroundColor: 'rgba(140, 193, 79, 0.35)'}]} >
          <Image source={require('./green.png')} style={{width: 132, height: 132}} />
          <Text style={{marginTop: 18, fontSize: 24, color: 'rgb(74, 74, 74)'}}>Normal Operation</Text>
          <Text style={{marginTop: 8, opacity: 0.8, fontSize: 12, color: 'rgb(74, 74, 74)'}}>Everything OK</Text>
        </View>
      );
    }
  }

  renderControlCard() {
    return (
      <View style={[styles.card, {height: 170, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}]}>
        <View style={{flexDirection: 'row', marginBottom: 25}}>
          { this.state.alert && <FontAwesome name={'map-marker'} style={{color: '#db4453'}} size={20} /> }
          { !this.state.alert && <FontAwesome name={'circle'} style={{color: '#36bc9b', marginTop: 5}} size={12} /> }
          <Text style={{marginLeft: 7, fontSize: 18, color: 'rgb(74, 74, 74)'}}>
            { this.state.alert ? 'Master bedroom' : 'Nothing to do' }
          </Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          
          <View style={{flexDirection: 'column', alignItems: 'center', width: 120}}>
            <TouchableOpacity onPress={() => {this.toggleWhatTodo()}}>
              { this.state.alert && <Image source={require('./info-enable.png')} style={{width: 45, height: 45}} /> }
              { !this.state.alert && <Image source={require('./info-disable.png')} style={{width: 45, height: 45}} /> }
            </TouchableOpacity>
            <Text style={{marginTop: 8, fontSize: 18, color: 'rgb(175, 175, 175)'}}>WHAT TO DO</Text>
          </View>

          <View style={{flexDirection: 'column', alignItems: 'center', width: 120}}>
            <TouchableOpacity onPress={() => {this.fakeToggleAlert()}}>
              { this.state.alert && <Image source={require('./silence-enable.png')} style={{width: 45, height: 45}} /> }
              { !this.state.alert && <Image source={require('./silence-disable.png')} style={{width: 45, height: 45}} /> }
            </TouchableOpacity>
            <Text style={{marginTop: 8, fontSize: 18, color: 'rgb(175, 175, 175)'}}>SILENT</Text>
          </View>

        </View>
      </View>
    );
  }

  renderWhatTodo() {
    return (
      <View style={styles.whatTodoContent}>
        <LinearGradient start={[0, 1]} end={[0, 0]} colors={['rgb(106, 114, 125)', 'rgb(229, 232, 235)']} style={styles.whatTodoBackground} />
        <View style={styles.whatTodoContainer}>
          <TouchableOpacity style={{marginTop: 100}}>
            <Image source={require('./alarm.png')} style={{width: 200, height: 200}} />
          </TouchableOpacity>
          <Text style={[styles.text, {fontSize: 18, color: '#ffffff', marginTop: 40}]}>Press and hold to silence the alarm</Text>
          <Text style={[styles.text, {fontSize: 14, color: '#ffffff', marginTop: 40}]}>Before you silence the alarm.</Text>
          <Text style={[styles.text, {fontSize: 14, color: '#ffffff'}]}>Check what’s happening: Master bedroom</Text>
          <View style={{backgroundColor: '#ffffff', width: 260, height: 1, marginTop: 45}} />
          <TouchableOpacity style={{marginTop: 20}} onPress={() => {this.toggleWhatTodo()}}>
            <Text style={[styles.text, {fontSize: 14, color: '#ffffff'}]}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render(): React.Element<any> {

    return (
      <View style={styles.container}>
        <LinearGradient start={[0, 1]} end={[1, 1]} colors={[secondaryColor, primaryColor]} style={styles.header} />
        { this.state.whatTodo && this.renderWhatTodo() }
        { !this.state.whatTodo &&
          <ScrollView style={styles.content}>
            {this.renderStatusCard()}
            {this.renderAlertCard()}
            {this.renderControlCard()}
            <View><AppCard /></View>
            <View style={{ marginTop: 12, marginBottom: 12}} ><SceneCard /></View>
          </ScrollView>
        }
      </View>
    );
  }
}
