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
    width: '100%',
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
    paddingLeft: 5,
  },
  connectStatus: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    color: "#07e192",
    paddingTop: 5,
    paddingLeft: 5,
  },
  deviceImage: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 30,
    flex: 1,
  },
  deviceIcon: {
    height: 62, 
    width: 110, 
    marginTop: 20,
    shadowColor: 'rgba(200, 200, 200, 1)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 1,
    shadowOpacity: 1,
  },
  text: {
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },

  tempContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  titleText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#6e6e6e"
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tempText: {
    fontSize: 20,
    fontWeight: "300",
    color: "#4a4a4a"
  }
});

export default styles;
