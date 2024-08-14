// app/examples/index.tsx
import { useAppDispatch, useAppSelector } from '@/store';
import { increment, selectCount } from '@/store/counterSlice';
import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';

export default function ExamplesScreen() {
    const count = useAppSelector(selectCount);
    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log('count:', count);
    }, [count]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title='add' onPress={()=>{
            dispatch(increment())
        }}>
            
        </Button>
      <Text>Count :{count}</Text>
    </View>
  );
}
