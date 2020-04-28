import React, { Component } from 'react';
import { connect } from 'umi';
import PubSub from 'pubsub-js';
import WarpWidget from './WarpWidget.jsx';

import styles from './index.less';

@WarpWidget({ title: '柱状图' })
@connect(({ themeModel }) => ({
  theme: themeModel.currentTheme,
}))
class CongesMileSum extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let chart = window.echarts.init(document.getElementById('bar'), this.props.theme);
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          splitLine: {
            show: false,
          },
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true,
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          name: '直接访问',
          type: 'bar',
          barWidth: '60%',
          data: [10, 52, 200, 334, 390, 330, 220],
        },
      ],
    };

    chart.setOption(option);
    // 订阅主题
    this.themeChangeSubscribe = PubSub.subscribe('themeChange', (type, theme) => {
      chart.dispose();
      chart = window.echarts.init(document.getElementById('bar'), theme);
      chart.clear();
      chart.setOption(option);
    });
  }

  // 移除主题订阅
  componentWillUnmount() {
    PubSub.unsubscribe(this.themeChangeSubscribe);
  }

  render() {
    return (
      <div id="bar" className={styles.bar}>
        123
      </div>
    );
  }
}
export default CongesMileSum;
