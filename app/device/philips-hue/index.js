/* @flow */

import { Button, FlatList, Image, ScrollView, Slider, StyleSheet, Switch, Text, View } from 'react-native';
import { ColorPicker, toHsv } from 'react-native-color-picker'
import React, { Component } from 'react';
import { SceneMap, TabBar, TabViewAnimated } from 'react-native-tab-view';

import AllDevice from '../alldevice';
import type { DeviceRowType } from '../alldevice';
import Spinner from 'react-native-loading-spinner-overlay';
import axios from 'axios';
import styles from './styles';
import { translate } from 'react-i18next';

@translate(['device', 'common'], { wait: true })

export default class DevicePhilipsHue extends Component {
  static navigationOptions = ({ screenProps }) => ({
    title: 'Device setting',
    headerRight: <Button title="+" onPress={()=>{}}/>,

  });

  constructor(props) {
    super(props);

    let config = {
      headers: {
        Authorization: 'Basic a3dhcm9kb206dzMzMDAxMzY='
      }
    };
    this.state = {
      isEnabled: this.props.isEnabled,
      brightnessValue: 0,
      colorValue: 0,
      status: false,
      visible: true,
      color: toHsv('green')
    };
  this.onColorChange = this.onColorChange.bind(this)
 
    axios.get('http://peahivebackend3.azurewebsites.net/api/devices/lighting/', config).then((data) => {
      console.log('get light');
      console.log(data.data.current[0]);
      this.setState({
        ...this.state,
        brightnessValue: data.data.current[0].brightness / 100,
        status: (data.data.current[0].status === 'ON'),
        visible: false,
      });
    }, (error) => {
      console.log('Error');
    });
  }
   onColorChange(color) {
    this.setState({ color })
  }
  render(): React.Element<any> {
    const { t } = this.props;
    return (
     <View style={styles.Container}>
     <ScrollView>
      <Spinner visible={this.state.visible} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
      <View style={styles.imageContainer}>
          <Image source={{ uri: 'http://i.imgur.com/UPrs1EWl.jpg' }} style={styles.image}>
            <View style={styles.headerContainer}>
              <Text style={styles.title} numberOfLines={1}>
                Phillip Hue
              </Text>
              <Text textAlign="center" style={styles.subtitle} numberOfLines={2}>
                2EVENT
              </Text>
            </View>
          </Image>
        </View>
        <View style={styles.settingContainer}>
          <Text style={styles.titlesetting} numberOfLines={1}>
                Setting
          </Text>
            <View style={styles.offonContainer}>
              <Text style={styles.titlesetting} numberOfLines={1}>
                Off/on
              </Text>
              <Switch
                value={this.state.status}
                onValueChange={() => this.setState({ status: !this.state.status })}/>
            </View>
            <View style={styles.brightnessContainer}>
              <Text style={styles.titlesetting} numberOfLines={1}>
                Brightness
              </Text>
              <Text  style={styles.titlenumpercent} numberOfLines={1}>
                {parseInt(this.state.brightnessValue*100)}%
              </Text>
            </View>
            <View style={styles.sliderContainer}>
              <Slider

              style={{ width: 250,height:15,marginLeft: 50}}
              thumbStyle ={{width: 1, height: 1}}

              value={this.state.brightnessValue}
              onValueChange={(value) => this.setState({
                ...this.state,
                brightnessValue: value
              })} />
              <Text  style={styles.titlecolor} numberOfLines={1}>
                Color
              </Text>

      <View style={{flex: 1, padding: 15,height:200, backgroundColor: '#212021'}}>
        
        <ColorPicker
          oldColor='purple'
          color={this.state.color}
          onColorChange={this.onColorChange}
          onColorSelected={color => alert(`Color selected: ${color}`)}
          onOldColorSelected={color => alert(`Old color selected: ${color}`)}
          style={{flex: 1}}
        />
      </View>



            </View>


        </View>

        <View style={styles.divider} />

        <View style={styles.scheduleContainer}>

            <View style={styles.scheduleText}>
              <Text style={styles.titlesetting} numberOfLines={1}>
                Schedule
              </Text>
              <Switch
                value={this.state.isEnabled}
                onValueChange={() => this.setState({ isEnabled: !this.state.isEnabled })}/>
            </View>
            <View style={styles.timedayContainer}>
              <Text style={styles.timetitle} numberOfLines={1}>
                09:30
              </Text>
              <Text style={styles.ampmtitle} numberOfLines={1}>
                PM
              </Text>
              <Text style={styles.daytitle} numberOfLines={1}>
                M  T  W  T  F  S  S
              </Text>


            </View>
            <View style={styles.timedayContainer}>
              <Text style={styles.timetitle} numberOfLines={1}>
                01:00
              </Text>
              <Text style={styles.ampmtitle} numberOfLines={1}>
                PM
              </Text>
              <Text style={styles.daytitle} numberOfLines={1}>
                M  T  W  T  F  S  S
              </Text>


            </View>
            <Text style={styles.roomtitle} numberOfLines={1}>
                Bedroom2
              </Text>
    


        </View>
        </ScrollView>
       
      </View>
    );
  }
}
