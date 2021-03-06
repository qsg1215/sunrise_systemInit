import api from './api'
export default {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'sidemenu',
  contentWidth: 'Fluid',
  fixedHeader: false,
  autoHideHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  menu: {
    locale: true,
  },
  title: '{{systemTitle}}',
  pwa: false,
  iconfontUrl: '//at.alicdn.com/t/font_1762118_d5v7tl0ikx.js',
  ...api
}
