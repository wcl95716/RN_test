// app/_layout.tsx
import { Stack } from 'expo-router';
// app/_layout.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';

export default function Layout() {
  return (
    <Provider store={store}>
          <Stack
      screenOptions={{
        gestureEnabled: true, // 确保手势导航启用
        headerShown: true, // 显示全局导航栏
      }}
    />
    </Provider>

  );
}
