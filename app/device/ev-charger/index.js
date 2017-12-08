import React, { Component } from 'react';
import { Image, Button, View, Text, ScrollView, TouchableOpacity, Switch } from 'react-native';
import appStyles, { primaryColor, secondaryColor } from '../../common/styles';
import { SettingTab, AppCard, SceneCard } from '../../common/device-setting';
import { LinearGradient } from 'expo';
import styles from './styles';
import { FontAwesome } from '@expo/vector-icons';

import { translate } from 'react-i18next';
@translate(['device', 'common'], { wait: true })

export default class DeviceEVCharger extends Component {

  static navigationOptions = ({ screenProps }) => ({
    title: screenProps.t('device:ev_charger'),
    headerTitleStyle: { color: 'white', fontSize: 18 },
    headerStyle: {
      position: 'absolute',
      backgroundColor: 'transparent',
      zIndex: 100,
      top: 0,
      left: 0,
      right: 0,
      borderBottomWidth: 0,
    },
  });

  constructor(props) {
    super(props);

    this.state = {
      energy: 35,
    };
  }
  
  renderStatusCard() {
    return (
      <View style={[styles.card, {height: 152, justifyContent: 'space-between', flexDirection: 'column'}]}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.statusInfo}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.deviceName}>EV link</Text>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 5}}>
              <Text style={styles.locationName}>Nissan Leaf</Text>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 5}}>
              <Text style={styles.connectStatus}>Ready for charge</Text>
            </View>
          </View>

          <View style={styles.deviceImage}>
            <Image source={require('./device.png')} style={styles.deviceIcon} />
          </View>
        </View>

        <SettingTab status={ true } onPressPower={ null } onPressSetting={ null } />
      </View>
    );
  }

  renderInfoCard() {
    return (
      <View style={[styles.card, {height: 250}]}>
        <View style={{flexDirection: 'column', alignItems: 'center', width: '100%', paddingTop: 10}}>
          <View style={{flexDirection: 'row'}}>
            {(100 >= this.state.energy && this.state.energy > 80) && <FontAwesome style={{color: 'rgb(74, 74, 74)', marginTop: 5}} name={'battery-full'} size={20} /> }
            {(80 >= this.state.energy && this.state.energy > 60) && <FontAwesome style={{color: 'rgb(74, 74, 74)', marginTop: 5}} name={'battery-three-quarters'} size={20} /> }
            {(60 >= this.state.energy && this.state.energy > 40) && <FontAwesome style={{color: 'rgb(74, 74, 74)', marginTop: 5}} name={'battery-half'} size={20} /> }
            {(40 >= this.state.energy && this.state.energy > 20) && <FontAwesome style={{color: 'rgb(74, 74, 74)', marginTop: 5}} name={'battery-quarter'} size={20} /> }
            {(20 >= this.state.energy && this.state.energy >= 0) && <FontAwesome style={{color: 'rgb(74, 74, 74)', marginTop: 5}} name={'battery-empty'} size={20} /> }
            <Text style={[styles.text, {fontSize: 24, color: 'rgb(74, 74, 74)', paddingLeft: 10}]}>150 mi</Text>
          </View>
          <Image source={require('./car.png')} style={{height: 142.5, width: 228}} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 230, paddingTop: 7}}>
            <TouchableOpacity>
              <Image source={require('./lock.png')} style={{height: 52, width: 52}} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./engine.png')} style={{height: 52, width: 52}} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./gear.png')} style={{height: 45, width: 45}} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  renderTempCard() {
    return (
      <View style={[styles.card, {height: 120, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '100%'}]}>
        <View style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row'}}>
            <Image source={require('./temp-icon.png')} style={{width: 20, height: 40}} />
            <View style={{flexDirection: 'column', paddingLeft: 10}}> 
              <Text style={[styles.text, {fontSize: 20, color: 'rgb(0, 177, 254)', marginBottom: 5}]}>CLIMATE</Text>
              <Text style={[styles.text, {fontSize: 12, color: 'rgb(0, 177, 254)'}]}>Interior: 26 °C</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', paddingLeft: 30, paddingTop: 10, alignItems: 'flex-end'}}>
            <Switch />
            <Text style={[styles.text, {fontSize: 12, color: 'rgb(75, 75, 75)', marginLeft: 10}]}>On</Text>
          </View>
        </View>

        <View style={[{flexDirection: 'row'}, styles.center]}>
          <TouchableOpacity>
            <FontAwesome name={'chevron-left'} style={{color: '#4b89dc'}} size={24} />
          </TouchableOpacity>
          <View style={[{flexDirection: 'column', marginLeft: 15, marginRight: 15}, styles.center]}>
            <Text style={[styles.text, {fontSize: 12, color: 'rgb(75, 75, 75)'}]}>Temp Setting</Text>
            <Text style={[styles.text, {fontSize: 36, color: 'rgb(0, 177, 254)'}]}>22</Text>
            <Text style={[styles.text, {fontSize: 12, color: 'rgb(175, 175, 175)'}]}>Set point °C</Text>
          </View>
          <TouchableOpacity>
            <FontAwesome name={'chevron-right'} style={{color: '#4b89dc'}} size={24} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  renderControlCard() {
    return (
      <View style={[styles.card, {height: 120, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '100%'}]}>
        
        <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 20}}>
          <Image source={require('./car-icon.png')} style={{width: 30, height: 22.8}} />
          <View style={{flexDirection: 'column', paddingLeft: 10}}> 
            <Text style={[styles.text, {fontSize: 20, color: 'rgb(74, 74, 74)', marginBottom: 5}]}>CONTROLS</Text>

            <View style={{flexDirection: 'row', paddingTop: 10, alignItems: 'flex-end'}}>
              <Switch />
              <Text style={[styles.text, {fontSize: 12, color: 'rgb(75, 75, 75)', marginLeft: 10}]}>Lock</Text>
            </View>
          </View>
        </View>

        <View style={[{flexDirection: 'row'}, styles.center]}>
          <TouchableOpacity>
            <Image source={require('./light.png')} style={{width: 45, height: 45, margin: 5}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('./horn.png')} style={{width: 45, height: 45, margin: 5}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('./engine-2.png')} style={{width: 45, height: 45, margin: 5}} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  renderChargingCard() {
    return (
      <View style={[styles.card, {height: 120, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '100%'}]}>
        
        <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 20}}>
          <Image source={require('./battery.png')} style={{width: 20, height: 43.8}} />
          <View style={{flexDirection: 'column', paddingLeft: 10}}> 
            <Text style={[styles.text, {fontSize: 20, color: 'rgb(74, 74, 74)', marginBottom: 5}]}>CHARGING</Text>

            <View style={{flexDirection: 'row', paddingTop: 10, alignItems: 'flex-end'}}>
              <Switch />
              <Text style={[styles.text, {fontSize: 12, color: 'rgb(75, 75, 75)', marginLeft: 10}]}>Start</Text>
            </View>
          </View>
        </View>

        <View style={[{flexDirection: 'column'}, styles.center]}>
          <View style={{flexDirection: 'row'}}>
            <FontAwesome name={'bolt'} style={{color: '#faaf40'}} size={18} />
            <Text style={{fontSize: 18, color: '#faaf40', marginLeft: 5}}>240 V</Text>
            <Text style={{fontSize: 18, color: '#faaf40', marginLeft: 13}}>80 A</Text>
          </View>
          <Text style={[styles.text, {fontSize: 36, color: 'rgb(74, 74, 74)'}]}>60 %</Text>
          <Text style={[styles.text, {fontSize: 16, color: 'rgb(74, 74, 74)'}]}>2 hr 20 min remainig</Text>
        </View>
      </View>
    );
  }

  renderLocationCard() {
    return (
      <View style={[styles.card, {height: 70, flexDirection: 'row', alignItems: 'center', width: '100%'}]}>
        <Image source={require('./pin.png')} style={{marginLeft: 25, width: 25, height: 25.1}} />
        <View style={{flexDirection: 'column', marginLeft: 15}}>
          <Text style={[styles.text, {fontSize: 20, color: 'rgb(74, 74, 74)', marginBottom: 5}]}>LOCATION</Text>
          <Text style={[styles.text, {fontSize: 12, color: 'rgb(74, 74, 74)'}]}>200 Ngamwongwan Rd, Bangkok</Text>
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
          {this.renderInfoCard()}
          {this.renderTempCard()}
          {this.renderControlCard()}
          {this.renderChargingCard()}
          {this.renderLocationCard()}
        </ScrollView>
      </View>
    );
  }
}
