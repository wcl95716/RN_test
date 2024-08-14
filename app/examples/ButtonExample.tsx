// ButtonExample.tsx

// 示例 1: 自定义按钮组件
// 使用 TypeScript 定义组件和样式。
// 与传统 React 不同，React Native 中的样式是以对象形式定义的，而不是通过 CSS 类名。
// 展示了如何在 React Native 中处理触摸事件。

import React from "react";
import { View, Text, Alert, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";

export default function ButtonExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Button Example</Text>
      <CustomButton
        title="Click Me"
        onPress={() => Alert.alert("Button Pressed")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7f9fc",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
