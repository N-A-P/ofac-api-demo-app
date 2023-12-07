import {
  DeviceEventEmitter,
  FlatList,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native';
import {Screen, Text} from '../../components';
import {PaddingHorizontal} from '../../components/padding';
import {VSpacing} from '../../components/spacing';
import {SHADOW_CONFIG} from '../../common/constant';
import {useTerroisStore} from '../../store';

function convertData(data: any) {
  const result: any = [];
  Object.entries(data).forEach(([name, matches]: any) => {
    result.push(...matches);
  });
  return result;
}

export function ListScreen() {
  const state: any = useTerroisStore(s => s);
  const data = convertData(state.data);

  const onRefresh = () => {
    DeviceEventEmitter.emit('refresh');
  };
  return (
    <Screen>
      <PaddingHorizontal flex={1} padding={20}>
        <View style={styles.flex}>
          <View style={styles.header}>
            <Text text="User list" preset="heading" />
          </View>
          <FlatList
            refreshControl={
              <RefreshControl
                onRefresh={onRefresh}
                refreshing={state.refreshing}
              />
            }
            data={data}
            style={{flex: 1}}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={VSpacing}
            renderItem={({item, index}) => <ListItem item={item} />}
          />
        </View>
      </PaddingHorizontal>
    </Screen>
  );
}
function ListItem({item}: any) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.row}>
        <Text preset="bold" text="Name:" />
        <Text marginLeft={10} text={item.fullName} />
      </View>
      <View style={styles.row}>
        <Text preset="bold" text="DOB:" />
        <Text marginLeft={10} text={item.dob} />
      </View>

      <View style={styles.row}>
        <Text preset="bold" text="UID :" />
        <Text marginLeft={10} text={item.uid} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  itemContainer: {
    ...SHADOW_CONFIG,
    flex: 1,
    height: 80,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
  },
  row: {flexDirection: 'row'},
  header: {
    marginVertical: 20,
  },
  flex: {flex: 1},
});
