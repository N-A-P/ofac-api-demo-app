import {
  Image,
  ImageBackground,
  Pressable,
  PressableProps,
  StyleSheet,
  View,
} from 'react-native';
import {BackBtn, Screen, Text} from '../../components';
import LoginInput from './components/login-input';
import {Controller, useForm} from 'react-hook-form';
import {CheckBox} from '../../components/check-box';
import {DarkShadow} from '../../components/Shadow';

export function LoginScreen() {
  return (
    <Screen
      safeInset
      bgImage={{
        style: styles.container,
        source: require('../../assets/images/signup_cover.png'),
        imageStyle: styles.bgImg,
        resizeMode: 'cover',
      }}>
      <DarkShadow style={styles.linearGradient}>
        <View style={[styles.topUI]}>
          <BackBtn />
          <View style={styles.paddingTop}>
            <Text color="#fff" preset="heading">
              Let's get you started
            </Text>
          </View>
        </View>
        <View style={[styles.flex4]}>
          <UserInput />
        </View>
      </DarkShadow>
    </Screen>
  );
}

function UserInput() {
  const {control, handleSubmit, formState} = useForm({
    defaultValues: {
      username: '',
      password: '',
      appropriateAge: false,
    },
  });

  const onSubmit = handleSubmit(data => {
    //
    console.log(data);
  });
  console.log(formState.errors);

  return (
    <View style={styles.flex}>
      <Controller
        control={control}
        name="username"
        // a simple email regex
        rules={{
          required: true,
          pattern: /^\S+@\S+\.\S+$/,
        }}
        render={({field, fieldState, formState}) => (
          <LoginInput
            title="Your email"
            error={fieldState.error?.message}
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            value={field.value}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({field}) => (
          <LoginInput
            title="Your password"
            secureTextEntry
            error=""
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            value={field.value}
          />
        )}
      />
      <Controller
        control={control}
        rules={{validate: v => v}}
        name="appropriateAge"
        render={({field}) => (
          <CheckBox
            text="I am over 16 year old"
            onToggle={field.onChange}
            value={field.value}
          />
        )}
      />
      <View style={styles.warper2}>
        <TermOfService />
        <View style={styles.submitWraper}>
          <Text color="#fff" preset="heading">
            Sign up
          </Text>
          <SubmitButton onPress={onSubmit} />
        </View>
      </View>
    </View>
  );
}
function TermOfService() {
  return (
    <View style={styles.ToS}>
      <Text color="#FFFFFF">
        By clicking Sign Up, you are indicating that you have read and agree to
        the <Text color="#647FFF">Terms of Service</Text> and{' '}
        <Text color="#647FFF">Privacy Policy</Text>
      </Text>
    </View>
  );
}
const SubmitButton = (props: PressableProps) => {
  return (
    <Pressable
      style={[
        styles.submitBtn,
        {borderColor: props.disabled ? '#FFFFFF' : '#647FFF'},
      ]}
      {...props}>
      <Image source={require('../../assets/images/ic_arrow.png')} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  flex: {flex: 1},
  container: {flex: 1},
  linearGradient: {
    flex: 1,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  bgImg: {height: '50%'},
  paddingTop: {paddingBottom: 50},
  topUI: {
    flex: 3,
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  flex4: {
    flex: 4,
    //  backgroundColor: 'indigo'
  },
  warper2: {
    flex: 1,
    justifyContent: 'space-around',
  },
  ToS: {
    marginTop: 20,
  },
  submitWraper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  submitBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
