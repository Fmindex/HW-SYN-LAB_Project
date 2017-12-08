/* @flow */
import React, { Component } from 'react';
import * as Progress from 'react-native-progress';
 import { Picker,Image, Button, View, Text, ScrollView, TouchableOpacity, Switch,ProgressViewIOS,Platform } from 'react-native';
 import appStyles, { primaryColor, secondaryColor } from '../../common/styles';
 import { SettingTab, AppCard, SceneCard } from '../../common/device-setting';
 import { LinearGradient } from 'expo';
 import styles from './styles';
 import { FontAwesome,MaterialCommunityIcons,Ionicons } from '@expo/vector-icons';

 import { translate } from 'react-i18next';
 @translate(['device', 'common'], { wait: true })

 export default class DeviceSolarInverter extends Component {

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
       temp: 28,
       mode: 1,
       isActive: true,
     };

     // this.increaseTemp = this.increaseTemp.bind(this);
     // this.decreaseTemp = this.decreaseTemp.bind(this);
     // this.toggleActive = this.toggleActive.bind(this);
   }

   updateUser = (user) => {
      this.setState({ user: user })
   };

   changeMode(i) {
     this.setState({
       ...this.state,
       mode: i
     });
   }

   _renderRow = (active: number, reactive: number,icon: string,image: string) =>
   <View style={[styles.cardContainer,styles.statusCard,{flexDirection:'row',backgroundColor:'rgb(255 ,206 ,85)',height:100,marginTop:0}]}>
    <View style={[{flex:1,flexDirection:'column'}]}>
      <Text style={[styles.text,  { fontSize: 13,fontWeight: "300",marginLeft:31,marginTop:24,letterSpacing:0.4,color: "rgb(255,255,255)",}]}>
        Active Power
      </Text>
      <View style={{flexDirection:'row'}}>
      <Text style={[styles.text,  { fontSize: 24,fontWeight: "300",marginLeft:31,letterSpacing:0.4,color: "rgb(255,255,255)",}]}>
        {active}
      </Text>
      <Text style={[styles.text,  { fontSize: 24,fontWeight: "300",marginLeft:4,letterSpacing:0.4,color: "rgb(255,255,255)",}]}>
        W
      </Text>
      </View>
    </View>

    <View style={[styles.cardContainer2,{flex:1,backgroundColor:'rgb(246, 187 ,67)',flexDirection:'row'}]}>
      <View style ={{width:20,backgroundColor:'rgb(246, 187 ,67)'}}/>
      <View style={{flexDirection:'column'}}>
        <Text style={[styles.text,  { fontSize: 13,fontWeight: "300",marginLeft:41,marginTop:24,letterSpacing:0.4,color: "rgb(255,255,255)",}]}>
          Reactive Power
        </Text>
      <View style={{flexDirection:'row'}}>
        <Text style={[styles.text,  { fontSize: 24,fontWeight: "300",marginLeft:41,letterSpacing:0.4,color: "rgb(255,255,255)",}]}>
          {reactive}
        </Text>
        <Text style={[styles.text,  { fontSize: 24,fontWeight: "300",marginLeft:4,letterSpacing:0.4,color: "rgb(255,255,255)",}]}>
          VAR
          </Text>
      </View>
      <View style ={{position:'absolute',alignItems:'center',marginLeft:-20,marginTop:21}}>
        <Image source={require('./Electric.png')} style={{height: 60, width: 77,position:'absolute'}} />
      </View>
      </View>
    </View>

   </View>
   _renderRow2 = (active: number, reactive: number,icon: string,image: string) =>
   <View style={[styles.cardContainer,styles.statusCard,{flexDirection:'row',backgroundColor:'rgb(160 ,212 ,104)',height:100,marginTop:0}]}>
    <View style={[{flex:1,flexDirection:'column'}]}>
      <Text style={[styles.text,  { fontSize: 13,fontWeight: "300",marginLeft:31,marginTop:24,letterSpacing:0.4,color: "rgb(255,255,255)",}]}>
        Active Power
      </Text>
      <View style={{flexDirection:'row'}}>
      <Text style={[styles.text,  { fontSize: 24,fontWeight: "300",marginLeft:31,letterSpacing:0.4,color: "rgb(255,255,255)",}]}>
        {active}
      </Text>
      <Text style={[styles.text,  { fontSize: 24,fontWeight: "300",marginLeft:4,letterSpacing:0.4,color: "rgb(255,255,255)",}]}>
        W
      </Text>
      </View>
    </View>

    <View style={[styles.cardContainer2,{flex:1,backgroundColor:'rgb(140 ,192 ,81)',flexDirection:'row'}]}>
      <View style ={{width:20,backgroundColor:'rgb(140 ,192 ,81)'}}/>
      <View style={{flexDirection:'column'}}>
        <Text style={[styles.text,  { fontSize: 13,fontWeight: "300",marginLeft:41,marginTop:24,letterSpacing:0.4,color: "rgb(255,255,255)",}]}>
          Reactive Power
        </Text>
      <View style={{flexDirection:'row'}}>
        <Text style={[styles.text,  { fontSize: 24,fontWeight: "300",marginLeft:41,letterSpacing:0.4,color: "rgb(255,255,255)",}]}>
          {reactive}
        </Text>
        <Text style={[styles.text,  { fontSize: 24,fontWeight: "300",marginLeft:4,letterSpacing:0.4,color: "rgb(255,255,255)",}]}>
          VAR
          </Text>
      </View>
      <View style ={{position:'absolute',alignItems:'center',marginLeft:-20,marginTop:21}}>
        <Image source={require('./Green.png')} style={{height: 60, width: 77,position:'absolute'}} />
      </View>
      </View>
    </View>

   </View>
   _renderRow3 = (active: number, reactive: number,icon: string,image: string) =>
   <View style={[styles.cardContainer,styles.statusCard,{flexDirection:'row',backgroundColor:'rgb(79 ,192 ,232)',height:100,marginTop:0}]}>
    <View style={[{flex:1,flexDirection:'column'}]}>
      <Text style={[styles.text,  { fontSize: 13,fontWeight: "300",marginLeft:31,marginTop:24,letterSpacing:0.4,color: "rgb(255,255,255)",}]}>
        Active Power
      </Text>
      <View style={{flexDirection:'row'}}>
      <Text style={[styles.text,  { fontSize: 24,fontWeight: "300",marginLeft:31,letterSpacing:0.4,color: "rgb(255,255,255)",}]}>
        {active}
      </Text>
      <Text style={[styles.text,  { fontSize: 24,fontWeight: "300",marginLeft:4,letterSpacing:0.4,color: "rgb(255,255,255)",}]}>
        W
      </Text>
      </View>
    </View>

    <View style={[styles.cardContainer2,{flex:1,backgroundColor:'rgb(59 ,174 ,218)',flexDirection:'row'}]}>
      <View style ={{width:20,backgroundColor:'rgb(59 ,174 ,218)'}}/>
      <View style={{flexDirection:'column'}}>
        <Text style={[styles.text,  { fontSize: 13,fontWeight: "300",marginLeft:41,marginTop:24,letterSpacing:0.4,color: "rgb(255,255,255)",}]}>
          Reactive Power
        </Text>
      <View style={{flexDirection:'row'}}>
        <Text style={[styles.text,  { fontSize: 24,fontWeight: "300",marginLeft:41,letterSpacing:0.4,color: "rgb(255,255,255)",}]}>
          {reactive}
        </Text>
        <Text style={[styles.text,  { fontSize: 24,fontWeight: "300",marginLeft:4,letterSpacing:0.4,color: "rgb(255,255,255)",}]}>
          VAR
          </Text>
      </View>
      <View style ={{position:'absolute',alignItems:'center',marginLeft:-20,marginTop:21}}>
        <Image source={require('./Home.png')} style={{height: 60, width: 77,position:'absolute'}} />
      </View>
      </View>
    </View>

   </View>
   _renderRow4 = (active: number, reactive: number,icon: string,image: string) =>
   <View style={[styles.cardContainer,styles.statusCard,{flexDirection:'row',backgroundColor:'rgb(172 ,146 ,237)',height:100,marginTop:0}]}>
    <View style={[{flex:1,flexDirection:'column'}]}>
      <Text style={[styles.text,  { fontSize: 13,fontWeight: "300",marginLeft:31,marginTop:24,letterSpacing:0.4,color: "rgb(255,255,255)",}]}>
        Active Power
      </Text>
      <View style={{flexDirection:'row'}}>
      <Text style={[styles.text,  { fontSize: 24,fontWeight: "300",marginLeft:31,letterSpacing:0.4,color: "rgb(255,255,255)",}]}>
        {active}
      </Text>
      <Text style={[styles.text,  { fontSize: 24,fontWeight: "300",marginLeft:4,letterSpacing:0.4,color: "rgb(255,255,255)",}]}>
        W
      </Text>
      </View>
      <View style={{flexDirection:'row'}}>
      <Image source={require('./Cell.png')} style={{height: 9, width: 20,marginLeft:60.4,marginTop:7}} />
      <Text style={[styles.text,  { fontSize: 18,fontWeight: "300",marginLeft:4,letterSpacing:0.4,color: "rgb(255,255,255)",}]}>
        50 %
      </Text>
      </View>
    </View>

    <View style={[styles.cardContainer2,{flex:1,backgroundColor:'rgb(150 ,123 ,220)',flexDirection:'row'}]}>
      <View style ={{width:20,backgroundColor:'rgb(150 ,123 ,220)'}}/>
      <View style={{flexDirection:'column'}}>
        <Text style={[styles.text,  { fontSize: 13,fontWeight: "300",marginLeft:41,marginTop:24,letterSpacing:0.4,color: "rgb(255,255,255)",}]}>
          Reactive Power
        </Text>
      <View style={{flexDirection:'row'}}>
        <Text style={[styles.text,  { fontSize: 24,fontWeight: "300",marginLeft:41,letterSpacing:0.4,color: "rgb(255,255,255)",}]}>
          {reactive}
        </Text>
        <Text style={[styles.text,  { fontSize: 24,fontWeight: "300",marginLeft:4,letterSpacing:0.4,color: "rgb(255,255,255)",}]}>
          W
          </Text>
      </View>
      <View style ={{position:'absolute',alignItems:'center',marginLeft:-20,marginTop:21}}>
        <Image source={require('./Battery.png')} style={{height: 60, width: 77,position:'absolute'}} />
      </View>
      </View>
    </View>

   </View>
   render(): React.Element<any> {
     const { t, navigation } = this.props;
     const { navigate } = navigation;
     return (
       <View style={{flex: 1, backgroundColor: 'rgb(250, 250, 250)'}}>
         <ScrollView>
           {this.state.mode == 2 && <View style={styles.container}>
             <View style={{width: '100%'}}>
               <LinearGradient start={[0, 1]} end={[1, 1]} colors={[secondaryColor, primaryColor]} style={styles.header}>
               </LinearGradient>

               <View style={{marginTop: -120, width: '100%'}}>
                 <View style={[styles.cardContainer, styles.statusCard,{height:300}]}>
                   <View style={[styles.statusCardInfo]}>
                    <View style={{paddingTop: 16,paddingLeft: 35,flexDirection: 'row',}}>

                       <Text style={[styles.text,  { fontSize: 14,fontWeight: "500",letterSpacing:0.4,color: "#7a9ff8",}]}>
                        Growatt
                        </Text>
                    </View>
                    <View style={{paddingLeft: 35,flexDirection: 'row'}}>

                       <Text style={[styles.text, {  fontSize: 14,fontWeight: "600", color: "#b4b4b4",marginTop:8}]}>
                        Mode
                       </Text>
                       <TouchableOpacity   style={[styles.buttonContainer,{justifyContent:'space-around',alignItems:'center'}]}>
                       <Text style={[styles.text,  { fontSize: 12,fontWeight: "500",letterSpacing:0.2,color: "#7a9ff8",}]}>
                        Grid-Tie with Backup (l)
                        </Text>
                       </TouchableOpacity>
                    </View>
                    <View style={{flexDirection :'row',paddingTop:0,paddingLeft:35}}>

                       <Text style={[styles.text, {marginLeft:0,marginTop:5,fontSize: 14,fontWeight:'600',letterSpacing:0.4,color: 'rgb(7, 225, 146)',}]}>
                        Grid voltage 220 V
                       </Text>
                    </View>
                    <TouchableOpacity onPress={() => this.changeMode(1)}  >
                    <Text style={[styles.text,  { marginLeft:245,fontSize: 12,fontWeight: "500",letterSpacing:0.2,color: "#7a9ff8",}]}>
                     Done
                     </Text>
                    </TouchableOpacity>


                    <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser} style = {{height:20}}>
                     <Picker.Item label = "Grid-Tie with Backup (l)" value = "l" fontSize={10}/>
                     <Picker.Item label = "Grid-Tie with Backup (ll)" value = "ll" />
                     <Picker.Item label = "Grid-Tie with Backup (ll)" value = "lll" />
                     <Picker.Item label = "Grid-Tie with Backup (lV)" value = "lV" />
                     <Picker.Item label = "Grid-Tie with Backup (V)" value = "V" />
                    </Picker>

                  </View>

                 </View>
                  {this._renderRow(1400,70)}
                  {this._renderRow2(1400,70)}
                  {this._renderRow4(1400,500)}
                  {this._renderRow3(1400,70)}

                  <View style={{ paddingHorizontal: 12 }} ><AppCard /></View>
                  <View style={{ marginTop: 12, marginBottom: 12, paddingHorizontal: 12 }} ><SceneCard /></View>
                 </View>

             </View>

           </View>}
           {this.state.mode == 1 && <View style={styles.container}>
             <View style={{flex: 1, width: '100%'}}>
               <LinearGradient start={[0, 1]} end={[1, 1]} colors={[secondaryColor, primaryColor]} style={styles.header}>
                 <Text style={[styles.text, styles.titleText]}>Solar Inverter</Text>
               </LinearGradient>

               <View style={{marginTop: -120, width: '100%'}}>
                 <View style={[styles.cardContainer, styles.statusCard, {height: 152, justifyContent: 'space-between', flexDirection: 'column'}]}>
                   <View style={[styles.statusCardInfo]}>
                    <View style={{paddingTop: 16,paddingLeft: 35,flexDirection: 'row',}}>

                       <Text style={[styles.text,  { fontSize: 14,fontWeight: "500",letterSpacing:0.4,color: "#7a9ff8",}]}>
                        Growatt
                        </Text>
                    </View>
                    <View style={{paddingLeft: 35,flexDirection: 'row'}}>

                       <Text style={[styles.text, {  fontSize: 14,fontWeight: "600", color: "#b4b4b4",marginTop:8}]}>
                        Mode
                       </Text>
                       <TouchableOpacity onPress={() => this.changeMode(2)} style={[styles.buttonContainer,{justifyContent:'space-around',alignItems:'center'}]}>
                       <Text style={[styles.text,  { fontSize: 12,fontWeight: "500",letterSpacing:0.2,color: "#7a9ff8",}]}>
                        Grid-Tie with Backup (l)
                        </Text>
                       </TouchableOpacity>
                    </View>
                    <View style={{flexDirection :'row',paddingTop:0,paddingLeft:35}}>

                       <Text style={[styles.text, {marginLeft:0,marginTop:9,fontSize: 14,fontWeight:'600',letterSpacing:0.4,color: 'rgb(7, 225, 146)',}]}>
                        Grid voltage 220 V
                       </Text>
                    </View>

                  </View>

                  <SettingTab status={ true } onPressPower={ null } onPressSetting={ null } />

                 </View>
                  {this._renderRow(1400,70)}
                  {this._renderRow2(1400,70)}
                  {this._renderRow4(1400,500)}
                  {this._renderRow3(1400,70)}

                  <View style={{ paddingHorizontal: 12 }} ><AppCard /></View>
                  <View style={{ marginTop: 12, marginBottom: 12, paddingHorizontal: 12 }} ><SceneCard /></View>
                 </View>

             </View>

           </View>}
         </ScrollView>
       </View>
     );
   }
 }
