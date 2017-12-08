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

export default class Step2Auto extends Component {

  loadingImage = require('./image/loading.png');
  interval = null;
  timeout = null;

  constructor(props) {
    super(props);
    
    this.state = {
      check: false,
      loading: true,
      degree: 0,
    };

    timeout = setTimeout(() => {
      this.setState({
        loading: false,
      });

      clearInterval(this.interval);
    }, 3000);

    this.interval = setInterval(() => {
      this.setState({
        degree: (this.state.degree + 30) % 360
      });
    }, 50);

    this.toggleCheckbox = this.toggleCheckbox.bind(this);
  }

  toggleCheckbox() {

    this.setState({
      check: !this.state.check,
    });
  }

  render() {
    return (
      <View style={styles.content} >
        <View style={{ marginTop: 40 }}>
          <StepBar step={ 2 } />
        </View>
        
        <View style={[ styles.column, styles.center ]} >
          <Text style={ styles.descript1 }>
            We detected the following device in your network
          </Text>
          <Text style={[ styles.descript1 , styles.prev8 ]}>
            Select the one you. would like to connect
          </Text>
          <View style={[ styles.row, styles.center, styles.prev32 ]} >
            <TouchableOpacity activeOpacity={ 1 } style={ styles.right8 } onPress={ () => this.toggleCheckbox() } >
              <GradientCheckbox checked={ this.state.check } />
            </TouchableOpacity>
            <Text style={ styles.descript1 }>
              Connect all devices
            </Text>
          </View>

          { this.state.loading === true && <LoadingPart loadingImage={ this.loadingImage } degree={ this.state.degree } /> }
          { this.state.loading === false && <DevicesPart /> }

        </View>

        <View style={[ { height: 104, width: '100%' }, styles.column, styles.center]} >
          <GradientButton onPress={ () => {
              clearInterval(this.interval);
              clearTimeout(this.timeout);
              this.props.setPage('step3-auto');
            }
          } title={ 'Next' } />
        </View>

      </View>
    );
  }
}

class LoadingPart extends Component {
  render() {
    return (
      <View style={[ { height: 200, paddingTop: 16 }, styles.column, styles.center ]} >
        <Image style={[ { width: 150, height: 150, transform: [{ rotate: this.props.degree + 'deg' }] } ]} source={ this.props.loadingImage } />
        <Text style={[ styles.descript2, styles.prev16 ]} >
          Searching for new device
        </Text>
      </View>
    );
  }
}

class DevicesPart extends Component {
  render() {
    return (
      <View style={[ { height: 200 }, styles.column, styles.center ]} >
        <View style={[ { width: 350 , height: 150 }, styles.prev32, styles.row, styles.itemSelector ]}>
          <TouchableOpacity>
            <DeviceItem selected={ 1 } height={ 55 } width={ 125 } source={ require('./image/example-air.png') } name={ 'Air condition' } />
          </TouchableOpacity>
          <TouchableOpacity>
            <DeviceItem height={ 73 } width={ 44 } source={ require('./image/example-plug.png') } name={ 'Smart plug' } />
          </TouchableOpacity>
        </View>
        <Text style={[ styles.descript2 ]} ></Text>
      </View>
    );
  }
}

class DeviceItem extends Component {
  render() {
    return (
      <View style={[ { height: 100 }, styles.column, styles.center, (this.props.selected ? { opacity: 1 } : { opacity: 0.5 }) ]} >
        <View style={{ height: 75 }} >
          <Image style={{ height: this.props.height, width: this.props.width }} source={ this.props.source } />
        </View>
        <Text style={ styles.descript1 } >
          { this.props.name }
        </Text>
      </View>
    )
  }
}
