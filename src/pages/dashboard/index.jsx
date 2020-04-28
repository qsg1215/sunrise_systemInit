import React from 'react';
import { connect } from 'umi';
import PubSub from 'pubsub-js';
import { Row, Col } from 'antd';
import MapTheme from './mapTheme';

import styles from './index.less';

// 工具列表
import Pie from './components/Pie.jsx'; // 饼图
import Bar from './components/Bar.jsx'; // 柱状图
import Line from './components/Line.jsx'; // 折线图
import AreaLine from './components/AreaLine.jsx'; // 面积折线图
import HorizontalBar from './components/HorizontalBar.jsx'; // 排行榜

const layout = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 12,
};
@connect(({ themeModel, user }) => ({
  theme: themeModel.currentTheme,
  ...user,
}))
export class DashboardGrid extends React.Component {
  render() {
    return (
      <div className={styles.realtimeTrafficAnalysis}>
        <Row gutter={[12, 12]}>
          <Col className="gutter-row" {...layout}>
            <div className={styles.widget}>
              {' '}
              <Pie />
            </div>
          </Col>
          <Col className="gutter-row" {...layout}>
            <div className={styles.widget}>
              <Line />
            </div>
          </Col>
          <Col className="gutter-row" {...layout}>
            <div className={styles.widget}>
              <Bar />
            </div>
          </Col>
          <Col className="gutter-row" {...layout}>
            <div className={styles.widget}>
              <AreaLine />
            </div>
          </Col>
          <Col className="gutter-row" span={24}>
            <div className={styles.widget}>
              <HorizontalBar />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

@connect(({ themeModel }) => ({
  theme: themeModel.currentTheme,
}))
export default class Dashboard extends React.Component {
  componentDidMount() {
    
   
    const map = new window.BMap.Map('map', { enableMapClick: false, minZoom: 11 });
    map.centerAndZoom(new window.BMap.Point(103.26462, 29.762742), 11);

    // 初始设置
    map.setMapStyleV2({ styleJson: MapTheme[this.props.theme] });

    // 订阅主题
    this.themeChangeSubscribe = PubSub.subscribe('themeChange', (type, theme) => {
      map.setMapStyleV2({ styleJson: MapTheme[theme] });
    });
  }

  // 移除主题订阅
  componentWillUnmount() {
    PubSub.unsubscribe(this.themeChangeSubscribe);
  }

  render() {
    return (
      <div className={styles.mapBox} id="map">
        地图
      </div>
    );
  }
}
