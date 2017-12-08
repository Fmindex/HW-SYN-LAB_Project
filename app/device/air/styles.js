/* @flow */

import { StyleSheet } from 'react-native';
import { accentedTextColor, primaryColor } from '../../common/styles';

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    borderColor: 'white',
    shadowColor: 'rgba(201,201,201,0.5)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    // overflow: 'hidden'
  },
  caption: {
    textAlign : 'center',
    fontSize: 20,
    color: 'rgb(155, 155, 155)'
  },
  captionActive: {
    textAlign : 'center',
    fontSize: 20,
    color: 'rgb(46,180,255)'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  content: {
    width: '100%',
    marginTop: -48,
    paddingLeft: 16,
    paddingRight: 16,
  },
  column: {
  flexDirection:'column',
  justifyContent: 'center',
  },

  header: {
    width: '100%',
    height: 120
  },

  weather: {
    width:351,
    height:152,
    flexDirection:'column',
    justifyContent: 'space-around',
  },
  Control: {
    marginTop:12,
    padding: 8
  },
  icon: {
    width: 200,
    height: 200,
    backgroundColor: 'red'
  },
  city: {
    color: 'rgb(122,159,248)',
    marginTop:13,

  },
  rooms: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  roomImage: {
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    width: '100%',
    height: 166,
    overflow: 'hidden',
  },
  roomBox: {
    padding: 8
  },
  divider: {
    height: 64,
    margin: 16
  },


  awayText:{
    color: 'white',
    backgroundColor: 'transparent'
  }


});

export default styles;
