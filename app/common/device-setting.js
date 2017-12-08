/* @flow */

import { Image, Text, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react';

import styles from './styles';

export class SettingTab extends Component {

  styles = {
    tabContainer: {
      flexDirection: 'row', 
      height: 48
    },
    tab: { 
      flex: 1, 
      flexDirection: 'row', 
      justifyContent: 'center', 
      alignItems: 'center', 
      borderColor: 'rgba(155, 155, 155, 0.2)' 
    },
    textButton: { 
      marginLeft: 12, 
      fontSize: 16, 
      letterSpacing: 0.17, 
      textAlign: "center", 
      color: "#4a4a4a" 
    },
  }

	render() {
		return (
			<View style={ this.styles.tabContainer } >
        <TouchableOpacity style={{ flex: 1 }} onPress={ this.props.onPressPower } >
          <View style={[this.styles.tab]} >
            { !this.props.status && <Image source={ require('./power-on.png') } style={{ width: 28, width: 28 }} /> }
            { this.props.status && <Image source={ require('./power-off.png') } style={{ width: 28, width: 28 }} /> }
            <Text style={ this.styles.textButton } >
              Power { !this.props.status ? 'On' : 'Off' }
            </Text>
          </View>
        </TouchableOpacity>
      {
        // <TouchableOpacity style={{ flex: 1 }} onPress={ this.props.onPressSetting } >
        //   <View style={ this.styles.tab } >
        //     <Image source={ require('./gear.png') } style={{ width: 28, width: 28 }} />
        //     <Text style={ this.styles.textButton } >
        //       Device Setting
        //     </Text>
        //   </View>
        // </TouchableOpacity>
      }
      </View>
		)
	}
}

export class AppCard extends Component {

  styles = {
    card: {
      borderRadius: 16,
      backgroundColor: "#ffffff",
      shadowColor: "rgba(175, 175, 175, 0.5)",
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowRadius: 3,
      shadowOpacity: 1,
    },
    wrap: { 
      height: 112, 
      flex: 1, 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center' 
    },
    title: { 
      fontSize: 16, 
      fontWeight: "500", 
      letterSpacing: 0.17, 
      color: "#6e6e6e" 
    },
    blockContainer: { 
      flexDirection: 'row', 
      width: 264, 
      justifyContent: 'space-between', 
      alignItems: 'center' 
    },
    block: { 
      height: 72, 
      width: 72, 
      borderRadius: 16, 
      backgroundColor: '#d8d8d8', 
      shadowColor: "rgba(0, 0, 0, 0.25)", 
      shadowOffset: { 
        width: 0, height: 1 
      }, 
      shadowRadius: 1, 
      shadowOpacity: 1 
    },
    image: { 
      height: 72, 
      width: 72, 
      borderRadius: 16 
    }
  }

	render() {
		return (
			<View style={[ this.styles.card, this.styles.wrap ]} >
	      <View style={{ width: '100%', paddingLeft: 16 }} >
	        <Text style={ this.styles.title } >App</Text>
	      </View>
	      <View style={ this.styles.blockContainer } >
	        <TouchableOpacity><View style={ this.styles.block } /></TouchableOpacity>
	        <TouchableOpacity><View style={ this.styles.block } /></TouchableOpacity>
	        <TouchableOpacity><View style={ this.styles.block } /></TouchableOpacity>
	      </View>
	    </View>
		)
	}
}

export class SceneCard extends Component {

  styles = {
    card: {
      borderRadius: 16,
      backgroundColor: "#ffffff",
      shadowColor: "rgba(175, 175, 175, 0.5)",
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowRadius: 3,
      shadowOpacity: 1,
    },
    wrap: { 
      height: 112, 
      flex: 1, 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center' 
    },
    title: { 
      fontSize: 16, 
      fontWeight: "500", 
      letterSpacing: 0.17, 
      color: "#6e6e6e" 
    },
    blockContainer: { 
      flexDirection: 'row', 
      width: 264, 
      justifyContent: 'space-between', 
      alignItems: 'center' 
    },
    block: { 
      height: 72, 
      width: 72, 
      borderRadius: 36, 
      backgroundColor: '#d8d8d8', 
      shadowColor: "rgba(0, 0, 0, 0.25)", 
      shadowOffset: { 
        width: 0, height: 1 
      }, 
      shadowRadius: 1, 
      shadowOpacity: 1 
    },
    image: { 
      height: 72, 
      width: 72, 
      borderRadius: 36 
    }
  }

  render() {
    return (
      <View style={[ this.styles.card, this.styles.wrap ]} >
        <View style={{ width: '100%', paddingLeft: 16 }} >
          <Text style={ this.styles.title } >Scene</Text>
        </View>
        <View style={ this.styles.blockContainer } >
          <TouchableOpacity>
            <View style={ this.styles.block } >
              <Image source={{ uri: 'https://i0.wp.com/cococozy.com/wp-content/uploads/2014/08/1st-option-alabaster-house_13-white-open-kitchen-rustic-country-white-wood-floors-subway-tile-backsplash.jpg' }} style={ this.styles.image } />
            </View>
          </TouchableOpacity>
          <TouchableOpacity><View style={ this.styles.block } /></TouchableOpacity>
          <TouchableOpacity><View style={ this.styles.block } /></TouchableOpacity>
        </View>
      </View>
    )
  }
}