import {View} from 'react-native';

type Props = {space?: number};
export function VSpacing({space = 10}: Props) {
  return <View style={{height: space}} />;
}

export function HSpacing({space = 10}: Props) {
  return <View style={{width: space}} />;
}
