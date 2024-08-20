import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat, IMessage, Bubble, BubbleProps } from 'react-native-gifted-chat';
import { StyleSheet, View, TouchableOpacity, Alert, ScrollView, Text } from 'react-native';
import Markdown from 'react-native-markdown-display';

interface ICustomMessage extends IMessage {
  isMarkdown?: boolean;
}

const ChatBubble: React.FC<{ text: string }> = ({ text }) => {
  const handleLongPress = () => {
    Alert.alert('Long Press', 'You pressed the bubble!');
  };

  return (
    <TouchableOpacity onLongPress={handleLongPress} style={styles.bubble}>
      <Markdown style={styles.markdown}>
        {text}
      </Markdown>
    </TouchableOpacity>
  );
};

export default function Example() {
  const [messages, setMessages] = useState<ICustomMessage[]>([])

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: `
  ## 实现代码

  以下是一个实现 GitHub 风格 Markdown 渲染的示例代码：

  \`\`\`javascript
  import React from 'react';
  import { View, StyleSheet } from 'react-native';
  import { WebView } from 'react-native-webview';
  import showdown from 'showdown';
  \`\`\`
        
        
        `,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
        isMarkdown: true,
      },
    ])
  }, [])

  const onSend = useCallback((messages: ICustomMessage[] = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
  }, [])

  const renderBubble = (props: BubbleProps<ICustomMessage>) => {
    if (props.currentMessage?.isMarkdown) {
      return <ChatBubble text={props.currentMessage.text} />;
    }
    return <Bubble {...props} />;
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
    />
  )
}

const styles = StyleSheet.create({
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
  markdown: {
    fontSize: 16,
  }
});
