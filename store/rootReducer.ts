import { combineReducers } from '@reduxjs/toolkit';

// 导入你的 slice
import counterReducer from './counterSlice';

const rootReducer = combineReducers({
  counter: counterReducer, // 添加其他的 reducers
});

export default rootReducer;
