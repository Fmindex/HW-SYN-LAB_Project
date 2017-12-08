/* @flow */

import { StyleSheet } from 'react-native';

export const primaryColor: string = 'rgb(132,60,246)';
export const secondaryColor: string = 'rgb(56,184,242)';
export const accented1Color: string = 'rgb(255,106,0)';
export const accented2Color: string = 'rgb(238,9,121)';
export const backgroundColor: string = 'white';
export const primaryTextColor: string = 'rgb(52, 52, 52)';
export const secondaryTextColor: string = 'rgb(74,74,74)';
export const tertiaryTextColor: string = 'rgb(155, 155, 155)';
export const accentedTextColor: string = 'rgb(128, 158, 252)';

export default StyleSheet.create({
  display1: {
    fontSize: 36,
    color: secondaryTextColor
  },
  display2: {
    fontSize: 50,
    color: primaryTextColor
  },
  header: {
    fontSize: 15,
    color: accentedTextColor
  },
  caption: {
    fontSize: 13,
    color: tertiaryTextColor
  },
  card: {
    elevation: 2,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'white',
    shadowColor: 'rgba(201,201,201,0.5)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    // overflow: 'hidden'
  },
  dividerVertical: {
    backgroundColor: 'rgb(151,151,151)',
    width: 1,
    height: '100%'
  },
  dividerHorizontal: {
    backgroundColor: 'rgb(151,151,151)',
    width: '100%',
    height: 1
  },
  space: {
    flex: 1
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18
  },
  row: {
    flexDirection: 'row'
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});
