const Model = {
  namespace: 'themeModel',
  state: {
    currentTheme:'light',
  },
  effects: {
    *themeChangeHandle({ payload }, { put }) {
      try {
        const { theme = 'light' } = payload;
        let styleLink = document.getElementById('theme-style');
        const body = document.getElementsByTagName('body')[0];
        body.className = `body-wrap-${theme}`;
        if (styleLink) {
          styleLink.href = `/theme/${theme}.css`; // 切换 antd 组件主题
        } else {
          // 不存在的话，则新建一个
          styleLink = document.createElement('link');
          styleLink.type = 'text/css';
          styleLink.rel = 'stylesheet';
          styleLink.id = 'theme-style';
          styleLink.href = `/theme/${theme}.css`;
          document.body.append(styleLink);
        }
        yield put({
          type: 'save',
          payload: {
            currentTheme: theme,
          },
        });
      } catch (err) {
        // dealWithCatchError(err);
      }
    },
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
export default Model;
