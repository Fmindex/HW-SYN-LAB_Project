import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { translate } from 'react-i18next';

@translate(['device', 'common'], { wait: true })

export default class Doorsensor extends Component {
  static navigationOptions = ({ screenProps }) => ({
    title: 'Blank',
    headerRight: <Button title="Edit" onPress={()=>{}}/>,

  });


  render(): React.Element<any> {

    return (
      <View>

      </View>
    );
  }
}
