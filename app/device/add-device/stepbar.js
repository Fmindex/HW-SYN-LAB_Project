/* @flow */

import { View, Image} from 'react-native';
import React, { Component } from 'react';

import styles from './styles';
import { translate } from 'react-i18next';

@translate(['device', 'common'], { wait: true })

export default class StepBar extends Component {

  render() {
    if(this.props.step === 1) return <Image source={ require('./image/step1.png') } style={{ width: 282, height: 40 }} />
    else if(this.props.step === 2) return <Image source={ require('./image/step2.png') } style={{ width: 282, height: 40 }} />
    else if(this.props.step === 3) return <Image source={ require('./image/step3.png') } style={{ width: 282, height: 40 }} />
    else if(this.props.step === 4) return <Image source={ require('./image/step4.png') } style={{ width: 282, height: 40 }} />
  }
}


