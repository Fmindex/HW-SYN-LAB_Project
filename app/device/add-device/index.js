/* @flow */

import { Animated, Button, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react';
import appStyles, { primaryColor, secondaryColor } from '../../common/styles';

import { CheckBox } from 'native-base';
import { LinearGradient } from 'expo';
import Step1 from './step1';
import Step2Auto from './step2-auto';
import Step2Manual from './step2-manual';
import Step2ManualSearching from './step2-manual-searching';
import Step2ManualSearching2 from './step2-manual-searching2';
import Step3Auto from './step3-auto';
import Step3Manual from './step3-manual';
import Step4Auto from './step4-auto';
import Step4AutoDone from './step4-auto-done';
import Step4Manual from './step4-manual';
import axios from 'axios';
import deviceGroups from './device-groups';
import styles from './styles';
import { translate } from 'react-i18next';

@translate(['device', 'common'], { wait: true })

export default class AddDevice extends Component {

  static navigationOptions = ({ screenProps }) => ({
    // title: screenProps.t('device:camera'),
    // headerTitleStyle: { color: 'white', fontSize: 18 },
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

  titles = {
    'step1': 'Add New Device',
    'step2-auto': 'Searching Device',
    'step3-auto': 'Select Room',
    'step4-auto': 'Select Scene',
    'step4-auto-done': 'Connect to Device',
    'step2-manual-searching': 'Add Device',
    'step2-manual-searching2': 'Add Device',
    'step2-manual': 'Add Device',
    'step3-manual': 'Select Room',
    'step4-manual': 'Connect to Device',
  };

  // init device data
  allGroups = deviceGroups.allGroups;

  constructor(props) {
    super(props);
    
    this.state = {
      title: 'Add New Device',
      page: 'step1',
      subGroup: null,
      device: null,
    };

    this.setPage = this.setPage.bind(this);
    this.setSubGroup = this.setSubGroup.bind(this);
    this.setDevice = this.setDevice.bind(this);
    this.setApplication = this.setApplication.bind(this);
  }

  setPage(page) {

    this.setState({
      page: page,
      title: this.titles[page]
    });
  }

  setSubGroup(subGroup) {

    this.setState({
      subGroup: this.allGroups[1].devices[subGroup]
    });
  }

  setDevice(device) {

    this.setState({
      device: device
    });
  }

  setApplication(application) {

    this.setState({
      application: application
    });
  }

  startDeviceDiscovery() {
    let config = {
      headers: {
        'Authorization': 'Basic cGVhaGl2ZToyOFNlcDE5NjA=',
        'Content-Type': 'application/json'
      }
    };
    let body = {
      'topic': 'home1',
      'message': '',
    };
    body.message = {'devicediscovery': true};
    console.log('sent message with body '+body.message);
    body = JSON.stringify(body);
    this.setState({ isEnabled: !this.state.isEnabled });
    axios.post('http://peahivebackend3.azurewebsites.net/api/v1.0/devicediscovery', body, config).then((data) => {
      console.log('post');
      console.log(body.message);
    }, (error) => {
      console.log('post error'+error);
    });
  }

  render() {
    return (
      <View style={styles.container} >
        <LinearGradient start={[0, 1]} end={[1, 1]} colors={ [secondaryColor, primaryColor] } style={ styles.header } >
          <Text style={styles.title} >{ this.state.title }</Text>
        </LinearGradient>
        { this.state.page === 'step1' && <Step1 setPage={ this.setPage } /> }
        { this.state.page === 'step2-auto' && <Step2Auto setPage={ this.setPage } /> }
        { this.state.page === 'step3-auto' && <Step3Auto setPage={ this.setPage } /> }
        { this.state.page === 'step4-auto' && <Step4Auto setPage={ this.setPage } /> }
        { this.state.page === 'step4-auto-done' && <Step4AutoDone setPage={ this.setPage } /> }
        { this.state.page === 'step2-manual-searching' && <Step2ManualSearching setPage={ this.setPage } setSubGroup={ this.setSubGroup } allGroups={ this.allGroups } /> }
        { this.state.page === 'step2-manual-searching2' && <Step2ManualSearching2 setPage={ this.setPage } setDevice={ this.setDevice } subGroup={ this.state.subGroup } setApplication={ this.setApplication } /> }
        { this.state.page === 'step2-manual' && <Step2Manual setPage={ this.setPage } device={ this.state.device } /> }
        { this.state.page === 'step3-manual' && <Step3Manual setPage={ this.setPage } device={ this.state.device } /> }
        { this.state.page === 'step4-manual' && <Step4Manual application={ this.state.application } /> }
      </View>
    );
  }
}