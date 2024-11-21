import React from "react";
import styles from './index.scss'
import { Button } from "antd";
console.log(styles);

// import './index.css'
function NavigationBar() {
  // TODO: 实际实现一个导航栏
  return (
    <div>
      <h1 className={styles['base']}>Hello from React!</h1>
      <Button type="primary">Button</Button>
    </div>
  );
}
export default NavigationBar;
