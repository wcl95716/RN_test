import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat, IMessage, Bubble, BubbleProps } from 'react-native-gifted-chat';
import { StyleSheet, View, TouchableOpacity, Alert, ScrollView, Text } from 'react-native';
import Markdown from 'react-native-markdown-display';


// 样式
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
    fontSize: 14,
  }
});

// 扩展 IMessage 接口以包含 Markdown 内容的标志
interface ICustomMessage extends IMessage {
  isMarkdown?: boolean; // 是否是Markdown格式的消息
}


// 自定义组件，用于渲染包含 Markdown 的消息
const ChatBubble: React.FC<{ text: string }> = ({ text }) => {
  const handleLongPress = () => {
    Alert.alert('Long Press', '你长按了消息泡泡！'); // 长按提示
  };

  return (
    <TouchableOpacity onLongPress={handleLongPress} style={styles.bubble}>
      <Markdown style={{ body: styles.markdown }}>
        {text}
      </Markdown>
    </TouchableOpacity>
  );
};

// 主组件
export default function Example() {
  const [messages, setMessages] = useState<ICustomMessage[]>([]); // 消息数组的状态
 
  const fullText = `
  ## 实现代码
  
  以下是一个实现 GitHub 风格 Markdown 渲染的示例代码：
  
  \`\`\`javascript
  import React from 'react';
  import { View, StyleSheet } from 'react-native';
  import { WebView } from 'react-native-webview';
  import showdown from 'showdown';
  \`\`\`
    `;

  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setCurrentText(fullText.slice(0, index));
        console.log("asdasd ",fullText.slice(0, index))
        index++;
      } else {
        setCurrentText("");
        clearInterval(interval);
      }
    }, 50); // 控制文本显示速度

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // 初始消息设置
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

  // 发送消息的回调函数
  const onSend = useCallback((messages: ICustomMessage[] = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
  }, [])

  // 渲染每个气泡的函数，根据消息是否为Markdown来决定使用哪个组件
  const renderBubble = (props: BubbleProps<ICustomMessage>) => {
    // if (currentText.length > 0 ){
    //   return <ChatBubble text={currentText} />;
    // }
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
        _id: 1, // 当前用户的ID
      }}
      renderBubble={renderBubble} // 使用自定义的渲染气泡方法
    />
  )
}

