/* @flow */

import { View, Button, Text, TouchableOpacity, ScrollView, Image, Animated } from 'react-native';
import { LinearGradient } from 'expo';

import React, { Component } from 'react';
import axios from 'axios';
import appStyles, { primaryColor, secondaryColor } from '../../common/styles';

import StepBar from './stepbar';
import GradientButton from './gradient-button';
import styles from './styles';
import { translate } from 'react-i18next';

export default class Step1 extends Component {

  render() {
    return (
      <View style={styles.content} >
        <View style={{ marginTop: 40 }}>
          <StepBar step={ 1 } />
        </View>
        
        <View style={[ styles.column, styles.center ]} >
          <Text style={{ fontSize: 20, fontWeight: "500", color: "#4a4a4a" }} >
            Let’s get start
          </Text>
          <TouchableOpacity onPress={ () => this.props.setPage('step2-auto') } style={[ styles.prev16, styles.next16 ]}>
            <Image source={ require('./image/plus.png') } style={{ width: 224, height: 224 }} />
          </TouchableOpacity>
          <Text style={{ fontSize: 15, fontWeight: "300", textAlign: "center", color: "#9b9b9b" }} >
            For Zigbee and Z- Wave devices,make sure your devices are in pairing mode.
          </Text>
        </View>

        <View style={[ { height: 136, width: '100%' }, styles.column, styles.center, styles.upperLine]} >
          <Text style={[{ fontSize: 14, fontWeight: "300", color: "#4a4a4a" }, styles.next12 ]}>
            Want to add Echo,or other devices?
          </Text>
          <GradientButton onPress={ () => this.props.setPage('step2-manual-searching') } title={ 'Add Device Manually' } />
        </View>

      </View>
    );
  }
}


