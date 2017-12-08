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
  whatTodoContent: {
    width: '100%',
    height: '100%',
    marginTop: -48,
  },
  whatTodoBackground: {
    width: '100%',
    height: '100%',
  },
  whatTodoContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    flexDirection: 'column',
    alignItems: 'center',

  },
  header: {
    width: '100%',
    height: 120
  },
  statusInfo: {
    marginLeft: 35,
    flexDirection: 'column',
    height: 105,
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
    paddingLeft: 5,
  },
  ok: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    paddingTop: 5,
    color: "#b4b4b4",
  },
  caution: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    paddingTop: 5,
    color: '#ffce55',
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
  cameraIcon: {
    height: 65,
    width: 50,
    marginTop: 20,
    shadowColor: 'rgba(200, 200, 200, 1)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 1,
    shadowOpacity: 1,
  },
  toolsContainer: {
    marginTop: -313,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: '100%',
  },
  toolsAbsolute: {
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: '100%',
    paddingBottom: 25,
  },
  toolsBar: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: 40,
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    paddingLeft: 32,
    paddingRight: 32,
  },
  toolButton: {
    width: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },


  scalerContainer: {
    width: '100%',
    height: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 32,
    paddingRight: 32
  },
  scalerCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  scalerLabel: {
    color: '#ffffff',
    fontSize: 14, 
    marginTop: -2
  },
  Tick: {
    width: 1,
    height: 12,
    marginRight: 8.5,
    backgroundColor: '#ffffff',
  },
  subTick: {
    width: 1,
    height: 8,
    marginTop: 2,
    marginRight: 8.5,
    backgroundColor: '#ffffff',
    opacity: 0.3,
  }

});

export default styles;
