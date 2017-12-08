/* @flow */

import { ActivityIndicator, Button, FlatList, Image, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import appStyles, { accented1Color, accented2Color, primaryColor, secondaryColor, tertiaryTextColor } from '../../common/styles';
import type, { DeviceRowType } from '../row';

import DeviceRow from '../row';
import { LinearGradient } from 'expo';
import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import axios from 'axios';
import { translate } from 'react-i18next';

@translate(['device', 'common'], { wait: true })
export default class AllDevice extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: screenProps.t('device:title')
  });

  devices: DeviceRowType[] = [];

  constructor(props) {
    super(props);
    let config = {
      headers: {
        Authorization: 'Basic cGVhaGl2ZToyOFNlcDE5NjA=',
      }
    };
    this.state = {
      devices: [],
      refreshing: false,
      visible: true,
    };
    axios.get('http://peahivebackend3.azurewebsites.net/api/devices/', config).then((data) => {
    //     let dd = [];
    //   data.data.devices.map((device) => {
    //     dd.push({
    //         device_name: device.device_name,
    //         image: device.image,
    //         device_model_id: device.device_model_id,
    //         status: device.status,
    //     })
    //   });
    //   console.log(dd);
      this.setState({
        ...this.state,
        devices: data.data.devices,
        visible: false,
      });
    }, (error) => {
      console.log('error');
    });
  }

  _onRefresh() {
     this.setState({
         ...this.state,
         refreshing: true
     });
     let config = {
       headers: {
         Authorization: 'Basic cGVhaGl2ZToyOFNlcDE5NjA=',
       }
     };
     axios.get('http://peahivebackend3.azurewebsites.net/api/devices/', config).then((data) => {
       this.setState({
           devices: data.data.devices,
           refreshing: false,
       });
     });
   }

   _keyExtractor = (item, index) => index;
    render(): React.Element<any> {
        let isVisible = this.state.visible;
    return (
            isVisible === true ?
            <View style={[styles.container, appStyles.center]}>
              <ActivityIndicator/>
            </View>
            :
            <View>
            <ScrollView 
              style={{ height: 464, overflow: 'scroll' }}
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this._onRefresh.bind(this)}
                />
              }
              >
              <FlatList
                keyExtractor={this._keyExtractor}
                data={this.state.devices}
                renderItem={renderItem => <DeviceRow {...renderItem.item} navigation={this.props.navigation} />}
              />
            </ScrollView>
            <View style={{ alignContent: 'center', alignItems: 'center', backgroundColor: 'white', borderTopWidth: 1,borderTopColor: 'rgba(155, 155, 155, 0.4)' }}>
                <TouchableOpacity
                  onPress={()=>{this.props.navigation.navigate('AddDevice')}}
                  style={{ margin: 0, padding: 0 }}
                >
                  <LinearGradient start={[0, 1]} end={[1, 1]} colors={[accented2Color, accented1Color]} style={styles.icon}>
                    <Text style={{
                      backgroundColor: 'rgba(0,0,0,0)',
                      color: 'white',
                      fontSize: 24,
                      textAlignVertical: 'center',
                    }}>+</Text>
                  </LinearGradient>
                </TouchableOpacity>
            </View>
            </View>
    );
  }
}


//   render() {
//     const { t, navigation } = this.props;

//     //const { navigate } = navigation;

//     return (
//       <View style={styles.container}>
//         <Text>
//           {t('device:title')}


//         </Text>
//       </View>

//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  separate: {
    marginTop: 50
  },
  icon: {
    margin: 24,
    padding: 0,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgb(240,125,168)',
    alignItems: 'center',
    paddingTop: 4,
    shadowColor: 'rgba(12, 12, 12, 0.38)',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 4,
    shadowOpacity: 1
  }
});
