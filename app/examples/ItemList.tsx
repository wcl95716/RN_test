// ItemList.tsx
import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";

const data = [
  { key: '1', title: 'Item 1' },
  { key: '2', title: 'Item 2' },
  { key: '3', title: 'Item 3' },
  { key: '4', title: 'Item 4' },
  { key: '5', title: 'Item 5' },
];

export default function ItemList() {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      )}
      keyExtractor={item => item.key}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "#3498db",
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    color: "#fff",
  },
});
