import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {CategoryScreen} from '../screens/category';
import {LoginScreen} from '../screens/login';
import {navigationRef} from '.';
import {RootStackParamsList} from './screen-types';

const MainStack = createStackNavigator<RootStackParamsList>();

export function RootNavigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack.Navigator screenOptions={{headerShown: false}}>
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen name="Category" component={CategoryScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
