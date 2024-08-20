import React from 'react';
import { WebView } from 'react-native-webview';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import MarkdownIt from 'markdown-it';
import { View, StyleSheet } from 'react-native';
import MarkdownRenderer from './MarkdownRenderer'; // 确保文件路径正确


const md = new MarkdownIt();

const MarkdownMessage = ({ markdown }) => {
  const htmlContent = `
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/github-dark.min.css">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.10/clipboard.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/highlight.min.js"></script>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-size: 16px;
          box-sizing: border-box;
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }
        .markdown-body {
          width: 100%;
          padding: 0;
          box-sizing: border-box;
        }
        pre {
          position: relative;
          padding: 10px;
          margin: 10px 0;
          background: #0d1117;
          border-radius: 6px;
          width: 100%;
          box-sizing: border-box;
          overflow: auto;
        }
        code {
          margin: 0;
          padding: 0;
          display: block;
          white-space: pre-wrap;
          font-size: 15px;
        }
        .code-header {
          background-color: #161b22;
          padding: 8px 12px;
          color: #8b949e;
          font-size: 14px;
          border-top-left-radius: 6px;
          border-top-right-radius: 6px;
          display: flex;
          justify-content: space-between;
          width: 100%;
          box-sizing: border-box;
        }
        .copy-btn {
          background: none;
          border: none;
          color: #8b949e;
          cursor: pointer;
        }
        .copy-btn:hover {
          color: white;
        }
      </style>
    </head>
    <body>
      <div class="markdown-body">
        ${md.render(markdown)}
      </div>
      <script>
        document.querySelectorAll('pre code').forEach(block => {
          hljs.highlightBlock(block);
          const classNameParts = block.className.split(' ');
          const languageClass = classNameParts.find(cls => cls.startsWith('language-'));
          const language = languageClass ? languageClass.replace('language-', '') : 'plaintext';
          
          const header = document.createElement('div');
          header.className = 'code-header';
          header.innerHTML = '<span>' + language + '</span><button class="copy-btn">复制代码</button>';
          block.parentNode.insertBefore(header, block);

          const copyButton = header.querySelector('.copy-btn');
          new ClipboardJS(copyButton, { text: () => block.textContent });
          copyButton.addEventListener('click', () => {
            copyButton.textContent = '已复制';
            setTimeout(() => { copyButton.textContent = '复制代码'; }, 2000);
          });
        });
      </script>
    </body>
    </html>
  `;

  return (
    <WebView
      originWhitelist={['*']}
      source={{ html: htmlContent }}
      style={{ flex: 1, height: 200 }}
    />
  );
};

const ChatScreen = () => {
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: '',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
        },
        markdown: '```javascript\nconsole.log("Hello World");\n```',
      },
    ]);
  }, []);

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: { backgroundColor: '#f0f0f0' },
          right: { backgroundColor: '#0078FF' },
        }}
        renderCustomView={() =>
          props.currentMessage.markdown ? (
            <View style={styles.markdownContainer}>
              <MarkdownRenderer markdown={props.currentMessage.markdown} />
            </View>
          ) : null
        }
      />
    );
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={(newMessages) => setMessages(GiftedChat.append(messages, newMessages))}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
    />
  );
};

const styles = StyleSheet.create({
  markdownContainer: {
    width: 250, // 调整宽度以适应气泡
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default ChatScreen;
