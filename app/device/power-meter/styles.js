/* @flow */

import { StyleSheet } from 'react-native';
import { accentedTextColor, primaryColor } from '../../common/styles';

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    shadowColor: 'rgba(201,201,201,0.5)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    marginBottom: 11,
    // overflow: 'hidden'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    marginTop: -48,
    paddingLeft: 16,
    paddingRight: 16,
  },
  header: {
    width: '100%',
    height: 120
  },
  statusInfo: {
    marginLeft: 35,
    marginTop: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
  deviceName: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    color: "#7a9ff8"
  },
  locationName: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    color: "#b4b4b4",
    paddingTop: 5,
  },
  connectStatus: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    color: "#07e192",
    paddingTop: 5,
  },
  deviceImage: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 105,
    paddingRight: 30,
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },


  

});

export default styles;
