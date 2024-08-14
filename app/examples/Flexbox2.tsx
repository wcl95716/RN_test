import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FlexExample() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.boxA]}>
        <Text style={styles.boxText}>A</Text>
      </View>
      <View style={[styles.box, styles.boxB]}>
        <Text style={styles.boxText}>B</Text>
      </View>
      <View style={[styles.box, styles.boxC]}>
        <Text style={styles.boxText}>C</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // 子元素水平排列
    height: 100,
    backgroundColor: '#f0f0f0',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxA: {
    flex: 1,
    backgroundColor: 'red',
  },
  boxB: {
    flex: 2,
    backgroundColor: 'green',
  },
  boxC: {
    flex: 1,
    backgroundColor: 'blue',
  },
  boxText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
