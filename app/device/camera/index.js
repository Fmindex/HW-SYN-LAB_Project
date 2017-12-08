import React, { Component } from 'react';
import { Image, Button, View, Text, ScrollView, TouchableOpacity, Switch } from 'react-native';
import appStyles, { primaryColor, secondaryColor } from '../../common/styles';
import { SettingTab, AppCard, SceneCard } from '../../common/device-setting';
import { LinearGradient } from 'expo';
import styles from './styles';
import { FontAwesome } from '@expo/vector-icons';

import { translate } from 'react-i18next';
@translate(['device', 'common'], { wait: true })

export default class DeviceCamera extends Component {

  static navigationOptions = ({ screenProps }) => ({
    title: screenProps.t('device:camera'),
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
      sound: true,
      lens: true,
      timer: true,
      mic: true,
      share: true,
      active: true,
    };

    this.toggleSound = this.toggleSound.bind(this);
    this.toggleLens = this.toggleLens.bind(this);
    this.toggleTimer = this.toggleTimer.bind(this);
    this.toggleMic = this.toggleMic.bind(this);
    this.toggleShare = this.toggleShare.bind(this);
    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleSound() {
    this.setState({
      sound: !this.state.sound,
    });
  }

  toggleLens() {
    this.setState({
      lens: !this.state.lens,
    });
  }

  toggleTimer() {
    this.setState({
      timer: !this.state.timer,
    });
  }

  toggleMic() {
    this.setState({
      mic: !this.state.mic,
    });
  }

  toggleShare() {
    this.setState({
      share: !this.state.share,
    });
  }

  toggleActive() {
    this.setState({
      active: !this.state.active,
    });
  }

  renderStatusCard() {
    return (
      <View style={[styles.card, {height: 152, justifyContent: 'space-between', flexDirection: 'column'}]}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.statusInfo}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.deviceName}>Smart camera</Text>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 5}}>
              <FontAwesome name={'map-marker'} style={{color: 'rgba(236, 60, 77, 0.67)'}} size={20} />
              <Text style={styles.locationName}>Living room</Text>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 5}}>
              <FontAwesome name={'signal'} style={{color: '#07e192'}} size={20} />
              <Text style={styles.connectStatus}>Connected</Text>
            </View>
          </View>

          <View style={styles.deviceImage}>
            <Image source={require('./camera-icon.png')} style={styles.cameraIcon} />
          </View>
        </View>

        <SettingTab status={ true } onPressPower={ null } onPressSetting={ null } />
      </View>
    );
  }

  renderCameraCard() {
    return (
      <View style={{height: 313}}>
        <Image source={require('./view.png')} style={[{width: '100%', height: '100%'}, styles.card]} />
        <View style={styles.toolsContainer}>
          <View style={styles.toolsAbsolute}>

            <Scaler style={{width: '100%'}}/>

            <View style={styles.toolsBar}>
              
              <TouchableOpacity style={{width: 25}} activeOpacity={1} onPress={() => this.toggleSound()}>
                { this.state.sound && <Image source={require('./sound.png')} style={{width: 22.4, height: 16}} /> }
                { !this.state.sound && <Image source={require('./no-sound.png')} style={{width: 22.4, height: 16}} /> }
              </TouchableOpacity>

              <TouchableOpacity style={styles.toolButton} activeOpacity={1} onPress={() => this.toggleLens()}>
                { this.state.lens && <Image source={require('./lens.png')} style={{width: 20, height: 20}} /> }
                { !this.state.lens && <Image source={require('./no-lens.png')} style={{width: 20, height: 20}} /> }
              </TouchableOpacity>

              <TouchableOpacity style={styles.toolButton} activeOpacity={1} onPress={() => this.toggleTimer()}>
                { this.state.timer && <Image source={require('./timer.png')} style={{width: 18, height: 18}} /> }
                { !this.state.timer && <Image source={require('./no-timer.png')} style={{width: 18, height: 18}} /> }
              </TouchableOpacity>

              <TouchableOpacity style={styles.toolButton} activeOpacity={1} onPress={() => this.toggleMic()}>
                { this.state.mic && <Image source={require('./mic.png')} style={{width: 12.5, height: 20}} /> }
                { !this.state.mic && <Image source={require('./no-mic.png')} style={{width: 16.5, height: 20}} /> }
              </TouchableOpacity>

              <TouchableOpacity style={styles.toolButton} activeOpacity={1} onPress={() => this.toggleShare()}>
                { this.state.share && <Image source={require('./share.png')} style={{width: 20, height: 16.5}} /> }
                { !this.state.share && <Image source={require('./no-share.png')} style={{width: 20, height: 16.5}} /> }
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }

  render(): React.Element<any> {

    return (
      <View style={styles.container}>
        <LinearGradient start={[0, 1]} end={[1, 1]} colors={[secondaryColor, primaryColor]} style={styles.header} />
        <ScrollView style={styles.content}>
          {this.renderStatusCard()}
          {this.renderCameraCard()}

          <View style={{ paddingHorizontal: 12 }} ><AppCard /></View>
          <View style={{ marginTop: 12, marginBottom: 12, paddingHorizontal: 12 }} ><SceneCard /></View>

        </ScrollView>
      </View>
    );
  }
}

class Scaler extends Component {

  render() {
    let ticks = [];

    for(let i = 0; i <= 50; i++) {
      if(i%5 == 0) ticks.push(<View key={i} style={styles.Tick} />);
      else ticks.push(<View key={i} style={styles.subTick} />);
    }

    return (
      <View style={styles.scalerContainer}>
        <View style={styles.scalerCircle}>
          <Text style={[styles.text, styles.scalerLabel]}>-</Text>
        </View>
        <ScrollView horizontal={true} bounces={false} showsHorizontalScrollIndicator={false} style={{flexDirection: 'row', marginLeft: 8.5, marginRight: 8.5}}>
          {
            ticks.map((data) => {
              return data;
            })
          }
        </ScrollView>
        <View style={styles.scalerCircle}>
          <Text style={[styles.text, styles.scalerLabel]}>+</Text>
        </View>
      </View>
    );
  }
}
