import React, { useState, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import Markdown from 'react-native-markdown-display';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  // Function to handle sending messages
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));

    // Simulate an API call to get a response from ChatGPT
    const chatGptResponse = {
      _id: Math.round(Math.random() * 1000000),
      text: 'ChatGPT Response in **Markdown** format',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'ChatGPT',
        avatar: 'https://placeimg.com/140/140/any',
      },
    };

    // Append the response to the messages
    setMessages(previousMessages => GiftedChat.append(previousMessages, chatGptResponse));
  }, []);

  // Custom renderBubble to display Markdown
  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#dcf8c6',
          },
          left: {
            backgroundColor: '#fff',
          },
        }}
        renderMessageText={(messageProps) => (
          <Markdown style={{ body: { color: messageProps.position === 'left' ? 'black' : 'white' } }}>
            {messageProps.currentMessage.text}
          </Markdown>
        )}
      />
    );
  };

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={renderBubble}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ChatScreen;