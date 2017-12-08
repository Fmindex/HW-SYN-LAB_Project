import React, { Component } from 'react';
import { Image, Button, View, Text, ScrollView, TouchableOpacity, Switch } from 'react-native';
import appStyles, { primaryColor, secondaryColor } from '../../common/styles';
import { SettingTab, AppCard, SceneCard } from '../../common/device-setting';
import { LinearGradient } from 'expo';
import styles from './styles';
import { FontAwesome } from '@expo/vector-icons';

import { translate } from 'react-i18next';
@translate(['device', 'common'], { wait: true })

export default class DevicePowerMeter extends Component {

  static navigationOptions = ({ screenProps }) => ({
    title: screenProps.t('device:power_meter'),
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
      sound: true,
      lens: true,
      timer: true,
      mic: true,
      share: true,
      active: true,
    };

    this.toggleSound = this.toggleSound.bind(this);
    this.toggleLens = this.toggleLens.bind(this);
    this.toggleTimer = this.toggleTimer.bind(this);
    this.toggleMic = this.toggleMic.bind(this);
    this.toggleShare = this.toggleShare.bind(this);
    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleSound() {
    this.setState({
      sound: !this.state.sound,
    });
  }

  toggleLens() {
    this.setState({
      lens: !this.state.lens,
    });
  }

  toggleTimer() {
    this.setState({
      timer: !this.state.timer,
    });
  }

  toggleMic() {
    this.setState({
      mic: !this.state.mic,
    });
  }

  toggleShare() {
    this.setState({
      share: !this.state.share,
    });
  }

  toggleActive() {
    this.setState({
      active: !this.state.active,
    });
  }

  renderStatusCard() {
    return (
      <View style={[styles.card, {height: 152, justifyContent: 'space-between', flexDirection: 'column'}]}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.statusInfo}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.deviceName}>Smappee</Text>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 5}}>
              <Text style={styles.locationName}>Energy Monitor</Text>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 5}}>
              <Text style={styles.connectStatus}>Status</Text>
            </View>
          </View>

          <View style={styles.deviceImage}>
            <Image source={require('./device.png')} style={{height: 80, width: 80}} />
          </View>
        </View>

        <SettingTab status={ true } onPressPower={ null } onPressSetting={ null } />
      </View>
    );
  }

  renderInfoCard() {
    return (
      <View style={[styles.card, {height: 405, justifyContent: 'center', alignItems: 'center'}]}>
        <View>
          <Image source={require('./background.png')} style={{width: 297, height:361}} />
          
          <View style={[styles.overlay, {marginTop: 43, marginLeft: 30}]}>
            <Text style={[styles.text, {fontSize: 21, color: '#ffffff'}]}>300 W</Text>
            <Text style={[styles.text, {fontSize: 14, color: '#ffffff'}]}>Solar</Text>
          </View>

          <View style={[styles.overlay, {marginTop: 137, marginLeft: 90}]}>
            <Text style={[styles.text, {fontSize: 36, color: '#ffffff'}]}>1584 W</Text>
            <Text style={[styles.text, {fontSize: 14, color: '#ffffff'}]}>Consumption</Text>
          </View>

          <View style={[styles.overlay, {marginTop: 254, marginLeft: 58}]}>
            <Text style={[styles.text, {fontSize: 18, color: '#ffffff'}]}>52 Baht</Text>
            <Text style={[styles.text, {fontSize: 14, color: '#ffffff'}]}>Today usage</Text>
          </View>

          <View style={[styles.overlay, {marginTop: 263, marginLeft: 171}]}>
            <Text style={[styles.text, {fontSize: 24, color: '#ffffff'}]}>783 Baht</Text>
            <Text style={[styles.text, {fontSize: 14, color: '#ffffff'}]}>Monthly usage</Text>
          </View>

          <View style={[styles.overlay, {marginTop: 100, marginLeft: 250}]}>
            <TouchableOpacity>
              <Image source={require('./summary.png')} style={{height: 50, width: 50}} />
            </TouchableOpacity>
          </View>

          <View style={[styles.overlay, {marginTop: 25, marginLeft: 140}]}>
            <Text style={[styles.text, {fontSize: 24, color: 'rgb(74, 74, 74)'}]}>Energy monitor</Text>
          </View>          
        </View>
      </View>
    );
  }

  render(): React.Element<any> {

    return (
      <View style={styles.container}>
        <LinearGradient start={[0, 1]} end={[1, 1]} colors={[secondaryColor, primaryColor]} style={styles.header} />
        <ScrollView style={styles.content}>
          {this.renderStatusCard()}
          {this.renderInfoCard()}

          <View><AppCard /></View>
          <View style={{ marginTop: 12, marginBottom: 12 }} ><SceneCard /></View>

        </ScrollView>
      </View>
    );
  }
}