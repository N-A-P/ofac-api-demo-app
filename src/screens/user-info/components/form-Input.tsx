import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import {AnimatedText, Text, TextInput} from '../../../components';
import Animated from 'react-native-reanimated';
// import AppIcon from '../../../assets/svg';

type Props = TextInputProps & {
  title: string;
  // onChangeText: (val: string) => void;
  // onBlur: () => void;
  error?: string;
  passwordLevel?: 1 | 2 | 3 | 4;
};

const FormInput = ({
  title = '',
  secureTextEntry = false,
  value,
  onChangeText,
  onBlur,
  error,
  passwordLevel,
  ...rest
}: Props) => {
  const [showPw, setShowPw] = useState(secureTextEntry);

  return (
    <View style={[styles.viewInput]}>
      <AnimatedText style={styles.titleStyle}>
        {value && value.length > 0 && title}
      </AnimatedText>
      <View style={styles.flexRow}>
        <TextInput
          value={value}
          keyboardAppearance="dark"
          onChangeText={onChangeText}
          placeholder={title}
          onBlur={onBlur}
          secureTextEntry={showPw}
          inputMode={secureTextEntry ? 'text' : 'email'}
          style={[
            styles.inputStyle,
            (!secureTextEntry || value?.length === 0) && styles.borderBottom,
          ]}
          {...rest}
        />
        {passwordLevel && <Animated.View />}
        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setShowPw(!showPw)}
            style={styles.pwIcon}>
            <Image
              //   style={{width: 10, height: 10}}
              source={require('../../../assets/images/ic_peak_pass.png')}
            />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text text={error} style={styles.validTxt} />}
    </View>
  );
};

const styles = StyleSheet.create({
  viewInput: {
    width: '100%',
    paddingBottom: 5,
    // backgroundColor: 'red',
  },
  flexRow: {},

  titleStyle: {
    fontSize: 12,
  },
  borderBottom: {
    borderBottomWidth: 1,
  },
  inputStyle: {
    paddingBottom: 5,
    paddingTop: 10,
    fontSize: 16,
  },
  pwIcon: {
    position: 'absolute',
    right: 0,
    top: 15,
  },
  validTxt: {
    color: 'red',
    paddingTop: 5,
    paddingLeft: 5,
    fontSize: 12,
  },
});

export default FormInput;
