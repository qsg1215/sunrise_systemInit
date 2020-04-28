import React from 'react';
import { connect } from 'umi';
import Avatar from './AvatarDropdown';
{{#if isDoubleTheme}}
import ThemeChange from './ThemeChange';
{{else}}
  
{{/if}}
  

import UpdatePassword from './UpdatePassword';
import styles from './index.less';



const GlobalHeaderRight = (props) => {
  const { theme, layout } = props;

  let className = styles.right;

  if (theme === 'dark' && layout === 'topmenu') {
    className = `${styles.right}  ${styles.dark}`;
  }



  return (
    <div className={className}>
      {{#if isDoubleTheme}}
      <ThemeChange />
      {{else}}
  
       {{/if}}
     
      <Avatar />
      <UpdatePassword />
    </div>
    
  );
};

export default connect(({ settings }) => ({
  theme: settings.navTheme,
  layout: settings.layout,
}))(GlobalHeaderRight);
