import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import Header from './components/Header';
import AddItem, {IItem} from './components/AddItem';
import Item from './components/Item';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ScreenNames} from './route';

const App = ({navigation}: NativeStackScreenProps<any>) => {
  const [shoppingList, setShoppingList] = useState<IItem[]>([]);
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Shopping List" />
      <View style={styles.contentWrapper}>
        <AddItem
          setShoppingList={setShoppingList}
          shoppingList={shoppingList}
        />
        <FlatList
          data={shoppingList}
          keyExtractor={(item, index) => `${item.item}-${index}`}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(ScreenNames.TEST2)}>
              <Item item={item.item} quantity={item.quantity} />
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e7e3',
  },
  contentWrapper: {
    padding: 20,
  },
});
export default App;
