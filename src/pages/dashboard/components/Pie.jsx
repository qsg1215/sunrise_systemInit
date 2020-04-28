import React, { Component } from 'react';
import { connect } from 'umi';
import PubSub from 'pubsub-js';
import WarpWidget from './WarpWidget.jsx';
import styles from './index.less';

@WarpWidget({ title: '饼图' })
@connect(({ themeModel }) => ({
  theme: themeModel.currentTheme,
}))
class CongesMileSum extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const data = genData(5);
    const option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: data.legendData,

        selected: data.selected,
      },
      series: [
        {
          name: '姓名',
          type: 'pie',
          radius: '55%',
          center: ['40%', '50%'],
          data: data.seriesData,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };

    function genData(count) {
      const nameList = [
        '赵',
        '钱',
        '孙',
        '李',
        '周',
        '吴',
        '郑',
        '王',
        '冯',
        '陈',
        '褚',
        '卫',
        '蒋',
        '沈',
        '韩',
        '杨',
        '朱',
        '秦',
        '尤',
        '许',
        '何',
        '吕',
        '施',
        '张',
        '孔',
        '曹',
        '严',
        '华',
        '金',
        '魏',
        '陶',
        '姜',
        '戚',
        '谢',
        '邹',
        '喻',
        '柏',
        '水',
        '窦',
        '章',
        '云',
        '苏',
        '潘',
        '葛',
        '奚',
        '范',
        '彭',
        '郎',
        '鲁',
        '韦',
        '昌',
        '马',
        '苗',
        '凤',
        '花',
        '方',
        '俞',
        '任',
        '袁',
        '柳',
        '酆',
        '鲍',
        '史',
        '唐',
        '费',
        '廉',
        '岑',
        '薛',
        '雷',
        '贺',
        '倪',
        '汤',
        '滕',
        '殷',
        '罗',
        '毕',
        '郝',
        '邬',
        '安',
        '常',
        '乐',
        '于',
        '时',
        '傅',
        '皮',
        '卞',
        '齐',
        '康',
        '伍',
        '余',
        '元',
        '卜',
        '顾',
        '孟',
        '平',
        '黄',
        '和',
        '穆',
        '萧',
        '尹',
        '姚',
        '邵',
        '湛',
        '汪',
        '祁',
        '毛',
        '禹',
        '狄',
        '米',
        '贝',
        '明',
        '臧',
        '计',
        '伏',
        '成',
        '戴',
        '谈',
        '宋',
        '茅',
        '庞',
        '熊',
        '纪',
        '舒',
        '屈',
        '项',
        '祝',
        '董',
        '梁',
        '杜',
        '阮',
        '蓝',
        '闵',
        '席',
        '季',
        '麻',
        '强',
        '贾',
        '路',
        '娄',
        '危',
      ];
      const legendData = [];
      const seriesData = [];
      const selected = {};
      for (let i = 0; i < count; i += 1) {
        const name =
          Math.random() > 0.65 ? `${makeWord(4, 1)} · ${makeWord(3, 0)} ` : makeWord(2, 1);
        legendData.push(name);
        seriesData.push({
          name,
          value: Math.round(Math.random() * 100000),
        });
        selected[name] = i < 6;
      }

      return {
        legendData,
        seriesData,
        selected,
      };

      function makeWord(max, min) {
        const nameLen = Math.ceil(Math.random() * max + min);
        const name = [];
        for (let i = 0; i < nameLen; i += 1) {
          name.push(nameList[Math.round(Math.random() * nameList.length - 1)]);
        }
        return name.join('');
      }
    }
    let chart = window.echarts.init(document.getElementById('pie'), this.props.theme);
    chart.setOption(option);

    // 订阅主题
    this.themeChangeSubscribe = PubSub.subscribe('themeChange', (type, theme) => {
      chart.dispose();
      chart = window.echarts.init(document.getElementById('pie'), theme);
      chart.clear();
      chart.setOption(option);
    });
  }

  // 移除主题订阅
  componentWillUnmount() {
    PubSub.unsubscribe(this.themeChangeSubscribe);
  }

  render() {
    return <div id="pie" className={styles.pie} />;
  }
}
export default CongesMileSum;
