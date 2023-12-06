import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ListScreen} from '../screens/list';
import {navigationRef} from '.';
import {RootStackParamsList} from './screen-types';
import {UserInfoScreen} from '../screens/user-info';

const MainStack = createStackNavigator<RootStackParamsList>();

export function RootNavigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack.Navigator
      //  screenOptions={{headerShown: false}}
      >
        <MainStack.Screen name="UserInfo" component={UserInfoScreen} />
        <MainStack.Screen name="List" component={ListScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
