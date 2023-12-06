import React, {useCallback, useState} from 'react';
import {TouchableOpacity, Image, View} from 'react-native';

import Animated, {useAnimatedStyle} from 'react-native-reanimated';

// import { useMix, useSharedTransition } from '@animated';
// import { HIT_SLOP } from '@components/header/constants';

import {styles} from './styles';
import {CheckboxProps} from './type';

import {Text} from '../Text';
import {useSharedTransition, useMix} from '../../common/animation';
import {HIT_SLOP} from '../Button';

export const CheckBox = ({
  text,
  value,
  style,
  fillStyle,
  outlineStyle: outlineStyleOverwrite,
  onToggle,
  disable = false,
  initialValue = false,
}: CheckboxProps) => {
  // state
  const [localValue, setLocalValue] = useState<boolean>(initialValue);

  const progress = useSharedTransition(value ?? localValue);

  const scale = useMix(progress, 0, 1);

  const opacity = useMix(progress, 0, 1);
  // function
  const onPress = useCallback(() => {
    if (typeof value === 'boolean') {
      onToggle?.(!value);
    } else {
      onToggle?.(!localValue);
      setLocalValue(v => !v);
    }
  }, [localValue, onToggle, value]);

  // reanimated style
  const styleAnimated = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{scale: scale.value}],
  }));

  // render
  return (
    <TouchableOpacity
      activeOpacity={1}
      disabled={disable}
      hitSlop={HIT_SLOP}
      onPress={onPress}
      style={[styles.root, style]}>
      <>
        <View style={[styles.outline, outlineStyleOverwrite]}>
          <Animated.View style={[fillStyle, styleAnimated]}>
            <Image source={require('../../assets/images/ic_check.png')} />
          </Animated.View>
        </View>
        <Text
          color="#fff"
          fontWeight="500"
          fontSize={16}
          text={text}
          style={styles.label}
        />
      </>
    </TouchableOpacity>
  );
};
