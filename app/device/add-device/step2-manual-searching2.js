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

export default class Step2ManualSearching2 extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.scrollContent} >
        {
          this.props.subGroup.groups.map((group, index) => {
            return <DeviceGroup 
              key={ index } 
              title={ group.title } 
              devices={ group.devices }
              width={ this.props.subGroup.width }
              height={ this.props.subGroup.height }
              source={ this.props.subGroup.source }
              setPage={ this.props.setPage }
              setDevice={ this.props.setDevice } 
              setApplication={ () => this.props.setApplication(group.application) }
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
                  this.props.setDevice(this.props.devices[key]);
                  this.props.setApplication();
                  this.props.setPage('step2-manual');
                }} >
                <View>
                  <DeviceTab 
                    device={ this.props.devices[key] } 
                    width={ this.props.width }
                    height={ this.props.height }
                    source={ this.props.source }
                  />
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
          <Image style={{ width: this.props.width, height: this.props.height }} source={ this.props.source } />
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
