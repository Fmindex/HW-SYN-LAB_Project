/* @flow */

import { StyleSheet } from 'react-native';
import { accentedTextColor, primaryColor } from '../../common/styles';

const styles = StyleSheet.create({
  card: {
    elevation: 2,
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
    alignItems: 'center'
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
  controlCardBackground: {
    width: '100%',
    height: '100%',
  },
  controlContent: {
    marginTop: -428,
    flexDirection: 'row',
    height: '100%',
  },
  controlMessage: {
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 50,
  },
  messageContainer: {
    flexDirection: 'column', 
    justifyContent: 'flex-end', 
  },
  message: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    color: "#ffffff",
    marginBottom: 18,
    textAlignVertical: 'bottom',
    textAlign: 'center',
  },
  controlImage: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  micButton: {
    width: 55,
    height: 55,
    shadowColor: "rgba(175, 175, 175, 0.5)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    borderRadius: 55/2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fadeBar: {
    width: '100%',
    height: 55,
    position: 'absolute',
    backgroundColor: "rgba(112, 114, 158, 0.3)",
    marginTop: 360,
  },
  speakerImage: {
    width: 122.5, 
    height: 389,
    marginTop: 20,
  },
  text: {
    backgroundColor: 'rgba(0, 0, 0, 0)'
  }

});

export default styles;
