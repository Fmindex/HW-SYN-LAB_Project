/* @flow */

import { Button, Slider, Switch, Text, TouchableOpacity, View } from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import React, { Component } from 'react';

import styles from './styles';
import Spinner from 'react-native-loading-spinner-overlay';
import { translate } from 'react-i18next';

@translate(['device', 'common'], { wait: true })
export default class DeviceSpeaker extends Component {
  static navigationOptions = ({ screenProps }) => ({
    title: screenProps.t('device:speakers'),
    headerRight: <Button title="+" onPress={() => {}} />
  });

  constructor(props) {
    super(props);

    let config = {
      headers: {
        Authorization: 'Basic a3dhcm9kb206dzMzMDAxMzY='
      }
    };
    this.state = {
      status: false,
      visible: true,
    };

    axios.get('http://peahivebackend3.azurewebsites.net/api/devices/speaker/', config).then((data) => {
      console.log('get speaker');
      console.log(data.data);
      this.setState({
        ...this.state,
        status: (data.data.current[0].status === 'ON'),
        visible: false,
      });
    }, (error) => {
      console.log('Error');
    });
  }

  _renderController = () =>
    <View style={styles.controller}>
      <TouchableOpacity>
        <Entypo name="controller-fast-backward" color="white" size={48} />
      </TouchableOpacity>
      <View style={styles.circle}>
        <TouchableOpacity>
          <Entypo style={styles.icon} name="controller-play" color="white" size={80} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Entypo name="controller-fast-forward" color="white" size={48} />
      </TouchableOpacity>
    </View>;

  _renderSlider = () =>
    <View style={styles.sliderContainer}>
      <TouchableOpacity>
        <Ionicons name="ios-remove-circle-outline" size={42} />
      </TouchableOpacity>
      <Slider style={styles.slider} minimumTrackTintColor="skyblue" />
      <TouchableOpacity>
        <Ionicons name="ios-add-circle-outline" size={42} />
      </TouchableOpacity>
    </View>;

  render(): React.Element<any> {
    const { t } = this.props;
    return (
      <View style={styles.container}>
        <Spinner visible={this.state.visible} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
        <Text style={styles.title}>Movie & Sound</Text>
        {this._renderController()}
        {this._renderSlider()}

        <View style={{ flex: 1 }} />
        <View style={styles.switchContainer}>
          <Switch onTintColor="skyblue" value={this.state.status} onChange={() => this.setState({ status: !this.state.status })}/>
        </View>
      </View>
    );
  }
}
