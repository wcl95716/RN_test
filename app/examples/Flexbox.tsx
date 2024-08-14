import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function FlexboxLayoutExample() {
  return (
    <View style={styles.container}>
      {/* 标题部分 */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to My App</Text>
      </View>

      {/* 内容部分 */}
      <View style={styles.content}>
        <Text style={styles.contentText}>
          This is where the main content of the app goes. You can add text, images, or any other components here.
        </Text>
      </View>

      {/* 按钮部分 */}
      <View style={styles.footer}>
        <Button title="Get Started" onPress={() => alert('Button Pressed')} />
        <Button title="Learn More" onPress={() => alert('Learn More Pressed')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // 让容器填满整个屏幕
    backgroundColor: '#f8f9fa',
  },
  header: {
    flex: 1, // 占据屏幕的 1/5
    justifyContent: 'center', // 垂直居中
    alignItems: 'center', // 水平居中
    backgroundColor: '#343a40',
  },
  headerText: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  content: {
    flex: 3, // 占据屏幕的 3/5
    justifyContent: 'center', // 垂直居中
    alignItems: 'center', // 水平居中
    paddingHorizontal: 20,
  },
  contentText: {
    fontSize: 18,
    color: '#495057',
    textAlign: 'center',
  },
  footer: {
    flex: 1, // 占据屏幕的 1/5
    justifyContent: 'space-around', // 在主轴上均匀分布按钮
    alignItems: 'center', // 水平居中
    flexDirection: 'row', // 按钮水平排列
    backgroundColor: '#adb5bd',
    paddingHorizontal: 20,
  },
});
