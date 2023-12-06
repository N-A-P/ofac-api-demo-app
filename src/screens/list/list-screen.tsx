import {FlatList, ImageBackground, StyleSheet, View} from 'react-native';
import {Screen, Text} from '../../components';
import {PaddingHorizontal} from '../../components/padding';
import {VSpacing} from '../../components/spacing';
import {SHADOW_CONFIG} from '../../common/constant';
const MOCK_DATA = Array.from(Array(10).keys());

export function ListScreen() {
  return (
    <Screen>
      <PaddingHorizontal flex={1} padding={20}>
        <View style={styles.flex}>
          <View style={styles.header}>
            <Text text="User list" preset="heading" />
          </View>
          <FlatList
            data={MOCK_DATA}
            style={{flex: 1}}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={VSpacing}
            renderItem={({item, index}) => <ListItem />}
          />
        </View>
      </PaddingHorizontal>
    </Screen>
  );
}
function ListItem() {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.row}>
        <Text preset="bold" text="Name:" />
        <Text marginLeft={10} text="Full user name" />
      </View>
      <View style={styles.row}>
        <Text preset="bold" text="DOB:" />
        <Text marginLeft={10} text="10/12/2023" />
      </View>

      <View style={styles.row}>
        <Text preset="bold" text="Country:" />
        <Text marginLeft={10} text="VN" />
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
