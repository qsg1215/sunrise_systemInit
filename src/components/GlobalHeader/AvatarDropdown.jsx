import { LogoutOutlined, LockOutlined } from '@ant-design/icons';
import { Avatar, Menu, Spin } from 'antd';
import React from 'react';
import { connect } from 'umi';
import PubSub from 'pubsub-js';

import HeaderDropdown from './HeaderDropdown';

import styles from './index.less';

class AvatarDropdown extends React.Component {

  // 退出登陆
  handleLogOut = () => {
      const { dispatch } = this.props;
      if (dispatch) {
        dispatch({
          type: 'login/logout',
        });
      }
   
  };
  
  // 打开修改密码弹窗
  handleOpenUpdatePasswordModal = () => {
    PubSub.publish('updatePasswordModalVisible', true);
  }

  render() {
    const {
      currentUser = {
        avatar: '',
        name: '',
      }
    } = this.props;
    const menuHeaderDropdown = (
      <Menu className={styles.menu} selectedKeys={[]} >
          <Menu.Item key="changepw" onClick={this.handleOpenUpdatePasswordModal}>
            <LockOutlined /> 修改密码
          </Menu.Item>
         <Menu.Divider />
          <Menu.Item key="logout" onClick={this.handleLogOut}>
            <LogoutOutlined />
            退出登录
          </Menu.Item>
      </Menu>
    );
    return currentUser && currentUser.name ? (
      <HeaderDropdown overlay={menuHeaderDropdown}>
        <span className={`${styles.action} ${styles.account}`}>
          <Avatar size="small" className={styles.avatar} src={currentUser.avatar} alt="avatar" />
          <span className={styles.name}>{currentUser.name}</span>
        </span>
     
      </HeaderDropdown>
    ) : (
      <span className={`${styles.action} ${styles.account}`}>
        <Spin
          size="small"
          style={{
            marginLeft: 8,
            marginRight: 8,
          }}
        />
      </span>
    );
  }
}

export default connect(({ user }) => ({
  currentUser: user.currentUser,
}))(AvatarDropdown);
