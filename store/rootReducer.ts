import { combineReducers } from '@reduxjs/toolkit';


// 导入你的 slice
import counterReducer from './counterSlice';
import chatReducer from "./chatSlice/index"

const rootReducer = combineReducers({
  counter: counterReducer, // 添加其他的 reducers
  chat: chatReducer,
});

export default rootReducer;
