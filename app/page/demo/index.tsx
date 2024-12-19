import React from "react";
// 在 SCSS 文件中，通常没有默认导出，因此需要使用
//  import * as styles from 
// './index.scss' 这种方式来导入所有样式
import * as styles from './index.scss'
import { Button } from "antd";


// import './index.css'
function NavigationBar() {
  console.log(styles);
  // TODO: 实际实现一个导航栏
  return (
    <div>
      <h1 className={styles['base']}>Hello from React!</h1>
      <Button type="primary">Button</Button>
    </div>
  );
}
export default NavigationBar;
