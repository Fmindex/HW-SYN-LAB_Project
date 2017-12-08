/* @flow */
import React, { Component } from 'react';
 import { Image, Button, View, Text, ScrollView, TouchableOpacity, Switch } from 'react-native';
 import appStyles, { primaryColor, secondaryColor } from '../../common/styles';
 import { SettingTab, AppCard, SceneCard } from '../../common/device-setting';
 import { LinearGradient } from 'expo';
 import styles from './styles';
 import { FontAwesome,MaterialCommunityIcons,Ionicons } from '@expo/vector-icons';

 import { translate } from 'react-i18next';
 @translate(['device', 'common'], { wait: true })

 export default class DeviceFan extends Component {

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
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'rgb(238, 124 ,167)',
        borderRadius: 144 / 2,
        borderWidth: 144 / 10,
        backgroundColor: 'white',
        width: 144,
        height: 144
      }}
    >
      <Text
        style={{
          color: 'rgb(249,211,6)',
          fontSize: 35,
          fontWeight: '600',
          letterSpacing:0.1
        }}
      >
        {amount}
      </Text>
      <Text style={{ color:  "rgb(180,180,180)", fontSize: 18,fontWeight:'600' }}>
        {unit}
      </Text>
    </View>;
     _renderCircle2 = (size: number, time: number, timestart: string) =>
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 115 / 2,

        backgroundColor: 'rgb(128,158,252)',
        width: 115,
        height: 115
      }}
    >
      <View style={{flexDirection:'row',marginTop:15}}>
      <Text
        style={{
          color: 'white',
          fontSize: 35,
          fontWeight: '600',
          letterSpacing:0.1
        }}
      >
        {time}
      </Text>
      <Text style ={{color:'white',marginTop:18,marginLeft:5,fontSize:15,letterSpacing:0.1}}>
      min
      </Text>
      </View>

      <Text style ={{color:'white',fontSize:14,letterSpacing:0.1}}>
        Since
      </Text>
      <View style={{flexDirection:'row'}}>
      <Text style={{ color:  "rgb(255,255,255)", fontSize: 14 }}>
        {timestart}
      </Text>
       <Text style={{ color:  "rgb(255,255,255)",marginLeft:2, fontSize: 14 }}>
        am
      </Text>

      </View>
    </View>;
    _renderCircle3 = (size: number, amount: number, unit: string) =>
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'rgba(0, 162 ,253,0.82)',
        borderRadius: 140 / 2,
        borderWidth: 15,
        backgroundColor: 'white',
        width: 140,
        height: 140
      }}
    >
      <Text style={{ color:  "rgb(180,180,180)", fontSize: 18,fontWeight:'600' }}>
        Now
      </Text>
      <Text
        style={{
          color: 'rgb(249,211,6)',
          fontSize: 35,
          fontWeight: '600',
          letterSpacing:0.1
        }}
      >
        {amount}
      </Text>
      <Text style={{ color:  "rgb(180,180,180)", fontSize: 14,fontWeight:'600' }}>
        {unit}
      </Text>
    </View>;
    _renderCircle4 = (size: number, time: number, unit: string) =>
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 115 / 2,

        backgroundColor: 'rgb(58,180,247)',
        width: 100,
        height: 100
      }}
    >

      <View style={{flexDirection:'row',marginTop:10}}>
      <Text
        style={{
          color: 'white',
          fontSize: 24,
          fontWeight: '600',
          letterSpacing:0.1
        }}
      >
        {time}
      </Text>
      </View>

      <Text style ={{color:'white',fontSize:14,letterSpacing:0.1}}>
        {unit}
      </Text>

    </View>;

    _renderPrice = t =>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View style={{ alignItems: 'center' }}>
        <Ionicons name="md-arrow-dropleft" color="rgb(238 ,124, 167)" size={80} />
        <Text style={{ color: "rgb(180,180,180)" }}>
          {t('common:since')}
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center',marginLeft:20 }}>
        {this._renderCircle(160, 2.93, 'Baht')}
      </View>
      <View style={{ alignItems: 'center' }}>
        <Ionicons name="md-arrow-dropright" color="rgb(238, 124, 167)" size={80} />
        <Text style={{ color: "rgb(180,180,180)" }}>
          {t('common:monthly')}
        </Text>
      </View>
    </View>;

   render(): React.Element<any> {
     const { t, navigation } = this.props;
     const { navigate } = navigation;
     return (
       <View style={{flex: 1, backgroundColor: 'rgb(250, 250, 250)'}}>
         <ScrollView>
           <View style={styles.container}>
             <View style={{flex: 1, width: '100%', height: 228}}>
               <LinearGradient start={[0, 1]} end={[1, 1]} colors={[secondaryColor, primaryColor]} style={styles.header}>
                 <Text style={[styles.text, styles.titleText]}>SmartPlug</Text>
               </LinearGradient>

               <View style={{position: 'absolute', width: '100%'}}>
                 <View style={[styles.cardContainer, styles.statusCard]}>
                   <View style={{ flexDirection: 'row' }} >
                     <View style={styles.statusCardInfo}>
                      <View style={{paddingTop: 16,paddingLeft: 35,flexDirection: 'row',}}>

                         <Text style={[styles.text,  { fontSize: 14,fontWeight: "500",color: "#7a9ff8",}]}>
                            Wemo® Switch Smart Plug
                          </Text>
                      </View>
                      <View style={{paddingLeft: 35,flexDirection: 'row'}}>
                         <FontAwesome name={'map-marker'} style={{color: 'rgba(236, 60, 77, 0.67)',marginTop:2}} size={20} />
                         <Text style={[styles.text, {  fontSize: 14,fontWeight: "500", color: "#b4b4b4",marginTop:8,marginLeft:8}]}>
                          Living room
                         </Text>
                      </View>
                      <View style={{flexDirection :'row',paddingTop:12,paddingLeft:35}}>
                         <MaterialCommunityIcons name={'access-point'} style={{color: 'rgb(7, 225, 146)',marginTop:-6,marginLeft:-5}} size={30} />
                         <Text style={[styles.text, {marginLeft:6,fontSize: 14,fontWeight: "500",color: 'rgb(7, 225, 146)',}]}>
                          Connected
                         </Text>
                      </View>
                     </View>
                     <View style={{marginTop:8,paddingRight:34}}>
                        <Image source={require('./SmartPlugIcon.png')} style={{height: 94, width: 68,}} />
                     </View>
                    </View>

                    <SettingTab status={ true } onPressPower={ null } onPressSetting={ null } />
                 </View>
               </View>
             </View>

             <View style={[styles.cardContainer,  {flex: 1,flexDirection: 'column',justifyContent: 'center',height: 226,}]}>
               <Text style={[styles.text, { fontSize: 18,fontWeight: "500",letterSpacing: 0.5,color: "rgb(180,180,180)",marginTop: 16,textAlign: 'center',}]}>
                Electricity Estimate
               </Text>
                <View style={{ margin: 8, alignItems: 'center' }}>

                 {this._renderPrice(t)}


                  <Text style={{ fontSize: 14, marginTop: 8, color: "rgb(180,180,180)" ,fontWeight: "500",letterSpacing:0.4}}>
                    Today
                  </Text>

                </View>

             </View>

            <View style={[styles.cardContainer, {flexDirection:'column',height:209}]}>
              <View style = {{flexDirection:'row'}}>
                <View style = {{flexDirection:'column'}}>
                  <Text style={{marginTop:15,marginLeft:32,fontSize: 15,fontWeight: "500",color: 'rgb(46, 182, 252)',letterSpacing:0.1}}>
                    On now for
                  </Text>
                  <View style ={{marginTop:3,marginLeft:11}}>
                    {this._renderCircle2(80, 9,'2:59')}
                   </View>
                </View>
                <View style ={{marginTop:17,marginLeft:-20}}>
                    {this._renderCircle3(80, 0.014,'kw')}
                   </View>
                 <View style = {{flexDirection:'column'}}>
                  <Text style={{marginTop:26,marginLeft:-4,fontSize: 15,fontWeight: "500",color: 'rgb(120, 203, 250)',letterSpacing:0.1}}>
                    Avg when on
                  </Text>
                  <View style ={{marginTop:4,marginLeft:-13}}>
                    {this._renderCircle4(80, 0.014,'kw')}
                   </View>
                </View>

              </View>
              <View style={{flex:1,alignItems:'center'}}>
                  <Text style={[styles.text, {fontSize: 18,fontWeight: "500",color: 'rgb(46, 182, 252)',letterSpacing:0.1,marginTop:15}]}>
                      CURRENT CONSUMPTION
                  </Text>
              </View>

             </View>

              <View style={[styles.cardContainer, {flex:1,height:160}]}>
                <View style={{flexDirection:'row'}}>
                  <View style= {{flexDirection:'column'}}>
                    <Text style={[styles.text, {marginLeft : 30,marginTop:21,fontSize: 18,fontWeight: "500",color: 'rgb(60, 232, 170)',letterSpacing:0.1}]}>
                      Schedule
                    </Text>
                    <Image source={require('./onsc.png')} style={{height: 50, width: 50,marginLeft:30,marginTop:10}} />
                    <Image source={require('./offsc.png')} style={{height: 50, width: 50,marginLeft:30}} />
                  </View>
                  <View style= {{flexDirection:'column'}}>
                    <Text style={[styles.text, {marginLeft : 25,marginTop:69,paddingRight:10,fontSize: 18,fontWeight: "500",color: 'rgb(180, 180, 180)',letterSpacing:0.1}]}>
                      Wednesday, 9 Sep 10:00
                    </Text>
                    <Text style={[styles.text, {marginLeft : 25,marginTop:19,fontSize: 18,fontWeight: "500",color: 'rgb(180, 180, 180)',letterSpacing:0.1}]}>
                      Wednesday, 9 Sep 10:30
                    </Text>

                  </View>
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
