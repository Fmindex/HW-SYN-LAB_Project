/* @flow */

import { Button, Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome, Foundation, Ionicons } from '@expo/vector-icons';
import appStyles, { accented1Color, accented2Color, primaryColor, secondaryColor, tertiaryTextColor } from '../../common/styles';
import { SettingTab, AppCard, SceneCard } from '../../common/device-setting';

import Icon from '../../common/icon';
import { LinearGradient } from 'expo';
import React from 'react';
import axios from 'axios';
import moment from 'moment';
import Spinner from 'react-native-loading-spinner-overlay';
import styles from './styles';
import { translate } from 'react-i18next';
const { width: viewportWidth } = Dimensions.get('window');
type ReportType = { title: string, value: number, unit: 'kWh' | 'THB' };

@translate(['energy', 'common'], { wait: true })
export default class air extends React.Component {
  static navigationOptions = ({ screenProps }) => ({
    title: screenProps.t('Air Condition'),
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
      setTemp: '--',
      temp: '--',
      mode: 1,
      isActive: false,
      spinnerVisible: true,
    };

    let config = {
      headers: {
        Authorization: 'Basic a3dhcm9kb206dzMzMDAxMzY='
      }
    };

    axios.get('http://peahivebackend3.azurewebsites.net/api/devices/airconditioner/', config).then((data) => {
      this.setState({
        ...this.state,
        setTemp: data.data.current[0].set_temperature,
        mode: data.data.current[0].mode,
        temp: data.data.current[0].current_temperature,
        isActive: (data.data.current[0].status === 'ON'),
        spinnerVisible: false,
      });
    }, (error) => {
      console.log('Error');
    });

    this.increaseTemp = this.increaseTemp.bind(this);
    this.decreaseTemp = this.decreaseTemp.bind(this);
    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive() {
    this.setState({
      ...this.state,
      isActive: !this.state.isActive
    });
  }
  changeMode(value) {
    this.setState({
      ...this.state,
      mode: value
    });
  }
  increaseTemp() {
      console.log('jdslkasjdlkasjdklsad');
    this.setState({
      ...this.state,
      setTemp: this.state.setTemp + 1
    });
  }
  decreaseTemp() {
    this.setState({
      ...this.state,
      setTemp: this.state.setTemp - 1
    });
  }

  _renderAir = (
    room: string,
    area: string,
    temperature: number,
  ) =>
    <View style={[styles.card, styles.weather]}>
      
      <View style={{ flexDirection: 'row' }} >
        <View style={styles.column}>
          <View>
            <View style={{flexDirection:'row'}}>
              <FontAwesome name={'map-marker'} style={{color: 'rgba(236, 60, 77, 0.67)',marginTop:9,marginLeft:11}} size={20} />
              <Text style={[appStyles.header, styles.city,{marginLeft:8}]}>
                {room.toUpperCase()}
              </Text>
            </View>
            <Text style={{marginLeft:29,color:'rgb(155, 155, 155)'}}>
              {area}
            </Text>
            <Text style={{ fontSize: 36,color: 'rgb(110,110,110)',marginLeft :50}}>
              {temperature}º
            </Text>
          </View>
          <View style={appStyles.space} />
        </View>

        <Image style={{ width:169, height:55, marginLeft:48, marginTop: 16 }} source={require('./Airicon.png')} />
      </View>

      <SettingTab status={ true } onPressPower={ null } onPressSetting={ null } />

    </View>;
  _renderControl = (

    temperature: number,
  ) =>
    <View style={[styles.card, styles.Control]}>
      <View style={[appStyles.center]}>
        <View>
          <Image style={{width:280,height:250,marginTop:64,marginTop:35}} source={require('./range25.png')} />
        <View style ={{alignItems:'center'}}>

          <Text style={{textAlign : 'center',fontSize:24,color :'rgb(73,73,73)',marginTop:-280}}>
            Control
          </Text>
          <TouchableOpacity onPress={() => this.increaseTemp()} >
            <Image style={{width: 33, height: 33,marginTop:40,marginLeft:-15,position:'absolute'}} source={require('./iconincrease.png')} />
          </TouchableOpacity>
        </View>
        <View style ={{alignItems:'center',position:'absolute'}}>
          <Image style={{width: 36, height: 36,marginTop:48,marginLeft:62}} source={require('./coolon.png')} />
        </View>
        <View style ={{alignItems:'center'}}>
          <Text style={{textAlign : 'center',fontSize:60,color :'rgb(73,73,73)',letterSpacing:0.6,marginTop:-165}}>
            {temperature}
          </Text>
          </View>
          <Text style={[styles.caption,{marginTop:190,marginLeft:101,position:'absolute'}]}>
            Set point
          </Text>
          <View style ={{alignItems:'center'}}>
          <TouchableOpacity onPress={() => this.decreaseTemp()} >
            <Image style={{width: 33, height: 33,marginTop:-40,marginLeft:-15,position:'absolute',alignItems:'center'}} source={require('./iconreduce.png')} />
          </TouchableOpacity>
          <View style ={{flexDirection:'row'}}>
            <Text style={{textAlign : 'center',color:'rgb(74,65,194)',fontSize:18,letterSpacing:0.6,marginTop:-20,marginLeft:6}}>
              18
            </Text>
            <Text style={{textAlign : 'center',color:'rgb(46,180,255)',fontSize:18,letterSpacing:0.6,marginTop:-20,marginLeft:100}}>
              32
            </Text>
            </View>
          </View>
        </View>

      </View>

      <View style={[appStyles.row, { alignItems: 'center' ,justifyContent : 'space-around',marginTop:10}]}>

                 <View style={styles.column}>
                 {this.state.mode == 1 && <TouchableOpacity onPress={() => this.changeMode(1)} activeOpacity={1} style={styles.column}>
                   <Image style={{width: 50, height: 50,marginTop:10}} source={require('./coolon.png')} />
                   <Text style={styles.captionActive} >
                       Cool
                   </Text>
                 </TouchableOpacity>}
                 {this.state.mode != 1 && <TouchableOpacity onPress={() => this.changeMode(1)} activeOpacity={1} style={styles.column}>
                   <Image style={{width: 50, height: 50,marginTop:10}} source={require('./cooloff.png')} />
                   <Text style={[styles.caption]}>Cool</Text>
                 </TouchableOpacity>}
                 </View>
                 <View style={styles.column}>
                 {this.state.mode == 2 && <TouchableOpacity onPress={() => this.changeMode(2)} activeOpacity={1} style={styles.column}>
                   <Image style={{width: 50, height: 50,marginTop:10}} source={require('./dryon.png')} />
                   <Text style={styles.captionActive} >
                       Dry
                   </Text>
                 </TouchableOpacity>}
                 {this.state.mode != 2 && <TouchableOpacity onPress={() => this.changeMode(2)} activeOpacity={1} style={styles.column}>

                   <Image style={{width: 50, height: 50,marginTop:10}} source={require('./dryoff.png')} />
                   <Text style={styles.caption} >
                       Dry
                   </Text>
                 </TouchableOpacity>}

                 </View>
                 <View style={styles.column}>
                 {this.state.mode == 3 && <TouchableOpacity onPress={() => this.changeMode(3)} activeOpacity={1} style={styles.column}>
                   <Image style={{width: 50, height: 50,marginTop:10}} source={require('./ecoon.png')} />
                   <Text style={styles.captionActive} >
                       Eco
                   </Text>
                 </TouchableOpacity>}
                 {this.state.mode != 3 && <TouchableOpacity onPress={() => this.changeMode(3)} activeOpacity={1} style={styles.column}>

                   <Image style={{width: 50, height: 50,marginTop:10}} source={require('./ecooff.png')} />
                   <Text style={styles.caption} >
                       Eco
                   </Text>
                 </TouchableOpacity>}
                 </View>
                 <View style={styles.column}>
                 {this.state.mode == 4 && <TouchableOpacity onPress={() => this.changeMode(4)} activeOpacity={1} style={styles.column}>
                   <Image style={{width: 50, height: 50,marginTop:10}} source={require('./fanon.png')} />
                   <Text style={styles.captionActive} >
                       Fan
                   </Text>
                 </TouchableOpacity>}
                 {this.state.mode != 4 && <TouchableOpacity onPress={() => this.changeMode(4)} activeOpacity={1} style={styles.column}>

                   <Image style={{width: 50, height: 50,marginTop:10}} source={require('./fanoff.png')} />
                   <Text style={styles.caption} >
                       Fan
                   </Text>
                 </TouchableOpacity>}
                 </View>

            </View>
    </View>;

  _renderHeader = (image: string) =>
    <View style={[appStyles.card, styles.noBorder]}>
      <Image style={styles.switchContainer} source={{ uri: image }}>
        <View>
          <Text style={[styles.switchTitle, styles.awayText]}>{this.props.t('home:away').toUpperCase()}</Text>
          <Text style={styles.awayText}>{this.props.t('home:away_description')}</Text>
        </View>
        <View style={[appStyles.space]}></View>
      </Image>
    </View>;

  render(): React.Element<any> {
    const { t, navigation } = this.props;
    const { navigate } = navigation;

    return (
       <View style={styles.container}>
        <Spinner visible={this.state.spinnerVisible} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
        <LinearGradient start={[0, 1]} end={[1, 1]} colors={[secondaryColor, primaryColor]} style={styles.header} />
        <ScrollView style={styles.content}>
          <View>
            {this._renderAir(
              'LIVING ROOM',
              'Current',
              this.state.temp,
            )}
              {this._renderControl(
              this.state.setTemp,
            )}
            <View style={{ marginTop: 12 }} >
              <AppCard />
            </View>

            <View style={{ marginTop: 12, marginBottom: 12 }} >
              <SceneCard />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
