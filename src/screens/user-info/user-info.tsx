import {Controller, useForm} from 'react-hook-form';
import {Screen, Text} from '../../components';
import FormInput from './components/form-Input';
import {PaddingHorizontal} from '../../components/padding/padding';
import DateInput from './components/date-input';
import {Button} from 'react-native';
import {navigateScreen} from '../../navigation';

export function UserInfoScreen() {
  const {control, handleSubmit} = useForm<{
    name: string;
    dob?: Date;
    country: string;
  }>();
  const onPress = handleSubmit(data => {
    console.log(data);
    navigateScreen('List');
  });
  return (
    <Screen safeInset>
      <PaddingHorizontal>
        <Text preset="heading" text="Input user info" />
        <Controller
          control={control}
          name="name"
          render={({field, fieldState}) => (
            <FormInput
              title="Full name"
              error={fieldState.error?.message}
              onChangeText={field.onChange}
              onBlur={field.onBlur}
              value={field.value}
            />
          )}
        />
        <Controller
          control={control}
          name="dob"
          render={({field, fieldState}) => (
            <DateInput
              title="Date of birth"
              placeholder="Date of birth"
              onChange={field.onChange}
              error={fieldState.error?.message}
              onBlur={field.onBlur}
              value={field.value}
            />
          )}
        />
        <Controller
          control={control}
          name="country"
          render={({field, fieldState}) => (
            <FormInput
              title="Country"
              error={fieldState.error?.message}
              onChangeText={field.onChange}
              onBlur={field.onBlur}
              value={field.value}
            />
          )}
        />
        <Button onPress={onPress} title="Next Screen" />
      </PaddingHorizontal>
    </Screen>
  );
}
