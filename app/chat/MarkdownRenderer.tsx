import React from 'react';
import { WebView } from 'react-native-webview';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

const MarkdownRenderer = ({ markdown }) => {
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
          font-size: 16px; /* 调整字体大小 */
          box-sizing: border-box;
          width: 100%;
          max-width: 100%;
          overflow-x: hidden; /* 防止水平滚动 */
        }
        .markdown-body {
          width: 100%;
          padding: 16px;
          box-sizing: border-box;
        }
        pre { 
          position: relative; 
          padding: 0px; /* 调整内边距 */
          margin: 10px 0; /* 调整外边距 */
          background: #0d1117; 
          border-radius: 6px; 
          width: 100%; /* 使代码块宽度跟随页面宽度 */
          box-sizing: border-box;
          overflow: auto;
        }
        code {
          margin: 0; 
          padding: 0; 
          display: block; 
          white-space: pre-wrap; /* 使代码块内容换行 */
          font-size: 15px; /* 调整代码字体大小 */
        }
        .code-header { 
          background-color: #161b22; 
          padding: 8px 12px; 
          color: #8b949e; 
          font-size: 14px; /* 调整标题栏字体大小 */
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
      // style={{ flex: 1, width: '100%', height: "100%" }}
      style={{  width: '100%', height: "100%"  }}
    />
  );
};

export default MarkdownRenderer;
