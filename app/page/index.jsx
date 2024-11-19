import { createRoot } from 'react-dom/client';
import React from "react"

function NavigationBar() {
    // TODO: 实际实现一个导航栏
    return <h1>Hello from React!</h1>;
  }
  
  const domNode = document.getElementById('navigation');
  const root = createRoot(domNode);
  root.render(<NavigationBar />);