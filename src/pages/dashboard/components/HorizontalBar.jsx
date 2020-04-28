import React, { Component } from 'react';
import { connect } from 'umi';
import PubSub from 'pubsub-js';
import WarpWidget from './WarpWidget.jsx';
import styles from './index.less';

@WarpWidget({ title: '水平方向柱状图' })
@connect(({ themeModel }) => ({
  theme: themeModel.currentTheme,
}))
class CongesMileSum extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let chart = window.echarts.init(document.getElementById('horizontalBar'), this.props.theme);
    const option = {
      legend: {
        data: ['高度(km)与气温(°C)变化关系'],
      },
      tooltip: {
        trigger: 'axis',
        formatter: 'Temperature : <br/>{b}km : {c}°C',
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'value',
        splitLine: {
          show: false,
        },
        axisLabel: {
          formatter: '{value} °C',
        },
      },
      yAxis: {
        type: 'category',
        axisLine: { onZero: false },
        axisLabel: {
          formatter: '{value} km',
        },
        boundaryGap: true,
        data: ['0', '10', '20', '30', '40', '50', '60', '70', '80'],
      },
      series: [
        {
          name: '高度(km)与气温(°C)变化关系',
          type: 'bar',
          smooth: true,
          // barCategoryGap: 50,
          lineStyle: {
            width: 3,
            shadowColor: 'rgba(0,0,0,0.4)',
            shadowBlur: 10,
            shadowOffsetY: 10,
          },
          data: [15, 50, 56.5, 46.5, 22.1, 2.5, 27.7, 55.7, 76.5],
        },
      ],
    };

    chart.setOption(option);

    // 订阅主题
    this.themeChangeSubscribe = PubSub.subscribe('themeChange', (type, theme) => {
      chart.dispose();
      chart = window.echarts.init(document.getElementById('horizontalBar'), theme);
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
      <div id="horizontalBar" className={styles.horizontalBar}>
        123
      </div>
    );
  }
}
export default CongesMileSum;
