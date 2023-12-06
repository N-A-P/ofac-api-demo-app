import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {HIT_SLOP} from './index';

const size = 10;

export function BackBtn({onPress}: {onPress?: () => void}) {
  return (
    <TouchableOpacity
      hitSlop={HIT_SLOP}
      onPress={onPress}
      style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.top} />
      </View>
      <View style={styles.wrapper}>
        <View style={styles.bottom} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: size * 2,
    width: size * 1.5,
    // justifyContent: 'center',
    alignItems: 'baseline',
    // backgroundColor: 'red',
  },
  wrapper: {flex: 1},
  top: {
    width: size * Math.sqrt(2),
    height: size / 5,
    borderRadius: size / 5,
    backgroundColor: '#fff',
    transform: [{rotateZ: '-45deg'}],
  },
  bottom: {
    width: size * Math.sqrt(2),
    height: size / 5,
    borderRadius: size / 5,
    backgroundColor: '#fff',
    transform: [{rotateZ: '45deg'}],
  },
});
