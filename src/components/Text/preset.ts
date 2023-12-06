import {StyleSheet} from 'react-native';

export const textPresets = StyleSheet.create({
  heading: {
    // fontFamily: FontDefault.primary,
    fontSize: 25,
    fontWeight: '600',
    lineHeight: 30,
  },
  bold: {
    fontWeight: 'bold',
  },
  default: {},
});

export type TextPresetNames = keyof typeof textPresets;
