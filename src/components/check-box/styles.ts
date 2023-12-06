import {StyleSheet} from 'react-native';

const DIMENSIONS = {width: 25, height: 25};

export const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    paddingVertical: 4,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  outline: {
    ...DIMENSIONS,
    marginTop: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: '#647FFF',
  },
  // fill: {
  //   width: DIMENSIONS.width,
  //   height: DIMENSIONS.height,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  label: {
    paddingLeft: 8,
  },
});
