import { View, Button, Text, TouchableOpacity, ScrollView, Image, Animated } from 'react-native';
import { CheckBox } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo';

import React, { Component } from 'react';
import axios from 'axios';
import appStyles, { primaryColor, secondaryColor } from '../../common/styles';

import styles from './styles';

export default class GradientButton extends Component {
	
	render() {
		return (
			<TouchableOpacity onPress={ this.props.onPress } >
			  <LinearGradient style={[ styles.button, styles.center ]} start={[0, 1]} end={[1, 1]} colors={ [secondaryColor, primaryColor] }>
			    <Text style={ styles.textButton } >
			      { this.props.title }
			    </Text>
			  </LinearGradient>
			</TouchableOpacity>
		);
	}
}