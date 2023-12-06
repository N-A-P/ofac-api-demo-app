import {PropsWithChildren} from 'react';
import {View, ViewStyle} from 'react-native';

type Props = PropsWithChildren<{padding?: number} & ViewStyle>;
export function PaddingHorizontal({padding = 10, children, ...rest}: Props) {
  return <View style={{paddingHorizontal: padding, ...rest}}>{children}</View>;
}

export function PaddingVertical({padding = 10, children, ...rest}: Props) {
  return <View style={{paddingVertical: padding, ...rest}}>{children}</View>;
}
