/* @flow */

import { Button, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import { SceneMap, TabBar, TabViewAnimated } from 'react-native-tab-view';

import AllDevice from './alldevice';
import type { DeviceRowType } from './alldevice';
import SceneEditDevice from '../scene/edit/device';
import SceneEditRoom from '../scene/edit/room';
import type { SceneType } from '../scene/index';
import styles from './styles';
import { translate } from 'react-i18next';

@translate(['device', 'common'], { wait: true })

export default class DeviceWeathersensorNew extends Component {
  static navigationOptions = ({ navigation,screenProps }) => ({
    title: 'Devices',
  });


  render(): React.Element<any> {
    //console.log(this.props)
    //console.log('asb')
    return (
        <AllDevice navigation={this.props.navigation} />
    );
  }
}
