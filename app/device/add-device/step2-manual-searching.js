/* @flow */

import { View, Button, Text, TouchableHighlight, ScrollView, Image, Animated } from 'react-native';
import { LinearGradient } from 'expo';

import React, { Component } from 'react';
import axios from 'axios';
import appStyles, { primaryColor, secondaryColor } from '../../common/styles';

import StepBar from './stepbar';
import GradientButton from './gradient-button';
import styles from './styles';
import { translate } from 'react-i18next';

export default class Step2ManualSearching extends Component {

  render() {
    return (
      <ScrollView style={styles.scrollContent} >
        {
          this.props.allGroups.map((group, index) => {
            return <DeviceGroup 
              key={ index } 
              title={ group.title } 
              devices={ group.devices } 
              setPage={ this.props.setPage } 
              setSubGroup={ this.props.setSubGroup } 
            />;
          })
        }
        <View style={ styles.line } />
      </ScrollView>
    );
  }
}

class DeviceGroup extends Component {

  render() {
    return (
      <View>
        <View style={ styles.groupBackground } >
          <Text style={ styles.groupTitle } >{ this.props.title }</Text>
        </View>
        { 
          Object.keys(this.props.devices).map((key, index) => {

            return (
              <TouchableHighlight key={ index } onPress={ () => {
                  this.props.setSubGroup(key);
                  this.props.setPage('step2-manual-searching2');
                }} >
                <View>
                  <DeviceTab device={ this.props.devices[key] } />
                  { index != Object.keys(this.props.devices).length - 1 && <View style={ styles.line } /> }
                </View>
              </TouchableHighlight>
            );
            
          })
        }
      </View>
    );
  }
}

class DeviceTab extends Component {

  render() {
    return (
      <View style={[ { height: 80, width: '100%', alignItems: 'center' }, styles.row ]} >
        <View style={[ { width: 96 }, styles.row, styles.center ]} >
          <Image style={{ width: this.props.device.width, height: this.props.device.height }} source={ this.props.device.source } />
        </View>
        <View style={{ flex: 5 }} >
          <Text style={ styles.deviceTitle } >{ this.props.device.title }</Text>
        </View>
        <View style={[ { flex: 1, justifyContent: 'flex-end', alignItems: 'center', paddingRight: 32 }, styles.row ]} >
          <Image style={{ width: 10, height: 17 }} source={ require('./image/chevron-right.png') } />
        </View>
      </View>
    );
  }
}
