import {NavigationContainerRef} from '@react-navigation/native';
import {RootStackParamsList, RootStackScreens} from './screen-types';
import {createRef} from 'react';

export * from './root-stack';

export const navigationRef =
  createRef<NavigationContainerRef<RootStackParamsList>>();

export function navigateScreen<RouteName extends RootStackScreens>(
  ...arg: undefined extends RootStackParamsList[RouteName]
    ?
        | [screen: RouteName]
        | [screen: RouteName, params?: RootStackParamsList[RouteName]]
    : [screen: RouteName, params: RootStackParamsList[RouteName]]
) {
  navigationRef.current?.navigate(
    arg[0] as any,
    arg.length > 1 ? arg[1] : undefined,
  );
}
