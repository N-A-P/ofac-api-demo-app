import React, {PropsWithChildren} from 'react';
import {
  ImageBackground,
  ImageResizeMode,
  ImageStyle,
  StatusBar,
  StatusBarStyle,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = PropsWithChildren<{
  barStyle?: StatusBarStyle;
  safeInset?: boolean;
  bgImage?: {
    source: number;
    style?: ViewStyle;
    resizeMode?: ImageResizeMode;
    imageStyle?: StyleProp<ImageStyle>;
  };
}>;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export const Screen = ({
  children,
  safeInset,
  bgImage,
  barStyle = 'light-content',
}: Props) => {
  const insets = useSafeAreaInsets();
  if (bgImage) {
    return (
      <View style={[styles.screen]}>
        <StatusBar barStyle={barStyle} />
        <ImageBackground
          style={[bgImage.style]}
          imageStyle={bgImage.imageStyle}
          resizeMode={bgImage.resizeMode}
          source={bgImage.source}>
          <View
            style={[
              styles.screen,
              safeInset && {
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
              },
            ]}>
            {children}
          </View>
        </ImageBackground>
      </View>
    );
  }
  return (
    <View
      style={[
        styles.screen,
        safeInset && {paddingTop: insets.top, paddingBottom: insets.bottom},
      ]}>
      <StatusBar barStyle={barStyle} />
      {children}
    </View>
  );
};
