import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import Showdown from 'showdown';

const MarkdownView = ({ markdownText }) => {
  const converter = new Showdown.Converter();
  const htmlContent = useMemo(() => converter.makeHtml(markdownText), [markdownText]);

  const githubMarkdownCss = `
    /* 这里粘贴从github-markdown-css复制的CSS */
    .markdown-body {
      box-sizing: border-box;
      min-width: 200px;
      max-width: 980px;
      margin: 0 auto;
      padding: 45px;
    }

    /* 你可以继续添加更多的样式规则 */
  `;

  const htmlTemplate = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          ${githubMarkdownCss}
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif; }
          pre { background-color: #f4f4f4; padding: 15px; }
          code { background-color: #f4f4f4; padding: 2px 5px; }
        </style>
      </head>
      <body>
        <div class="markdown-body">
          ${htmlContent}
        </div>
      </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <WebView originWhitelist={['*']} source={{ html: htmlTemplate }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  }
});

export default MarkdownView;
