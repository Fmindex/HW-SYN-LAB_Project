/* @flow */

import React, { Component } from 'react';

import { Platform, ProgressViewIOS, Text, View } from 'react-native';
import { translate } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
// import styles from './styles';

@translate(['device', 'common'], { wait: true })
export default class DevicePowerMeter extends Component {
  static navigationOptions = ({ screenProps }) => ({
    title: screenProps.t('device:outlets')
  });

  _renderCircle = (size: number, amount: number, unit: string) =>
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#87ceebcc',
        borderRadius: size / 2,
        borderWidth: size / 10,
        backgroundColor: 'white',
        width: size,
        height: size
      }}
    >
      <Text
        style={{
          color: 'orange',
          fontSize: size / 3.33,
          fontWeight: '600'
        }}
      >
        {amount}
      </Text>
      <Text style={{ color: 'skyblue', fontSize: size / 10 }}>
        {unit}
      </Text>
    </View>;

  _renderPrice = t =>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View style={{ alignItems: 'center' }}>
        <Ionicons name="md-arrow-dropleft" color="white" size={48} />
        <Text style={{ color: '#fffc' }}>
          {t('common:since')}
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center' }}>
        {this._renderCircle(160, 2.93, 'Baht')}
      </View>
      <View style={{ alignItems: 'center' }}>
        <Ionicons name="md-arrow-dropright" color="white" size={48} />
        <Text style={{ color: '#fffc' }}>
          {t('common:monthly')}
        </Text>
      </View>
    </View>;

  _renderProgressBar = (progress: number) => {
    if (Platform.OS === 'ios') {
      return (
        <ProgressViewIOS
          style={{ width: '100%', marginTop: 16, marginBottom: 16 }}
          progress={progress}
          progressTintColor="orange"
          trackTintColor="white"
        />
      );
    } else {
      return null;
    }
  };

  render(): React.Element<any> {
    const { t } = this.props;

    return (
      <View>
        <Text style={{ textAlign: 'center', color: 'skyblue' }}>
          {t('device:electricity_estimate')}
        </Text>
        <View style={{ backgroundColor: 'skyblue', padding: 16 }}>
          {this._renderPrice(t)}
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 24,
              margin: 16,
              fontWeight: 'bold'
            }}
          >
            {t('common:today')}
          </Text>
          <View style={{ backgroundColor: 'white', height: 1, width: '100%' }} />
          <View style={{ flexDirection: 'row' }}>
            <View style={{ margin: 8, alignItems: 'center' }}>
              {this._renderCircle(80, 0.3, 'KW')}
              <Text style={{ fontSize: 12, marginTop: 8, color: 'white' }}>
                {t('device:power_currently_used').toUpperCase()}
              </Text>
            </View>
            <View style={{ backgroundColor: 'white', height: '100%', width: 1, marginTop: 8 }} />

            <View style={{ flex: 1, margin: 8, alignItems: 'center' }}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 16, marginBottom: 8 }}>
                    {t('common:now')}
                  </Text>
                  <Text style={{ color: 'white' }}>‎฿40</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                  <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 16, marginBottom: 8 }}>
                    {t('common:goal')}
                  </Text>
                  <Text style={{ color: 'white' }}>‎฿3,000</Text>
                </View>
              </View>
              {this._renderProgressBar(0.2)}
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end' }}>
                <Text style={{ color: 'white', marginRight: 8 }}>
                  {t('device:electricity_cost').toUpperCase()}
                </Text>
                <Text style={{ color: 'yellow' }}>‎฿ 50</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
