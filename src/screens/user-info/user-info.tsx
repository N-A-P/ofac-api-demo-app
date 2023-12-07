import {Controller, useForm} from 'react-hook-form';
import {Screen, Text} from '../../components';
import FormInput from './components/form-Input';
import {PaddingHorizontal} from '../../components/padding/padding';
import DateInput from './components/date-input';
import {Button, DeviceEventEmitter} from 'react-native';
import {navigateScreen} from '../../navigation';
import {useEffect} from 'react';
import {searchByName} from '../../networking/search';
import {useTerroisStore} from '../../store';

/**
 *
 * @param date
 * ### **Task 7: Implement a Caching Mechanism**

**Instructions**: Set up a simple caching system for the API responses
 When the app makes a request, it should first check if there's a cached response
  for the same query.
 If so, use the cached data; otherwise, fetch new data from the API and cache it.
 * @returns
 */
function convertDate(date?: Date) {
  if (!date) {
    return '';
  }
  let month = String(date.getMonth() + 1);
  if (month.length > 2) {
    month = `0${month}`;
  }

  return `${date.getFullYear()}-${month}-${date.getDate()}`;
}

export function UserInfoScreen() {
  const {control, handleSubmit, formState, getValues} = useForm<{
    name: string;
    dob?: Date;
    country: string;
  }>();

  // useEffect(() => {
  //   searchByName()
  // },[])
  const store: any = useTerroisStore(s => s);

  const onPress = handleSubmit(async data => {
    // console.log(data.name);
    await fetchData(data);
    navigateScreen('List');
  });
  const fetchData = async (data: any) => {
    const res = (await searchByName({
      name: data.name,
      dob: convertDate(data.dob),
    })) as any;

    store.setData(res.matches);
  };
  useEffect(() => {
    const unSub = DeviceEventEmitter.addListener('refresh', async () => {
      store.refresh(true);

      await fetchData({name: getValues('name'), dob: getValues('dob')});
      store.refresh(false);
    });
    return () => unSub.remove();
  }, []);
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
