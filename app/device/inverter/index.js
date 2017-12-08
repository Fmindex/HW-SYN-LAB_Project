/* @flow */

import { Button, Switch, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import React, { Component } from 'react';

import styles from './styles';
import { translate } from 'react-i18next';

@translate(['device', 'common'], { wait: true })
export default class DeviceInverter extends Component {
  static navigationOptions = ({ screenProps }) => ({
    title: screenProps.t('device:inverter'),
    headerRight: <Button title="+" onPress={() => {}} />
  });

  _renderBox = (icon: string, value: string, description: string) =>
    <View style={styles.box}>
      <FontAwesome name={icon} size={48} color="white" />
      <Text style={styles.boxTitle}>
        {value}
      </Text>
      <Text style={styles.boxDescription}>
        {description}
      </Text>
    </View>;

  _renderEnergy = (value: number, unit: string, title: string) =>
    <View style={styles.energyTimeContainer}>
      <View style={styles.energyTime}>
        <Text style={styles.energyTitle}>
          {`${value}`}
        </Text>
        <Text style={styles.energyUnit}>
          {unit}
        </Text>
      </View>
      <View style={[styles.dividerVertical, styles.energyDivider]} />
      <Text style={styles.energyDescription}>
        {title}
      </Text>
    </View>;

  render(): React.Element<any> {
    const { t } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Outdoor</Text>
        <View style={styles.hero}>
          {this._renderBox('flash', '43.5kw', t('common:power'))}
          {this._renderBox('dollar', '12,900', t('common:total_income'))}
        </View>
        <View style={styles.energyTime}>
          {this._renderEnergy(200, 'kWh', t('device:e_today'))}
          <View style={styles.dividerHorizontal} />
          {this._renderEnergy(200, 'kWh', t('device:e_month'))}
          <View style={styles.dividerHorizontal} />
          {this._renderEnergy(200, 'MWh', t('device:e_total'))}
        </View>
        <View style={{ flex: 1 }} />
        <View style={styles.switchContainer}>
          <Switch onTintColor="skyblue" />
        </View>
      </View>
    );
  }
}
