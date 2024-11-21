import { createRoot } from 'react-dom/client';
import React from "react";
import NavigationBar from "./demo/index";
const domNode = document.getElementById('navigation') as HTMLElement ;
  const root = createRoot(domNode);
  root.render(<NavigationBar />);