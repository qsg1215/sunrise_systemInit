import React from 'react';
import { connect } from 'umi';
import { Modal, Form, Input } from 'antd';
import PubSub from 'pubsub-js';

const layout = {
  labelCol: {
    xs: {span: 24},
    sm: {span: 24},
    md: {span:  6},
    lg:  {span: 6},
    xl:  {span: 6},
    xxl:  {span: 6},
  },
  wrapperCol: {
    xs: { span: 24},
    sm: {span: 24},
    md: { span: 18},
    lg: { span: 18},
    xl: {span: 18},
    xxl:{ span: 18},
  }
}




class UpdatePassword extends React.Component {
  state = {
    modalVisible: false,
  };

  // 监听修改密码弹窗事件
  componentDidMount() {
    this.updatePasswordModalVisibleSubscribe = PubSub.subscribe('updatePasswordModalVisible', (type, modalVisible) => {
      this.setState({ modalVisible })
    })
  }

  // 移除监听
  componentWillUnmount() {
    PubSub.unsubscribe('updatePasswordModalVisible')
  }


  handleConfirmModal = () => {
    this.setState({ modalVisible: false });
  }

  handleCancelModal = () => {
    this.setState({ modalVisible: false });
  }

  render() {
    return <Modal
      title="修改密码"
      style={{ top: 20 }}
      visible={this.state.modalVisible}
      onOk={this.handleConfirmModal}
      onCancel={this.handleCancelModal}
    >
      <Form
         {...layout}
          name="basic"
          initialValues={{ remember: true }}
        
        >
          <Form.Item
            label="旧密码"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="新密码"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="确认新密码"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
        </Form>

    </Modal>


  }
}

export default connect(({ user }) => ({
  ...user,
}))(UpdatePassword);
