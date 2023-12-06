import React, {ReactNode} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {ViewStyle} from 'react-native';

export function DarkShadow({
  children,
  style,
}: {
  style?: ViewStyle;
  children: ReactNode;
}) {
  return (
    <LinearGradient colors={['transparent', '#011', 'black']} style={style}>
      {children}
    </LinearGradient>
  );
}
