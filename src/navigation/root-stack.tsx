import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {CategoryScreen} from '../screens/category';
import {LoginScreen} from '../screens/login';
import {navigationRef} from '.';

// const AuthedStack = createStackNavigator();
// const UnauthStack = createStackNavigator();
const MainStack = createStackNavigator();

export function RootNavigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack.Navigator>
        <MainStack.Screen name="LOGIN" component={LoginScreen} />
        <MainStack.Screen name="CATEGORY" component={CategoryScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
