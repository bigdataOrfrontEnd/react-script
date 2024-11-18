import { createRoot } from 'react-dom/client';

// 清除现有的 HTML 内容
document.body.innerHTML = '<div id="app"></div>';

// 渲染你的 React 组件
 createRoot(document.getElementById('app')).render(<h1>Hello, world</h1>);;
// root.render(<h1>Hello, world</h1>);