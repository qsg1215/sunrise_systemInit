import React from 'react';
import { connect } from 'umi';
import PubSub from 'pubsub-js';
import { Switch } from 'antd';

class ThemeChange extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'themeModel/themeChangeHandle',
      payload: {
        theme: this.props.theme,
      },
    });
  }

  handleChangeTheme = (status) => {
    const theme = status ? 'dark' : 'light';
    this.props.dispatch({
      type: 'themeModel/themeChangeHandle',
      payload: {
        theme,
      },
    });
    PubSub.publish('themeChange', theme);
  };

  render() {
    return (
      <div>
        暗黑模式:{' '}
        <Switch defaultChecked={this.props.theme === 'dark'} onChange={this.handleChangeTheme} />
        {/* <Button type="primary" onClick={() => this._handleChangeTheme('dark')}>深色主题</Button>
            <span style={{ width: '20px' }}>&nbsp;&nbsp;&nbsp;</span>
            <Button type="primary" onClick={() => this._handleChangeTheme('light')}>浅色主题</Button> */}
      </div>
    );
  }
}

export default connect(({ themeModel, user }) => ({
  theme: themeModel.currentTheme,
  ...user,
}))(ThemeChange);
