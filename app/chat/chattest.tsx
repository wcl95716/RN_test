import { addMessage, ICustomMessage, selectMessages } from '@/store/chatSlice';
import React, { useCallback } from 'react';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import { useSelector, useDispatch } from 'react-redux';

export default function ChatComponent() {
  const rawMessages = useSelector(selectMessages);
  const dispatch = useDispatch();

  const messages = rawMessages.map(message => ({
    ...message,
    createdAt: new Date(message.createdAt)  // 将时间戳转换为 Date 对象
  }));

  const handleSend = useCallback((newMessages: IMessage[]) => {
    newMessages.forEach(message => {
      const customMessage = {
        ...message,
        createdAt: new Date(message.createdAt).getTime()  // 存储时间戳
      };
      dispatch(addMessage(customMessage as ICustomMessage));
    });
  }, [dispatch]);

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => handleSend(messages)}
      user={{ _id: 1 }}
    />
  );
}