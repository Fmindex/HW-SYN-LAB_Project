/* @flow */

import { View, Button, Text, TouchableOpacity, ScrollView, Image, Animated } from 'react-native';
import { LinearGradient } from 'expo';

import React, { Component } from 'react';
import axios from 'axios';
import appStyles, { primaryColor, secondaryColor } from '../../common/styles';

import StepBar from './stepbar';
import GradientCheckbox from './gradient-checkbox';
import GradientButton from './gradient-button';
import ColorButton from './color-button';
import styles from './styles';
import { translate } from 'react-i18next';

export default class Step3Manual extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      room: [false, false, false],
      button: false,
    };

    this.selectRoom = this.selectRoom.bind(this);
  }

  selectRoom(room) {
    let old = this.state.room[room];

    this.setState({
      room: [false, false, false],
    });

    let tmp = [false, false, false];
    tmp[room] = !old;
    this.setState({
      room: tmp
    });

    if(old) {
      this.setState({
        button: false
      });
    }
    else {
      this.setState({
        button: true
      }); 
    }
  }

  render() {
    return (
      <View style={styles.content} >
        <View style={{ marginTop: 40 }}>
          <StepBar step={ 3 } />
        </View>
        
        <View style={[ { width: '100%' }, styles.column, styles.center ]} >
          <Image style={{ width: this.props.device.width, height: this.props.device.height }} source={ this.props.device.source } />

          <View style={[ { width: '100%', paddingLeft: 24 }, styles.row ]} >
            <Text style={ styles.descript3 }>
              Select your room
            </Text>
          </View>
         
          <View style={[ { width: 350 , height: 150 }, styles.prev32, styles.row, styles.itemSelector ]}>
            <TouchableOpacity onPress={ () => this.selectRoom(0) } >
              <RoomItem selected={ this.state.room[0] } name={ 'Living room' } source={{ uri: 'http://ghk.h-cdn.co/assets/cm/15/11/54ff82285cf02-lving-room-green-gold-modern-de.jpg' }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => this.selectRoom(1) } >
              <RoomItem selected={ this.state.room[1] } name={ 'Kitchen room' } source={{ uri: 'http://archinhome.com/wp-content/uploads/2010/02/Kitchen-Room-Interior-Decorating-Ideas-from-Brandon-Barré-Photographer-1.jpg' }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => this.selectRoom(2) } >
              <RoomItem selected={ this.state.room[2] } name={ 'Bed room' } source={{ uri: 'http://www.ikea.com/ms/media/cho_room/20163/sleeping/20163_cosl03b/20163_cosl03b_01_thumb_PH132289.jpg' }} />
            </TouchableOpacity>
          </View>

        </View>

        <View style={[ { height: 104, width: '100%' }, styles.column, styles.center]} >
          { this.state.button && <GradientButton onPress={ () => this.props.setPage('step4-manual') } title={ 'Next' } /> }
          { !this.state.button && <ColorButton color={ '#ea4857' } onPress={ () => this.props.setPage('step1') } title={ 'Remove' } /> }
        </View>

      </View>
    );
  }
}

class RoomItem extends Component {
  render() {
    return (
      <View style={[ { height: 100 }, styles.column, styles.center, (this.props.selected ? { opacity: 1 } : { opacity: 0.5 }) ]} >
        <Image source={ this.props.source } style={ styles.circleImage } />
        <Text style={[ styles.descript1, styles.prev16 ]} >
          { this.props.name }
        </Text>
      </View>
    )
  }
}
