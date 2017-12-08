/* @flow */

import { Button, Switch, Text, TouchableOpacity, View, Image, FlatList, ImageBackground, Picker } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import React, { Component } from 'react';

import styles from './styles';
import { translate } from 'react-i18next';

import Swiper from 'react-native-swiper';

@translate(['device', 'common'], { wait: true })

export default class EVCharger extends Component {
  static navigationOptions = ({ screenProps }) => ({
    title: screenProps.t('device:evcharger'),
    headerRight: <Button title="+" onPress={() => {}} />
  });
  
  render(): React.Element<any> {
    const { t } = this.props;
    return (
      <Swiper style={styles.wrapper} showsPagination={false}>
        <Slide_1 />
        <Slide_2 />
        <Slide_3 />
        <Slide_4 />
      </Swiper>
    );
  }
}

class Slide_1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      energy: 65
    };

  }
    
  render() {

    return (
      <View style={styles.slide}>

        <View style={{flexDirection: 'row', flex: 1, justifyContent: 'center'}}>
          <View style={{padding:5, alignItems: 'center', justifyContent: 'center'}}><Text style={styles.text}>
            {(100 >= this.state.energy && this.state.energy > 80) && <FontAwesome name={'battery-full'} size={30} /> }
            {(80 >= this.state.energy && this.state.energy > 60) && <FontAwesome name={'battery-three-quarters'} size={30} /> }
            {(60 >= this.state.energy && this.state.energy > 40) && <FontAwesome name={'battery-half'} size={30} /> }
            {(40 >= this.state.energy && this.state.energy > 20) && <FontAwesome name={'battery-quarter'} size={30} /> }
            {(20 >= this.state.energy && this.state.energy >= 0) && <FontAwesome name={'battery-empty'} size={30} /> }
          </Text></View>
          <View style={{padding:5, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.text}>150 mi</Text>
          </View>
        </View>

        <View style={{flexDirection: 'column', flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
          <Text style={styles.defaultColor}>Charging</Text>
          <Text style={styles.defaultColor}>2 hr 20 min remaining</Text>
        </View>

        <View>
          <Image source={{uri: 'https://img0.gaadicdn.com/images/car-images/496x206/Hyundai/Hyundai-Verna/Hyundai-Verna-New/047.jpg' }} style={{width: 380, height: 180}} />
        </View>

        <View style={{flexDirection: 'row', flex: 1, justifyContent: 'center'}}>
          <View style={{margin:10, marginTop: 0, justifyContent: 'center', alignItems: 'center', width: 50, height: 50, borderRadius: 25, borderColor: '#4A4A4A', borderWidth: 1}}>
            <FontAwesome style={styles.defaultColor} name={'gear'} size={25} />
          </View>
          <View style={{margin:10, marginTop: 0, justifyContent: 'center', alignItems: 'center', width: 50, height: 50, borderRadius: 25, borderColor: '#4A4A4A', borderWidth: 1}}>
            <FontAwesome style={styles.defaultColor} name={'key'} size={25} />
          </View>
          <View style={{margin:10, marginTop: 0, justifyContent: 'center', alignItems: 'center', width: 50, height: 50, borderRadius: 25, borderColor: '#4A4A4A', borderWidth: 1}}>
            <FontAwesome style={styles.defaultColor} name={'unlock'} size={25} />
          </View>
        </View>

        <View style={{flex: 3}}>
          <FlatList data={[
              {key: 1, name: 'CLIMATE', describe: 'Interior: 70°F', icon: 'thermometer-half'},
              {key: 2, name: 'CONTROLS', describe: '', icon: 'car'},
              {key: 3, name: 'CHARGING', describe: '60 mi/hr', icon: 'bolt'},
              {key: 4, name: 'LOCATION', describe: '3500 Deer Creek Rd, Palo Alto', icon: 'location-arrow'},
            ]} 
            renderItem={({item}) =>
              <View style={{flexDirection: 'row'}}>
                <View style={{padding: 10, width: 50, alignItems: 'center'}}>
                  <FontAwesome style={styles.defaultColor} name={item.icon} size={25} />
                </View>
                <View style={{justifyContent: 'center', flex: 1}}>
                  <Text>{item.name}</Text>
                  {item.describe != '' && <Text style={{fontSize: 9}}>{item.describe}</Text>}
                </View>
                <View style={{justifyContent: 'center', padding: 10}}>
                  <FontAwesome style={styles.defaultColor} name={'chevron-right'} size={20} />
                </View>
              </View>
          } />
        </View>

      </View>
    );
  }
}

class Slide_2 extends Component {
    
  render() {
    return (
     <View style={styles.slide}>

        <View style={{flexDirection: 'row', flex: 2, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.defaultColor}>Interior: 70°F</Text>
        </View>

        <View>
          <Image source={{uri: 'https://img0.gaadicdn.com/images/car-images/496x206/Hyundai/Hyundai-Verna/Hyundai-Verna-New/047.jpg' }} style={{width: 380, height: 180}} />
        </View>

        <View style={{flexDirection: 'column', flex: 4, justifyContent: 'center'}}>
          <View style={{flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <FontAwesome style={[styles.defaultColor, {paddingRight: 30}]} name={'chevron-left'} size={40} />
            <Text style={[styles.defaultColor, {fontSize: 40}]}>72°</Text>
            <FontAwesome style={[styles.defaultColor, {paddingLeft: 30}]} name={'chevron-right'} size={40} />
          </View>

          <View style={{borderBottomColor: '#4A4A4A', borderBottomWidth: 0.5, margin: 20}} />

          <View style={{flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{justifyContent: 'center', alignItems: 'center', height: 50, borderColor: '#4a4a4a', borderWidth: 1, borderRadius: 5}}>
              <Text style={[{fontSize: 20, marginLeft: 20, marginRight: 20}, styles.defaultColor]}>TURN OFF</Text>
            </View>
          </View>
        </View>

      </View>
    );
  }
}

class Slide_3 extends Component {
    
  render() {
    return (
      <View style={styles.slide}>

        <View style={{flex:1}}> 
          <View style={{flex: 2}}></View>
          <View>
            <ImageBackground source={{uri: 'https://img0.gaadicdn.com/images/car-images/496x206/Hyundai/Hyundai-Verna/Hyundai-Verna-New/047.jpg' }} style={{width: 380, height: 180}} />
          </View>
          <View style={{flex: 4}}></View>
        </View>

        <View style={{width: '100%', height: '100%', flex: 1, flexDirection: 'column', justifyContent: 'flex-start', position: 'absolute', backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
          
          <View style={{flexDirection: 'column', flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 20,}}>
            <Text style={styles.defaultColor}>Charging</Text>
            <Text style={styles.defaultColor}>2 hr 20 min remaining</Text>
          </View>

          <View style={{flex: 5, flexDirection: 'column', justifyContent: 'center'}}>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', flex: 1}}>
              <Text style={[{fontSize:40}, styles.defaultColor]}>150 mi</Text>
            </View>

            <Picker selectedValue="60" style={{marginLeft: 20, marginRight: 20, height: 200}}>
              <Picker.Item label="10%" value="10" />
              <Picker.Item label="20%" value="20" />
              <Picker.Item label="30%" value="30" />
              <Picker.Item label="40%" value="40" />
              <Picker.Item label="50%" value="50" />
              <Picker.Item label="60%" value="60" />
              <Picker.Item label="70%" value="70" />
              <Picker.Item label="80%" value="80" />
              <Picker.Item label="90%" value="90" />
              <Picker.Item label="100%" value="100" />
            </Picker>

            <View style={{flex: 3, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                <View style={{padding: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  <FontAwesome name={'bolt'} style={[{paddingRight: 5}, styles.defaultColor]} />
                  <Text style={styles.defaultColor}>62 mi/hr</Text>
                </View>
                <View style={{padding: 10}}><Text style={styles.defaultColor}>240 V</Text></View>
                <View style={{padding: 10}}><Text style={styles.defaultColor}>80/80 A</Text></View>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center', height: 50, borderColor: '#4A4A4A', borderWidth: 1, borderRadius: 5}}>
                <Text style={[{fontSize: 20, marginLeft: 20, marginRight: 20}, styles.defaultColor]}>STOP CHARGING</Text>
              </View>
            </View>

          </View>

        </View>

      </View>
    );
  }
}

class Slide_4 extends Component {

  render() {
    let isLock = false;

    return (
      <View style={styles.slide}>

        <View style={{flex:1}}> 
          <View style={{flex: 2}}></View>
          <View>
            <ImageBackground source={{uri: 'https://img0.gaadicdn.com/images/car-images/496x206/Hyundai/Hyundai-Verna/Hyundai-Verna-New/047.jpg' }} style={{width: 380, height: 180}} />
          </View>
          <View style={{flex: 4}}></View>
        </View>

        <View style={{width: '100%', height: '100%', flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', position: 'absolute', backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
          <View style={{flex: 1}} />
          <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            {isLock && <FontAwesome style={[{paddingBottom: 5}, styles.defaultColor]} name={'lock'} size={20}/>}
            {!isLock && <FontAwesome style={[{paddingBottom: 5}, styles.defaultColor]} name={'unlock'} size={20}/>}

            {isLock && <View style={{justifyContent: 'center', alignItems: 'center', height: 50, borderColor: '#000', borderWidth: 1, borderRadius: 5}}>
                <Text style={[{fontSize: 20, marginLeft: 20, marginRight: 20}, styles.defaultColor]}>UNLOCK</Text>
              </View>}
            {!isLock && <View style={{justifyContent: 'center', alignItems: 'center', height: 50, borderColor: '#000', borderWidth: 1, borderRadius: 5}}>
                <Text style={[{fontSize: 20, marginLeft: 20, marginRight: 20}, styles.defaultColor]}>LOCK</Text>
              </View>}            
          </View>

          <View style={{width: '95%',borderBottomColor: '#4a4a4a', borderBottomWidth: 0.5, marginBottom: 10}} />

          <View style={{flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Text style={styles.defaultColor}>FLASH</Text>
              <View style={{margin:10, marginTop: 0, justifyContent: 'center', alignItems: 'center', width: 50, height: 50, borderRadius: 25, borderColor: '#000', borderWidth: 1}}>
                <FontAwesome style={styles.defaultColor} name={'sun-o'} size={25} />
              </View>
            </View>

            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Text style={styles.defaultColor}>HONK</Text>
              <View style={{margin:10, marginTop: 0, justifyContent: 'center', alignItems: 'center', width: 50, height: 50, borderRadius: 25, borderColor: '#000', borderWidth: 1}}>
                <FontAwesome style={styles.defaultColor} name={'volume-up'} size={25} />
              </View>
            </View>

            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Text style={styles.defaultColor}>START</Text>
              <View style={{margin:10, marginTop: 0, justifyContent: 'center', alignItems: 'center', width: 50, height: 50, borderRadius: 25, borderColor: '#000', borderWidth: 1}}>
                <FontAwesome style={styles.defaultColor} name={'key'} size={25} />
              </View>
            </View>
          </View>

          <View style={{width: '95%',borderBottomColor: '#4A4A4A', borderBottomWidth: 0.5, marginBottom: 10}} />

          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.defaultColor}>VELET MODE</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Switch></Switch>
            </View>
          </View>
          <View style={{flex: 1}}></View> 
        </View>

      </View>
    );
  }
}