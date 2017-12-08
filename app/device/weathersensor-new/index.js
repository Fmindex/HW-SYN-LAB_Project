/* @flow */

import { AppCard, SceneCard, SettingTab } from '../../common/device-setting';
import { Button, Image, ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react';
import appStyles, { primaryColor, secondaryColor } from '../../common/styles';

import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo';
import Spinner from 'react-native-loading-spinner-overlay';
import axios from 'axios';
import styles from './styles';
import { translate } from 'react-i18next';

export default class DeviceCamera extends Component {


  constructor(props) {
    super(props);
    this.state = {
      status: 1,
      co2: '--',
      // lively: 60,
      today: {
        type: 'rain',
        tempCurrent: '--',
        tempMax: 30,
        tempMin: 26,
        pressure: '--',
        outdoorTemp: 28,
        humidity: '--',
        noise: '--'
      },
      days: [
        {
          type: 'rain',
          tempMax: 32,
          tempMin: 26,
          name: 'Mon',
          date: '28 Aug',
        },
        {
          type: 'thunder',
          tempMax: 33,
          tempMin: 26,
          name: 'Tue',
          date: '29 Aug',
        },
        {
          type: 'cloudy',
          tempMax: 33,
          tempMin: 26,
          name: 'Wed',
          date: '30 Aug',
        },
        {
          type: 'normal',
          tempMax: 34,
          tempMin: 26,
          name: 'Thu',
          date: '31 Aug',
        },
      ],
      getWeather: false,
      getCondition: false,
      getForecast: false,
      spinnerVisible: false,
    };
    // let config = {
    //   headers: {
    //     Authorization: 'Basic a3dhcm9kb206dzMzMDAxMzY=',
    //   }
    // };
    // axios.get('http://peahivebackend3.azurewebsites.net/api/devices/weathersensor/', config).then((data) => {
    //   let newToday = this.state.today;
    //   newToday.tempCurrent = data.data.current[0].temperature;
    //   newToday.humidity = data.data.current[0].humidity;
    //   newToday.pressure = data.data.current[0].pressure;
    //   newToday.noise = data.data.current[0].noise;

    //   this.setState({
    //     ...this.state,
    //     co2: data.data.current[0].co2,
    //     today: newToday,
    //     getWeather: true,
    //   });

    //   if(this.state.getCondition && this.state.getForecast) {
    //     this.setState({
    //       ...this.state,
    //       spinnerVisible: false,
    //     });
      }

    // }, (error) => {
    //   console.log('Error');
    // });

 

  drawTodayIcon(type) {
    let image = null;
    if(type == 'rain') image = <Image source={require('./rain-white.png')} style={{width: 70, height: 70}} />;
    else if(type == 'thunder') image = <Image source={require('./thunder-white.png')} style={{width: 70, height: 76}} />;
    else if(type == 'cloudy') image = <Image source={require('./cloudy-white.png')} style={{width: 70, height: 56}} />;
    else if(type == 'normal') image = <Image source={require('./normal-white.png')} style={{width: 70, height: 53.5}} />;
    else if(type == 'sunny') image = <Image source={require('./sunny-white.png')} style={{width: 70, height: 70}} />;
    else image = <Image source={{uri: type}} style={{width: 40, height: 40}} />;
    // image = <Image source={require('./rain-white.png')} style={{width: 70, height: 70}} />;
    return <View style={{paddingTop: 13}}>{image}</View>;
  }

  drawDayIcon(type) {
    console.log('drawDayIcon '+type);
    let image = null;
    if(type == 'rain') image = <Image source={require('./rain-white.png')} style={{width: 40, height: 40}} />;
    if(type == 'thunder') image = <Image source={require('./thunder.png')} style={{width: 40, height: 43.5}} />;
    if(type == 'cloudy') image = <Image source={require('./cloudy.png')} style={{width: 40, height: 32}} />;
    if(type == 'normal') image = <Image source={require('./normal.png')} style={{width: 40, height: 30.5}} />;
    if(type == 'sunny') image = <Image source={require('./sunny.png')} style={{width: 40, height: 40}} />;
    else image = <Image source={{uri: type}} style={{width: 40, height: 40}} />;

    return <View style={{paddingTop: 13, height: 55, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>{image}</View>;
  }

  renderTodayCard() {
    return (
      <View style={styles.todayContainer}>
        <Spinner visible={this.state.spinnerVisible} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
        <LinearGradient start={[0, 1]} end={[0, 0]} colors={['rgb(61, 182, 250)', 'rgb(130, 210, 236)']} style={[styles.todayBackground, styles.card]} />
        <View style={styles.todayContent}>
          <View style={styles.todayTemperature}>
            {this.drawTodayIcon(this.state.today.type)}
            <Text style={[styles.text, styles.todayTempCurrent]}>{this.state.today.tempCurrent}˚</Text>
            <View style={styles.todayMinMax}>
              <Text style={[styles.text, styles.todayMinMaxLabel]}>HUMIDITY</Text>
              <Text style={[styles.text, styles.todayMinMaxLabel]}>{this.state.today.humidity} %</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  renderAlertCard() {
    if(this.state.status==0) {
      return (
        <View style={[styles.card, {flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 289, backgroundColor: 'rgba(247, 102, 73, 0.27)'}]} >
          <Image source={require('./orange.png')} style={{width: 150, height: 150}} />
          <Text style={{marginTop: 2, fontSize: 24, color: 'rgb(74, 74, 74)'}}>CLOSE</Text>
        </View>
      );
    }
    else if(this.state.status==1){
      return (
        <View style={[styles.card, {flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 289, backgroundColor: 'rgba(140, 193, 79, 0.35)'}]} >
          <Image source={require('./green.png')} style={{width: 150, height: 150}} />
          <Text style={{marginTop: 2, fontSize: 24, color: 'rgb(74, 74, 74)'}}>OPEN</Text>
        </View>
      );
    }
    if(this.state.status==3) {
      return (
        <View style={[styles.card, {flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 289, backgroundColor: 'rgba(175, 175, 175, 0.3)'}]} >
          <Image source={require('./gray.png')} style={{width: 150, height: 150}} />
          <Text style={{marginTop: 2, fontSize: 24, color: 'rgb(74, 74, 74)'}}>CLOSE</Text>
          <View style={{position:'absolute',alignItems:'flex-end',flexDirection:'column',width:'100%',paddingRight:14}}>
              <Switch
                  value={this.state.status==3}
                  style={{marginTop:230,paddingRight:15}}
                  onValueChange={() => this.setState({ status:2 })}/>
                  <Text style={{marginTop: 2,marginLeft:8, opacity: 0.8, fontSize: 14,fontWeight:'600', color: 'rgb(175, 175, 175)'}}>On Device</Text>
          </View>
        </View>
      );
    }
  }


  renderStatusCard() {
    return (
      <View style={[styles.card, {height: 48, justifyContent: 'space-between', flexDirection: 'column'}]}>
        <SettingTab status={ this.state.status } onPressPower={ () => this.setState({ status: !this.state.status }) } onPressSetting={ null } />
      </View>
    );
  }

  render(): React.Element<any> {

    return (
      <View style={styles.container}>
        <LinearGradient start={[0, 1]} end={[1, 1]} colors={[secondaryColor, primaryColor]} style={styles.header} />
        <Text style={{ 
          fontSize: 24,
          color: 'white',
          position: 'absolute',
          backgroundColor: 'transparent',
          zIndex: 100,
          marginTop: 32
        }}>
          SmartRao
        </Text>
        <View style={styles.content}>
          
          {this.renderTodayCard()}
          {this.renderAlertCard()}
          {this.renderStatusCard()}
        </View>
      </View>
    );
  }
}
