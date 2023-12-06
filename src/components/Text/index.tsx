import React, {useMemo} from 'react';
import {
  Text as ReactNativeText,
  StyleProp,
  StyleSheet,
  TextStyle,
} from 'react-native';

import {textPresets} from './preset';
import {TextProps} from './type';
import Animated from 'react-native-reanimated';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
const propsToStyle = (arrStyle: Array<TextStyle>) => {
  return arrStyle.filter(
    x => x !== undefined && !Object.values(x).some(v => v === undefined),
  );
};
export const Text = React.forwardRef<ReactNativeText, TextProps>(
  (
    {
      text,
      flex,
      color,
      center,
      children,
      fontSize,
      textAlign,
      fontStyle,
      lineHeight,
      fontWeight,
      //   fontFamily,
      //   colorTheme = 'text',
      t18nOptions,
      textTransform,
      letterSpacing,
      preset = 'default',
      marginLeft,
      marginRight,
      style: styleOverride = {},
      ...rest
    }: TextProps,
    ref,
  ) => {
    // state

    const content = useMemo(() => text || children, [text, children]);

    const styleComponent = useMemo<StyleProp<TextStyle>>(
      () => [
        [
          textPresets[preset],
          flex === true && styles.flex,
          fontSize !== undefined && {fontSize: fontSize},
          //   fontFamily !== undefined && { fontFamily: FontDefault[fontFamily] },
          //   colorTheme !== undefined && { color: theme.colors[colorTheme] },
          center && {textAlign: 'center'},
          propsToStyle([
            {fontWeight},
            {color},
            {textAlign},
            {textTransform},
            {fontStyle},
            {letterSpacing},
            {lineHeight},
            {marginLeft},
            {marginRight},
          ]),
        ],
      ],
      [
        preset,
        flex,
        fontSize,
        // fontFamily,
        // colorTheme,
        // theme.colors,
        center,
        fontWeight,
        color,
        textAlign,
        textTransform,
        fontStyle,
        letterSpacing,
        marginLeft,
        marginRight,
        lineHeight,
      ],
    );

    // render
    return (
      <ReactNativeText
        ref={ref}
        allowFontScaling={false}
        {...rest}
        style={[styleComponent, styleOverride]}>
        {content}
      </ReactNativeText>
    );
  },
);
export const AnimatedText = Animated.createAnimatedComponent(Text);
