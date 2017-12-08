/* @flow */

import { Button, Image, ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react';
import appStyles, { primaryColor, secondaryColor } from '../../common/styles';
import { SettingTab, AppCard, SceneCard } from '../../common/device-setting';

import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo';
import Spinner from 'react-native-loading-spinner-overlay';
import axios from 'axios';
import styles from './styles';
import { translate } from 'react-i18next';

@translate(['device', 'common'], { wait: true })

export default class DeviceFan extends Component {

  static navigationOptions = ({ screenProps }) => ({
    // title: screenProps.t('Solar Inverter'),
    headerTitleStyle: { color: 'white', fontSize: 18 },
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

  constructor(props) {
    super(props);
    
    this.state = {
      speed: 1,
      timer: 1,
      isTimerOn: false,
      angle: 1,
      angleMode: false,
      isActive: true,
      spinnerVisible: true,
    };
    let config = {
      headers: {
        Authorization: 'Basic a3dhcm9kb206dzMzMDAxMzY=',
      }
    };
    axios.get('http://peahivebackend3.azurewebsites.net/api/devices/fan/', config).then((data) => {
      this.setState({
        ...this.state,
        isActive: data.data.current[0].status == 'ON',
        spinnerVisible: false,
      });
    }, (error) => {
      console.log('get fan error');
    });
    
    this.changeSpeed = this.changeSpeed.bind(this);
    this.changeTimer = this.changeTimer.bind(this);
    this.toggleTimer = this.toggleTimer.bind(this);
    this.changeAngle = this.changeAngle.bind(this);
    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive() {
    this.setState({
      ...this.state,
      isActive: !this.state.isActive
    });
  }

  changeSpeed(i) {
    this.setState({
      ...this.state,
      speed: i
    });
  }

  changeTimer(i) {
    this.setState({
      ...this.state,
      timer: i
    });
  }

  toggleTimer(value) {
    this.setState({
      ...this.state,
      isTimerOn: value
    });
  }

  toggleAngleMode(value) {
    this.setState({
      ...this.state,
      angleMode: value
    });
  }

  changeAngle(i) {
    this.setState({
      ...this.state,
      angle: i
    });
  }

  render(): React.Element<any> {
    const { t, navigation } = this.props;
    const { navigate } = navigation;
    let iterator = [1, 2, 3, 4];
    return (
      <View style={{flex: 1, backgroundColor: 'rgb(250, 250, 250)'}}>
        <Spinner visible={this.state.spinnerVisible} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
        <ScrollView>
          <View style={styles.container}>
            <View style={{flex: 1, width: '100%', height: 204}}>
              <LinearGradient start={[0, 1]} end={[1, 1]} colors={[secondaryColor, primaryColor]} style={styles.header}>
                <Text style={[styles.text, styles.titleText]}>Fan</Text>
              </LinearGradient>

              <View style={{position: 'absolute', width: '100%'}}>
                <View style={[styles.cardContainer, styles.statusCard]}>
                  
                  <View style={{ flexDirection: 'row' }} >
                    <View style={styles.statusCardInfo}>
                      <View style={styles.statusCardLocationInfo}>
                        <FontAwesome name={'map-marker'} style={{color: 'rgba(236, 60, 77, 0.67)'}} size={20} />
                        <Text style={[styles.text, styles.statusCardLocationTitle]}>LIVING ROOM</Text>
                      </View>
                      <View style={{ flexDirection: 'row' }} >
                        <Text style={[styles.text, styles.statusCardCurrent]}>Current</Text>
                        <Text style={[styles.text, styles.statusCardTempurature]}>27°</Text>
                      </View>
                    </View>
                    <View style={styles.statusCardImage}>
                      <Image source={require('./hatari.png')} style={{height: 70, width: 28}}/>
                    </View>
                  </View>

                  <SettingTab status={ true } onPressPower={ null } onPressSetting={ null } />
                </View>
              </View>
            </View>

            <View style={[styles.cardContainer, styles.speedCard]}>
              <Text style={[styles.text, styles.cardTitle]}>Fan Speed</Text>
              <View style={styles.speedButtonBar}>
                <View style={styles.lineButtonBar} />
                <View style={styles.buttonContainer}>
                  {this.state.speed == 1 && <TouchableOpacity onPress={() => this.changeSpeed(1)} activeOpacity={1} style={[styles.speedButton, styles.buttonActive, styles.buttonSize1]}>
                    <Image source={require('./fan.png')} style={{height: 15, width: 15}} />
                  </TouchableOpacity>}
                  {this.state.speed != 1 && <TouchableOpacity onPress={() => this.changeSpeed(1)} activeOpacity={1} style={[styles.speedButton, styles.buttonInactive, styles.buttonSize1]}>
                    <Image source={require('./fan.png')} style={{height: 15, width: 15}} />
                  </TouchableOpacity>}

                  {this.state.speed == 2 && <TouchableOpacity onPress={() => this.changeSpeed(2)} activeOpacity={1} style={[styles.speedButton, styles.buttonActive, styles.buttonSize2]}>
                    <Image source={require('./fan.png')} style={{height: 20, width: 20}} />
                  </TouchableOpacity>}
                  {this.state.speed != 2 && <TouchableOpacity onPress={() => this.changeSpeed(2)} activeOpacity={1} style={[styles.speedButton, styles.buttonInactive, styles.buttonSize2]}>
                    <Image source={require('./fan.png')} style={{height: 20, width: 20}} />
                  </TouchableOpacity>}
                  
                  {this.state.speed == 3 && <TouchableOpacity onPress={() => this.changeSpeed(3)} activeOpacity={1} style={[styles.speedButton, styles.buttonActive, styles.buttonSize3]}>
                    <Image source={require('./fan.png')} style={{height: 25, width: 25}} />
                  </TouchableOpacity>}
                  {this.state.speed != 3 && <TouchableOpacity onPress={() => this.changeSpeed(3)} activeOpacity={1} style={[styles.speedButton, styles.buttonInactive, styles.buttonSize3]}>
                    <Image source={require('./fan.png')} style={{height: 25, width: 25}} />
                  </TouchableOpacity>}
                  
                  {this.state.speed == 4 && <TouchableOpacity onPress={() => this.changeSpeed(4)} activeOpacity={1} style={[styles.speedButton, styles.buttonActive, styles.buttonSize4]}>
                    <Image source={require('./fan.png')} style={{height: 30, width: 30}} />
                  </TouchableOpacity>}
                  {this.state.speed != 4 && <TouchableOpacity onPress={() => this.changeSpeed(4)} activeOpacity={1} style={[styles.speedButton, styles.buttonInactive, styles.buttonSize4]}>
                    <Image source={require('./fan.png')} style={{height: 30, width: 30}} />
                  </TouchableOpacity>}
                </View>
              </View>
            </View>

            <View style={[styles.cardContainer, styles.timerCard]}>
              
              <Text style={[styles.text, styles.cardTitle]}>Timer</Text>
              
              <View style={styles.timerButtonBar}>
                <View style={styles.lineButtonBar} />
                <View style={styles.buttonContainer}>
                  {
                    iterator.map((index) => {
                      return (
                        <View key={index}>
                        {this.state.timer == index && 
                          <View style={styles.timerButtonContainer}>
                            <TouchableOpacity onPress={() => this.changeTimer(index)} activeOpacity={1} style={[styles.speedButton, styles.buttonActive, styles.buttonSize3]}>
                              <Image source={require('./timer.png')} style={{height: 20, width: 20}} />
                            </TouchableOpacity>
                            <Text style={[styles.text, styles.activeLabel, styles.timerLabel]}>{index}</Text>
                          </View>
                        }
                        {this.state.timer != index && 
                          <View style={styles.timerButtonContainer}>
                            <TouchableOpacity onPress={() => this.changeTimer(index)} activeOpacity={1} style={[styles.speedButton, styles.buttonInactive, styles.buttonSize3]}>
                              <Image source={require('./timer.png')} style={{height: 20, width: 20}} />
                            </TouchableOpacity>
                            <Text style={[styles.text, styles.inactiveLabel, styles.timerLabel]}>{index}</Text>
                          </View>
                        }
                        </View>
                      )
                    })
                  }
                </View>
              </View>

              <View style={styles.switchContainer}>
                <Switch onValueChange={(value) => this.toggleTimer(value)} value={this.state.isTimerOn} />
                {this.state.isTimerOn && <Text style={[styles.on, styles.text]}>On</Text>}
                {!this.state.isTimerOn && <Text style={[styles.off, styles.text]}>Off</Text>}
              </View>
            </View>

             <View style={[styles.cardContainer, styles.angleCard]}>
              <Text style={[styles.text, styles.cardTitle]}>Angle Control</Text>
              
              <View style={styles.angleButtonBar}>
                {this.state.angle != 1 && <TouchableOpacity onPress={() => this.changeAngle(1)} activeOpacity={1} style={styles.angleButtonContainer}>
                  <Text style={[styles.text, styles.inactiveLabel, styles.timerLabel, {marginBottom: 4}]}>Narrow</Text>
                  <Image source={require('./1.png')} />
                </TouchableOpacity>}
                {this.state.angle == 1 && <TouchableOpacity onPress={() => this.changeAngle(1)} activeOpacity={1} style={styles.angleButtonContainer}>
                  <Text style={[styles.text, styles.activeLabel, styles.timerLabel, {marginBottom: 4}]}>Narrow</Text>
                  <Image source={require('./4.png')} />
                </TouchableOpacity>}

                {this.state.angle != 2 && <TouchableOpacity onPress={() => this.changeAngle(2)} activeOpacity={1} style={styles.angleButtonContainer}>
                  <Text style={[styles.text, styles.inactiveLabel, styles.timerLabel, {marginBottom: 4}]}>Medium</Text>
                  <Image source={require('./2.png')} />
                </TouchableOpacity>}
                {this.state.angle == 2 && <TouchableOpacity onPress={() => this.changeAngle(2)} activeOpacity={1} style={styles.angleButtonContainer}>
                  <Text style={[styles.text, styles.activeLabel, styles.timerLabel, {marginBottom: 4}]}>Medium</Text>
                  <Image source={require('./5.png')} />
                </TouchableOpacity>}

                {this.state.angle != 3 && <TouchableOpacity onPress={() => this.changeAngle(3)} activeOpacity={1} style={styles.angleButtonContainer}>
                  <Text style={[styles.text, styles.inactiveLabel, styles.timerLabel, {marginBottom: 4}]}>Wide</Text>
                  <Image source={require('./3.png')} />
                </TouchableOpacity>}
                {this.state.angle == 3 && <TouchableOpacity onPress={() => this.changeAngle(3)} activeOpacity={1} style={styles.angleButtonContainer}>
                  <Text style={[styles.text, styles.activeLabel, styles.timerLabel, {marginBottom: 4}]}>Wide</Text>
                  <Image source={require('./6.png')} />
                </TouchableOpacity>}
              </View>

              <View style={styles.switchContainer}>
                <Switch onValueChange={(value) => this.toggleAngleMode(value)} value={this.state.angleMode} />
                {this.state.angleMode && <Text style={[styles.on, styles.text]}>On Angle control mode</Text>}
                {!this.state.angleMode && <Text style={[styles.off, styles.text]}>Off Angle Control mode</Text>}
              </View>
             </View>

            <View style={{ paddingHorizontal: 12 }} ><AppCard /></View>
          
            <View style={{ marginTop: 12, marginBottom: 12, paddingHorizontal: 12 }} ><SceneCard /></View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
