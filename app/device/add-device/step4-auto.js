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
          <Text style={ styles.descript1 }>
            Please select the scene which you would like to sync
          </Text>
         
          <View style={[ { width: 350 , height: 150 }, styles.prev32, styles.row, styles.itemSelector ]}>
            <TouchableOpacity>
              <SceneItem selected={ 1 } name={ 'Away' } source={{ uri: 'http://www.stmarystudentparish.org/assets/Open-Front-Door-300x225.jpg' }} />
            </TouchableOpacity>
            <TouchableOpacity>
              <SceneItem name={ 'Welcome' } source={{ uri: 'https://i.pinimg.com/736x/e5/fd/8a/e5fd8ac60846688d8a152f0e44940335--grey-living-rooms-bright-decor-living-room.jpg' }} />
            </TouchableOpacity>
            <TouchableOpacity>
              <SceneItem name={ 'Good night' } source={{ uri: 'http://www.ikea.com/ms/media/cho_room/20163/sleeping/20163_cosl03b/20163_cosl03b_01_thumb_PH132289.jpg' }} />
            </TouchableOpacity>
          </View>

        </View>

        <View style={[ { height: 104, width: '100%' }, styles.column, styles.center]} >
          <GradientButton onPress={ () => this.props.setPage('step4-auto-done') } title={ 'Next' } />
        </View>

      </View>
    );
  }
}

class SceneItem extends Component {
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
