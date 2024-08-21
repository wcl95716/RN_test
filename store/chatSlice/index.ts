// features/chat/chatSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMessage } from 'react-native-gifted-chat';
import { RootState } from '..';

export interface ICustomMessage extends IMessage {
  createdAt: number; // 使用时间戳代替 Date 对象
}

interface ChatState {
  messages: ICustomMessage[];
}

const initialState: ChatState = {
  messages: []
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<ICustomMessage>) => {
      state.messages = [action.payload, ...state.messages];
    },
    setMessages: (state, action: PayloadAction<ICustomMessage[]>) => {
      state.messages = action.payload;
    },
    resetMessages: (state) => {
      state.messages = [];
    },
  },
});

export const { addMessage, setMessages, resetMessages } = chatSlice.actions;
export default chatSlice.reducer;

// Selector
export const selectMessages = (state: RootState) => state.chat.messages;
