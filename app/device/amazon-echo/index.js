import React, { Component } from 'react';
import { Image, Button, View, Text, ScrollView, TouchableOpacity, Switch } from 'react-native';
import appStyles, { primaryColor, secondaryColor } from '../../common/styles';
import { SettingTab, AppCard, SceneCard } from '../../common/device-setting';
import { LinearGradient } from 'expo';
import styles from './styles';
import { FontAwesome } from '@expo/vector-icons';

import { translate } from 'react-i18next';
@translate(['device', 'common'], { wait: true })

export default class DeviceAmazonEcho extends Component {

  static navigationOptions = ({ screenProps }) => ({
    title: screenProps.t('device:speaker'),
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

  renderStatusCard() {
    return (
      <View style={[styles.card, {height: 136, justifyContent: 'space-around'}]}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.statusInfo}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.deviceName}>Alexa Echo show</Text>
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
            <Image source={require('./amazon-echo.png')} style={{height: 70, width: 74, marginTop: 8}} />
          </View>
        </View>

        <SettingTab status={ true } onPressPower={ null } onPressSetting={ null } />
      </View>
    );
  }

  renderControlCard() {
    return (
      <View style={{height: 428}}>
        <LinearGradient start={[0, 0]} end={[0, 1]} colors={['rgb(13, 106, 233)', 'rgb(51, 255, 254)']} style={[styles.controlCardBackground, styles.card]}/>
        <View style={styles.fadeBar} />
        <View style={styles.controlContent}>
          <View style={styles.controlImage}>
            <Image source={require('./device.png')} style={styles.speakerImage} />
          </View>
          <View style={styles.controlMessage}>
            <View style={styles.messageContainer}>
              <Text style={[styles.message, styles.text]}>
                How can I help you?
              </Text>
            </View>
            <TouchableOpacity style={styles.micButton}>
              <Image source={require('./mic.png')} style={{width: 15, height: 25}} />
            </TouchableOpacity>
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
          {this.renderControlCard()}

          <View style={{ marginTop: 12 }} ><AppCard /></View>
          <View style={{ marginTop: 12, marginBottom: 12 }} ><SceneCard /></View>
        </ScrollView>
      </View>
    );
  }
}
