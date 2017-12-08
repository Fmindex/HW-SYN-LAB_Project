/* @flow */

import { View, Button, Text, TouchableOpacity, ScrollView, Image, Animated, TextInput } from 'react-native';
import { LinearGradient } from 'expo';

import React, { Component } from 'react';
import axios from 'axios';
import appStyles, { primaryColor, secondaryColor } from '../../common/styles';

import StepBar from './stepbar';
import GradientCheckbox from './gradient-checkbox';
import GradientButton from './gradient-button';
import styles from './styles';
import { translate } from 'react-i18next';

export default class Step4Manual extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      part: 'login'
    };

    this.setPart = this.setPart.bind(this);
  }

  setPart(part) {

    this.setState({
      part: part
    });
  }

  render() {

    if(this.state.part == 'login') return <LoginPart setPart={ this.setPart } application={ this.props.application } />;
    if(this.state.part == 'authen') return <AuthenPart setPart={ this.setPart } application={ this.props.application } />;
    if(this.state.part == 'done') return <DonePart setPart={ this.setPart } application={ this.props.application } />;
  }
}

class LoginPart extends Component {
  
  render() {
    return (
      <View style={styles.content} >
        <View style={{ marginTop: 40 }}>
          <StepBar step={ 4 } />
        </View>
        
        <View style={[ styles.column, styles.center ]} >
          <View style={[ styles.row, styles.center ]} >
            <Image source={ this.props.application.source } style={{ width: this.props.application.width, height: this.props.application.height }} />
          </View>

          <Text style={[ styles.descript3, styles.prev32 ]} >
            Sign in to Continue
          </Text>

          <View style={ styles.prev24 } >
            <TextInput placeholder={ 'Email' } placeholderTextColor={ '#9b9b9b' } style={ styles.textInput } />
            <TextInput placeholder={ 'Password' } placeholderTextColor={ '#9b9b9b' } style={ styles.textInput } />
            <TouchableOpacity>
              <Text style={ styles.descript4 } >Forgot Password?</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={[ { height: 104, width: '100%' }, styles.column, styles.center]} >
          <GradientButton onPress={ () => this.props.setPart('authen') } title={ 'Sign in' } />
        </View>

      </View>
    );
  }
}

class AuthenPart extends Component {
  
  render() {
    return (
      <View style={styles.content} >
        <View style={{ marginTop: 40 }}>
          <StepBar step={ 4 } />
        </View>
        
        <View style={[ { width: '100%' }, styles.column, styles.center ]} >
          <View style={[ styles.row, styles.center ]} >
            <Image source={ this.props.application.source } style={{ width: this.props.application.width, height: this.props.application.height, marginHorizontal: 40 }} />
            <Image source={ require('./image/logo.png') } style={{ width: this.props.application.width, height: this.props.application.width, marginHorizontal: 40 }} />
          </View>

          <View style={{ height: 200, width: '100%', alignItems: 'center' }} >

            <Text style={[ styles.descript3, styles.prev24 ]} >Authorize Application</Text>
            
            <View style={[ { width: 250 }, styles.prev16 ]} >
              <Text style={[ styles.prev16, styles.descript5 ]} >
                Home Connext is asking for permission to use your account
              </Text>
            </View>

            <View style={{ width: '100%', marginTop: 24 }} >
              <View style={ styles.line} />
              <View style={[ { height: 96, justifyContent: 'space-around', width: '100%', padding: 16 }, styles.column ]} >
                <Text style={ styles.descript6 } >Home Connext will be able to:</Text>
                <Text style={ styles.descript7 } >■   Control your devices over the internet</Text>
              </View>
              <View style={ styles.line } />
            </View>

          </View>

        </View>

        <View style={[ { height: 104, width: '100%' }, styles.column, styles.center]} >
          <GradientButton onPress={ () => this.props.setPart('done') } title={ 'Authorize' } />
        </View>

      </View>
    );
  }
}


class DonePart extends Component {
  
  render() {
    return (
      <View style={styles.content} >
        <View style={{ marginTop: 40 }}>
          <StepBar step={ 4 } />
        </View>
        
        <View style={[ { width: '100%' }, styles.column, styles.center ]} >
          <View style={[ styles.row, styles.center ]} >
            <Image source={ this.props.application.source } style={{ width: this.props.application.width, height: this.props.application.height, marginHorizontal: 40 }} />
            <Image source={ require('./image/logo.png') } style={{ width: this.props.application.width, height: this.props.application.width, marginHorizontal: 40 }} />
          </View>

          <View style={{ height: 200, width: '100%', alignItems: 'center' }} >

            <Text style={[ { width: 264 }, styles.descript2, styles.prev32 ]} >
              Your DEVICE is now connected to HOME CONNEXT!
            </Text>

            <Text style={[ { marginTop: 88 }, styles.descript2 ]} >
              Click ‘Done’ to finish set up.
            </Text>

          </View>

        </View>

        <View style={[ { height: 104, width: '100%' }, styles.column, styles.center]} >
          <GradientButton onPress={ () => this.props.setPart('done') } title={ 'Done' } />
        </View>

      </View>
    );
  }
}