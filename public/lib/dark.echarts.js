(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['exports', 'echarts'], factory);
  } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
    // CommonJS
    factory(exports, require('echarts'));
  } else {
    // Browser globals
    factory({}, root.echarts);
  }
})(this, function (exports, echarts) {
  var log = function (msg) {
    if (typeof console !== 'undefined') {
      console && console.error && console.error(msg);
    }
  };
  if (!echarts) {
    log('ECharts is not Loaded');
    return;
  }
  echarts.registerTheme('dark', {
    color: ['#1298ff', '#24b446', '#13c2c2', '#597ef7', '#9254de', '#f759ab', '#ff7a45', '#fcc83d'],
    backgroundColor: '#1c2340',
    textStyle: {},
    title: {
      textStyle: {
        color: 'rgba(255,255,255,0.85)',
      },
      subtextStyle: {
        color: 'rgba(255,255,255,0.85)',
      },
    },
    line: {
      itemStyle: {
        normal: {
          borderWidth: 1,
        },
      },
      lineStyle: {
        normal: {
          width: 2,
        },
      },
      symbolSize: '6',
      symbol: 'circle',
      smooth: false,
    },
    radar: {
      itemStyle: {
        normal: {
          borderWidth: 1,
        },
      },
      lineStyle: {
        normal: {
          width: 2,
        },
      },
      symbolSize: '6',
      symbol: 'circle',
      smooth: false,
    },
    bar: {
      itemStyle: {
        normal: {
          barBorderWidth: 0,
          barBorderColor: '#ccc',
        },
        emphasis: {
          barBorderWidth: 0,
          barBorderColor: '#ccc',
        },
      },
    },
    pie: {
      itemStyle: {
        normal: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
        emphasis: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
      },
    },
    scatter: {
      itemStyle: {
        normal: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
        emphasis: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
      },
    },
    boxplot: {
      itemStyle: {
        normal: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
        emphasis: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
      },
    },
    parallel: {
      itemStyle: {
        normal: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
        emphasis: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
      },
    },
    sankey: {
      itemStyle: {
        normal: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
        emphasis: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
      },
    },
    funnel: {
      itemStyle: {
        normal: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
        emphasis: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
      },
    },
    gauge: {
      itemStyle: {
        normal: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
        emphasis: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
      },
    },
    candlestick: {
      itemStyle: {
        normal: {
          color: '#f759ab',
          color0: '#24b446',
          borderColor: '#f759ab',
          borderColor0: '#24b446',
          borderWidth: '1',
        },
      },
    },
    graph: {
      itemStyle: {
        normal: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
      },
      lineStyle: {
        normal: {
          width: 1,
          color: 'rgba(255,255,255,0.45)',
        },
      },
      symbolSize: '6',
      symbol: 'circle',
      smooth: false,
      color: [
        '#1298ff',
        '#24b446',
        '#13c2c2',
        '#597ef7',
        '#9254de',
        '#f759ab',
        '#ff7a45',
        '#fcc83d',
      ],
      label: {
        normal: {
          textStyle: {
            color: '#eeeeee',
          },
        },
      },
    },
    map: {
      itemStyle: {
        normal: {
          areaColor: '#eee',
          borderColor: '#444',
          borderWidth: 0.5,
        },
        emphasis: {
          areaColor: 'rgba(255,215,0,0.8)',
          borderColor: '#444',
          borderWidth: 1,
        },
      },
      label: {
        normal: {
          textStyle: {
            color: '#000',
          },
        },
        emphasis: {
          textStyle: {
            color: 'rgb(100,0,0)',
          },
        },
      },
    },
    geo: {
      itemStyle: {
        normal: {
          areaColor: '#eee',
          borderColor: '#444',
          borderWidth: 0.5,
        },
        emphasis: {
          areaColor: 'rgba(255,215,0,0.8)',
          borderColor: '#444',
          borderWidth: 1,
        },
      },
      label: {
        normal: {
          textStyle: {
            color: '#000',
          },
        },
        emphasis: {
          textStyle: {
            color: 'rgb(100,0,0)',
          },
        },
      },
    },
    categoryAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.57)',
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.57)',
        },
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: 'rgba(255,255,255,0.85)',
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ['rgba(255,255,255,0.35)'],
        },
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)'],
        },
      },
    },
    valueAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.57)',
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.57)',
        },
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: 'rgba(255,255,255,0.85)',
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ['rgba(255,255,255,0.35)'],
        },
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)'],
        },
      },
    },
    logAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.57)',
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.57)',
        },
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: 'rgba(255,255,255,0.85)',
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ['rgba(255,255,255,0.35)'],
        },
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)'],
        },
      },
    },
    timeAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.57)',
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.57)',
        },
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: 'rgba(255,255,255,0.85)',
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ['rgba(255,255,255,0.35)'],
        },
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)'],
        },
      },
    },
    toolbox: {
      iconStyle: {
        normal: {
          borderColor: 'rgba(255,255,255,0.65)',
        },
        emphasis: {
          borderColor: 'rgba(255,255,255,0.85)',
        },
      },
    },
    legend: {
      textStyle: {
        color: 'rgba(255,255,255,0.65)',
      },
    },
    tooltip: {
      axisPointer: {
        lineStyle: {
          color: '#ccc',
          width: 1,
        },
        crossStyle: {
          color: '#ccc',
          width: 1,
        },
      },
    },
    timeline: {
      lineStyle: {
        color: 'rgba(18,152,255,1)',
        width: '1',
      },
      itemStyle: {
        normal: {
          color: 'rgba(18,152,255,1)',
          borderWidth: 1,
        },
        emphasis: {
          color: 'rgba(73,176,255,1)',
        },
      },
      controlStyle: {
        normal: {
          color: 'rgba(255,255,255,0.65)',
          borderColor: 'rgba(255,255,255,0)',
          borderWidth: '1',
        },
        emphasis: {
          color: 'rgba(255,255,255,0.65)',
          borderColor: 'rgba(255,255,255,0)',
          borderWidth: '1',
        },
      },
      checkpointStyle: {
        color: 'rgba(18,152,255,1)',
        borderColor: 'rgba(18,152,255,0.35)',
      },
      label: {
        normal: {
          textStyle: {
            color: 'rgba(255,255,255,0.65)',
          },
        },
        emphasis: {
          textStyle: {
            color: 'rgba(255,255,255,0.65)',
          },
        },
      },
    },
    visualMap: {
      color: ['#13c2c2', '#9254de', '#f759ab'],
    },
    dataZoom: {
      backgroundColor: 'rgba(223,245,255,0.1)',
      dataBackgroundColor: 'rgba(120,151,171,0.4)',
      fillerColor: 'rgba(18,152,255,0.1)',
      handleColor: '#a7b7cc',
      handleSize: '100%',
      textStyle: {
        color: 'rgba(255,255,255,0.65)',
      },
    },
    markPoint: {
      label: {
        normal: {
          textStyle: {
            color: '#eeeeee',
          },
        },
        emphasis: {
          textStyle: {
            color: '#eeeeee',
          },
        },
      },
    },
  });
});
