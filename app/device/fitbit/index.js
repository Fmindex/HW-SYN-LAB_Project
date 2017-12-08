/* @flow */
import React, { Component } from 'react';
import * as Progress from 'react-native-progress';
import { Image, Button, View, Text, ScrollView, TouchableOpacity, Switch,ProgressViewIOS,Platform } from 'react-native';
import appStyles, { primaryColor, secondaryColor } from '../../common/styles';
import { AppCard, SceneCard } from '../../common/device-setting';
import { LinearGradient } from 'expo';
import styles from './styles';
import { FontAwesome,MaterialCommunityIcons,Ionicons } from '@expo/vector-icons';

import { translate } from 'react-i18next';
@translate(['device', 'common'], { wait: true })

export default class DeviceFitbit extends Component {

 static navigationOptions = ({ screenProps }) => ({
   // title: screenProps.t('Solar Inverter'),
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

 state = {
   user: '',
   mode:1
 };

 constructor(props) {
   super(props);
   this.state = {
     speed: 1,
     timer: 1,
     isTimerOn: false,
     angle: 1,
     angleMode: false,
     isActive: true,
   };
 }

 _renderCircle = (size: number, amount: number, unit: string) =>
  <View style={{
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'rgb(238, 124 ,167)',
      borderRadius: 144 / 2,
      borderWidth: 144 / 10,
      backgroundColor: 'white',
      width: 144,
      height: 144
    }} >
  </View>;

  _renderStepRow = ( step: string, stepTotal: string) =>
    <View style={{  marginTop: 20 }}>
      <View style={{ flexDirection: 'column' ,height:25}}>

        <View style={{  flexDirection: 'row' }}>
            <Text style={{marginTop:0, marginLeft:16,flex: 1, fontSize: 18, color: 'rgb(74,74,74)' }}>
              {step}
            </Text>
            <Image source={require('./Running.png')} style={{height: 17, width: 21}} />
        </View>

          <View style={{ flexDirection: 'row', marginLeft: 16, }}>
            <Progress.Bar progress={0.6} width={152} height={4} borderColor={'white'} color={'rgb(58,180,247)'} unfilledColor={'rgb(236,236,236)'} />
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 16,width:152,justifyContent:'flex-end'  }}>
            <Text style={{marginTop:4, fontSize: 14, color: 'rgb(175,175,175)' }}>
              {stepTotal}
            </Text>
          </View>
      </View>
    </View>;

  _renderMileRow = ( miles: string, milesTotal: string) =>
    <View style={{  marginTop: 20 }}>
        <View style={{ flexDirection: 'column' ,height:25}}>

          <View style={{  flexDirection: 'row' }}>
              <Text style={{marginTop:0, marginLeft:16,flex: 1, fontSize: 18, color: 'rgb(74,74,74)' }}>
                {miles}
              </Text>
              <Image source={require('./Mile.png')} style={{height: 14, width: 9.1}} />
          </View>

            <View style={{ flexDirection: 'row', marginLeft: 16, }}>
              <Progress.Bar progress={0.6} width={152} height={4} borderColor={'white'} color={'rgb(7 ,225 ,146)'} unfilledColor={'rgb(236,236,236)'} />
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 16,width:152,justifyContent:'flex-end' }}>
              <Text style={{marginTop:4, marginLeft:78, fontSize: 14, color: 'rgb(175,175,175)' }}>
                {milesTotal}
              </Text>
            </View>
        </View>
      </View>;
  _renderActiveRow = ( minutes: string, minutesTotal: string) =>
    <View style={{  marginTop: 0,width:351 }}>
        <View style={{ flexDirection: 'column' }}>

          <View style={{  flexDirection: 'row',alignItems:'center' ,justifyContent:'center'}}>
              <Text style={{marginTop:0, marginLeft:16, fontSize: 20, color: 'rgb( 128 ,158 ,252)',fontWeight:'500' }}>
                {minutes}
              </Text>
              <Text style={{marginTop:0, marginLeft:8,fontSize: 20, color: 'rgb( 128 ,158 ,252)' }}>
                active minute
              </Text>

          </View>

            <View style={{ flexDirection: 'column'}}>
              <View style={{marginLeft:62}}>
              <Progress.Bar progress={0.6} width={228} height={6} borderColor={'white'} color={'rgb( 128 ,158 ,252)'} unfilledColor={'rgb(236,236,236)'} />
              </View>
              <View style={{ flexDirection: 'row', marginLeft: 0,width:351,justifyContent:'flex-end',paddingRight:61}}>
                <Text style={{marginTop:4, marginLeft:0, fontSize: 14, color: 'rgb(175,175,175)' }}>
                  {minutesTotal}
                </Text>

                <Text style={{marginTop:4, marginLeft:4, fontSize: 14, color: 'rgb(175,175,175)'}}>
                  active minute
                </Text>


              </View>
            </View>

        </View>
      </View>;

 render(): React.Element<any> {
   const { t, navigation } = this.props;
   const { navigate } = navigation;
   return (
     <View style={{flex: 1, backgroundColor: 'rgb(250, 250, 250)'}}>
       <ScrollView>
         <View style={styles.container}>
           <View style={{flex: 1, width: '100%', height: 180}}>
             <LinearGradient start={[0, 1]} end={[1, 1]} colors={[secondaryColor, primaryColor]} style={styles.header}>
               <Text style={[styles.text, styles.titleText]}>Fitbit</Text>
             </LinearGradient>

             <View style={{position: 'absolute', width: '100%'}}>
               <View style={[styles.cardContainer, styles.statusCard]}>
                 <View style={styles.statusCardInfo}>
                  <View style={{paddingTop: 16,paddingLeft: 35,flexDirection: 'row',}}>

                     <Text style={[styles.text,  { fontSize: 14,fontWeight: "500",letterSpacing:0.4,color: "#7a9ff8",}]}>
                      FITBIT Charge 2™
                      </Text>
                  </View>
                  <View style={{paddingLeft: 35,flexDirection: 'row'}}>

                     <Text style={[styles.text, {  fontSize: 14,fontWeight: "500", color: "#b4b4b4",marginTop:8,marginLeft:0}]}>
                      Synced 30 Minute ago
                     </Text>
                  </View>
                  <View style={{flexDirection :'row',paddingTop:0,paddingLeft:35}}>
                     <Image source={require('./Battery.png')} style={{height: 22, width: 55,marginTop:12}} />
                     <Text style={[styles.text, {marginLeft:20,marginTop:9,fontSize: 24,fontWeight: "300",letterSpacing:1.7,color: 'rgb(7, 225, 146)',}]}>
                      70%
                     </Text>
                  </View>
                 </View>
                 <View style={{marginTop:12,paddingRight:13}}>
                    <Image source={require('./Fitbit.png')} style={{height: 81, width: 91,}} />
                 </View>
               </View>
             </View>
           </View>

           <View style={[styles.cardContainer,  {flex: 1,flexDirection: 'row',height: 161,}]}>
            <Image source={require('./RunningCircle.png')} style={{height: 116, width: 116,marginLeft:30,marginTop:19}} />
              <View style={{ margin: 8, alignItems: 'center' }}>
              {this._renderStepRow( '16,132 steps' ,'2000 steps')}
              <View style={{marginTop:11}}>
                {this._renderMileRow( '6.62 miles' ,'10 miles')}

              </View>
              </View>

           </View>

          <View style={[styles.cardContainer, {flexDirection:'column',height:240}]}>
            <View style={{width:351,height:175,flexDirection:'row'}}>
              <View style={{flexDirection:'column',alignItems:'center',width:110}}>
                  <Image source={require('./Fire.png')} style={{ width: 23,height: 28,marginTop:47}} />
                  <Text style ={{fontSize:24,color:'rgb(74,74,74)',justifyContent:'space-around',marginTop:8}}>
                    2200
                  </Text>
                  <View style={{flexDirection:'row'}}>
                  <View
                    style={{
                      alignItems: 'center',
                      marginTop:10,
                      marginLeft:-8,
                      borderRadius: 4,
                      backgroundColor: 'rgb(251,51,83)',
                      width: 8,
                      height: 8
                    }}
                  />

                  <Text style ={{fontSize:12,color:'rgba(0,0,0,0.3)',justifyContent:'space-around',marginTop:8,marginLeft:8}}>
                    Active
                  </Text>
                  </View>
              </View>
              <View style={{flexDirection:'column'}}>
                <Image source={require('./Calories.png')} style={{ width: 138,height: 138,marginTop:16}} />
                <Text style ={{fontSize:36,color:'rgb(72,72,72)',position:'absolute',textAlign:'center',marginTop:50,marginLeft:27,fontWeight:'300',letterSpacing:0.2}}>
                  1500
                </Text>
                <Text style ={{fontSize:14,color:'rgb(72,72,72)',position:'absolute',marginTop:95,marginLeft:20}}>
                  of 2200 calories
                </Text>
              </View>
              <View style={{flexDirection:'column',alignItems:'center',width:110}}>
                  <Image source={require('./Heart.png')} style={{ width: 29,height: 29,marginTop:47}} />
                  <Text style ={{fontSize:24,color:'rgb(74,74,74)',justifyContent:'space-around',marginTop:8}}>
                    700
                  </Text>
                  <View style={{flexDirection:'row'}}>
                  <View
                    style={{
                      alignItems: 'center',
                      marginTop:10,
                      marginLeft:-8,
                      borderRadius: 4,
                      backgroundColor: 'rgb(123 ,62 ,246)',
                      width: 8,
                      height: 8
                    }}
                  />

                  <Text style ={{fontSize:12,color:'rgba(0,0,0,0.3)',justifyContent:'space-around',marginTop:8,marginLeft:8}}>
                    Rest
                  </Text>

                  </View>
              </View>
            </View>
            <View style={{marginTop:-11,alignItems:'center',height:60,width:'100%'}}>
                {this._renderActiveRow( '60' ,'90')}

            </View>
         </View>

          <View style={{ paddingHorizontal: 12 }} ><AppCard /></View>
          <View style={{ marginTop: 12, marginBottom: 12, paddingHorizontal: 12 }} ><SceneCard /></View>
        </View>
       </ScrollView>
     </View>
   );
 }
}
