import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MultipleStylesExample() {
  return (
    <View style={styles.container}>
      <Text style={[styles.baseText, styles.additionalText]}>
        This is a text with merged styles.
      </Text>
      <Text style={[styles.baseText, styles.overrideText]}>
        This is another text with overridden styles.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  baseText: {
    fontSize: 20,
    color: '#000',
  },
  additionalText: {
    fontWeight: 'bold',
  },
  overrideText: {
    color: '#ff0000', // This will override the color in baseText
    fontStyle: 'italic',
  },
});
