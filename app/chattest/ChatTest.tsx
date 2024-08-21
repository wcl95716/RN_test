import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat, IMessage } from 'react-native-gifted-chat'
import { StyleSheet, View, TouchableOpacity, Alert, ScrollView, Text } from 'react-native';
import Markdown from 'react-native-markdown-display';


const ChatBubble = ({ text }) => {
  const handleLongPress = () => {
    Alert.alert('Long Press', 'You pressed the bubble!');
  };

  return (
    <TouchableOpacity onLongPress={handleLongPress} style={styles.bubble}>
      <Markdown style={{ body: styles.markdownText }}>
        {text}
      </Markdown>
    </TouchableOpacity>
  );
};


export default function Example() {
  const [messages, setMessages] = useState<IMessage[]>([])

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages:IMessage[] = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#f0f0f0',
  },
  bubble: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  markdownText: {
    fontSize: 16,
  }
});
