import React from 'react';
import { SafeAreaView, View } from 'react-native';
import MarkdownRenderer from './MarkdownRenderer'; // 确保文件路径正确

const App = () => {
  const markdownText = `
  ## 实现代码

  以下是一个实现 GitHub 风格 Markdown 渲染的示例代码：

  \`\`\`javascript
  import React from 'react';
  import { View, StyleSheet } from 'react-native';
  import { WebView } from 'react-native-webview';
  import showdown from 'showdown';
  \`\`\`


  \`\`\`javascript
  import React from 'react';
  import { View, StyleSheet } from 'react-native';
  import { WebView } from 'react-native-webview';
  import showdown from 'showdown';
  \`\`\`
  
  \`\`\`bash
  import React from 'react';
  import { View, StyleSheet } from 'react-native';
  import { WebView } from 'react-native-webview';
  import showdown from 'showdown';
  123
  \`\`\`
  


  \`\`\`javascript
  import React from 'react';
  import { View, StyleSheet } from 'react-native';
  import { WebView } from 'react-native-webview';
  import showdown from 'showdown';
  \`\`\`

`;

  return (
    <View style={{ flex: 1 }}>
      <MarkdownRenderer markdown={markdownText} />
    </View>
  );
};

export default App;
