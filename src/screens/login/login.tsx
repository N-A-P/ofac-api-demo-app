import {Button, View} from 'react-native';
import {Text} from '../../components';
import {navigateScreen} from '../../navigation';

export function LoginScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>This is login screen</Text>
      <Button title="go" onPress={() => navigateScreen('Category')} />
    </View>
  );
}
