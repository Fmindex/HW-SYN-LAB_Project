/* @flow */

import { View, Button, Text, TouchableHighlight, ScrollView, Image, Animated } from 'react-native';
import { LinearGradient } from 'expo';

import React, { Component } from 'react';
import axios from 'axios';
import appStyles, { primaryColor, secondaryColor } from '../../common/styles';

import StepBar from './stepbar';
import GradientCheckbox from './gradient-checkbox';
import GradientButton from './gradient-button';
import styles from './styles';
import { translate } from 'react-i18next';

export default class Step2Manual extends Component {

  render() {
    return (
      <View style={[ styles.scrollContent, { alignItems: 'center' } ]} >
        <View style={{ marginTop: 40 }}>
          <StepBar step={ 2 } />
        </View>

        <View style={[ { width: '100%' }, styles.column, styles.center ]} >
          <View style={[ { height: 184, paddingTop: 64 }, styles.center ]} >
            <Image style={{ width: this.props.device.width, height: this.props.device.height }} source={ this.props.device.source } />
          </View>

          <View style={[ styles.line, styles.prev32 ]} />
          <TouchableHighlight onPress={ () => this.props.setPage('step3-manual') } >
            <View style={[ { height: 80, width: '100%', alignItems: 'center' }, styles.row ]} >
              <View style={[ { width: 96 }, styles.row, styles.center ]} >
                <Image style={[ { borderRadius: 27, width: 54, height: 54 }, styles.shadowAround ]} source={ require('./image/connect.png') } />
              </View>
              <View style={{ flex: 5 }} >
                <Text style={ styles.deviceTitle } >Connect Now</Text>
              </View>
              <View style={[ { flex: 1, justifyContent: 'flex-end', alignItems: 'center', paddingRight: 32 }, styles.row ]} >
                <Image style={{ width: 10, height: 17 }} source={ require('./image/chevron-right.png') } />
              </View>
            </View>
          </TouchableHighlight>
          <View style={ styles.line } />
        </View>

      </View>
    );
  }
}