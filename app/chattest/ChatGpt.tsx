import React from 'react';
import { StyleSheet, View, TouchableOpacity, Alert, ScrollView, Text } from 'react-native';
import Markdown from 'react-native-markdown-display';

const messages = [
  "# Hello World\nTry **long pressing** this bubble!",
  "Here's a list:\n- Item 1\n- Item 2\n- Item 3",
  "## Markdown Example\nThis is *italic*, this is **bold**.",
  "Click [here](https://example.com) to visit!",
  "## Code Block\n```js\nconsole.log('Hello, world!');\n```"
];

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

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {messages.map((msg, index) => (
        <ChatBubble key={index} text={msg} />
      ))}
    </ScrollView>
  );
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
