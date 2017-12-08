/* @flow */

import { View, Button, Text, TouchableOpacity, ScrollView, Image, Animated } from 'react-native';
import { LinearGradient } from 'expo';

import React, { Component } from 'react';
import axios from 'axios';
import appStyles, { primaryColor, secondaryColor } from '../../common/styles';

import StepBar from './stepbar';
import GradientCheckbox from './gradient-checkbox';
import GradientButton from './gradient-button';
import styles from './styles';
import { translate } from 'react-i18next';

export default class Step4Auto extends Component {

  render() {
    return (
      <View style={styles.content} >
        <View style={{ marginTop: 40 }}>
          <StepBar step={ 4 } />
        </View>
        
        <View style={[ styles.column, styles.center ]} >
          <View style={[ styles.row, styles.center ]} >
            <View style={{ marginRight: 64 }} >
              <DeviceItem selected={ 1 } height={ 55 } width={ 125 } source={ require('./image/example-air.png') } name={ 'Air condition' } />
            </View>
            <Image source={ require('./image/logo.png') } style={{ width: 104, height: 104 }} />
          </View>

          <Text style={[ { width: 264 }, styles.descript2, styles.prev32 ]} >
            Your DEVICE is now connected to HOME CONNEXT!
          </Text>

          <Text style={[ { marginTop: 88 }, styles.descript2 ]} >
            Click ‘Done’ to finish set up.
          </Text>

        </View>

        <View style={[ { height: 104, width: '100%' }, styles.column, styles.center]} >
          <GradientButton title={ 'Done' } />
        </View>

      </View>
    );
  }
}

class DeviceItem extends Component {
  render() {
    return (
      <View style={[ { height: 100 }, styles.column, styles.center, (this.props.selected ? { opacity: 1 } : { opacity: 0.5 }) ]} >
        <Image style={{ height: this.props.height, width: this.props.width }} source={ this.props.source } />
        <Text style={[ styles.descript1, styles.prev8 ]} >
          { this.props.name }
        </Text>
      </View>
    )
  }
}