/* @flow */

import { View, Button, Text, TouchableOpacity, ScrollView, Image, Animated } from 'react-native';
import { LinearGradient } from 'expo';

import React, { Component } from 'react';
import axios from 'axios';
import appStyles, { primaryColor, secondaryColor } from '../../common/styles';

import styles from './styles';
import { translate } from 'react-i18next';

export default class GradientCheckbox extends Component {

  render() {
    if(this.props.checked) return <Image style={{ height: 24, width: 24 }} source={ require('./image/check.png') } />;
    else return <Image style={{ height: 24, width: 24 }} source={ require('./image/uncheck.png') } />;
  }
}


