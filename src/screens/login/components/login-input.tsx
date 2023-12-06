import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {AnimatedText, Text, TextInput} from '../../../components';
import Animated from 'react-native-reanimated';
// import AppIcon from '../../../assets/svg';

type Props = {
  title: string;
  secureTextEntry?: boolean;
  value: string;
  onChangeText: (val: string) => void;
  onBlur: () => void;
  error?: string;
  passwordLevel?: 1 | 2 | 3 | 4;
};

const AnimatedLabel = ({label = ''}) => {};

const LoginInput = ({
  title = '',
  secureTextEntry = false,
  value,
  onChangeText,
  onBlur,
  error,
  passwordLevel,
}: Props) => {
  const [showPw, setShowPw] = useState(secureTextEntry);

  return (
    <View style={[styles.viewInput]}>
      <AnimatedText style={styles.titleStyle}>
        {value?.length > 0 && title}
      </AnimatedText>
      <View style={styles.flexRow}>
        <TextInput
          value={value}
          keyboardAppearance="dark"
          onChangeText={onChangeText}
          placeholder={title}
          onBlur={onBlur}
          secureTextEntry={showPw}
          placeholderTextColor={'#FFFFFF80'}
          inputMode={secureTextEntry ? 'text' : 'email'}
          style={[
            styles.inputStyle,
            (!secureTextEntry || value.length === 0) && styles.borderBottom,
          ]}
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
      <Text style={styles.validTxt}>
        {!error && value ? 'Field is require' : ''}
      </Text>
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
    color: '#FFFFFF80',
    // backgroundColor: 'blue',
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#647FFF',
  },
  inputStyle: {
    paddingBottom: 5,
    paddingTop: 10,
    fontSize: 16,
    color: 'white',
    // borderBottomWidth: 1,
    // borderBottomColor: '#647FFF',
  },
  pwIcon: {
    position: 'absolute',
    // backgroundColor: 'red',
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

export default LoginInput;
