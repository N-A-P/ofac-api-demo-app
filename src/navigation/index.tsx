import {NavigationContainerRef} from '@react-navigation/native';
import {RootStackParamsList, RootStackScreens} from './screen-types';
import {createRef} from 'react';

export * from './root-stack';

export const navigationRef =
  createRef<NavigationContainerRef<RootStackParamsList>>();

export function navigateScreen<RouteName extends RootStackScreens>(
  screens: RootStackScreens,
  params?: RootStackParamsList[RouteName],
) {
  navigationRef.current?.navigate(screens, params);
}
