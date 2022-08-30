<template>
  <div class="chartContainer h-full w-full">
    <div class="chartName">
      零售市场运行情况
    </div>
    <echart :option="option" :loop="false" class="h-remain w-full"></echart>

  </div>
</template>

<script setup lang='ts'>
import echart from '@/components/echarts.vue'
const colorArray = [
  {
    bottom: '#0F45B4',
    top: '#01A2FF'
  },

  // {
  //   bottom: '#594412',
  //   top: '#EAB33D'
  // },
  // {
  //   bottom: '#4E1F9C',
  //   top: '#C470FF'
  // },
]
const option = ref({
  grid: {
    left: '5%',
    top: '3%',
    right: '1%',
    bottom: '10%',
    containLabel: true
  },

  xAxis: {
    type: 'value',
    show: false,
    position: 'top',
    axisTick: {
      show: false
    },
    axisLine: {
      show: false,
      lineStyle: {
        color: '#fff',
      }
    },
    splitLine: {
      show: false
    },
  },
  yAxis: [{
    type: 'category',
    axisTick: {
      show: false,
      alignWithLabel: false,
      length: 5,

    },
    "splitLine": { //网格线
      "show": false
    },
    inverse: 'true', //排序
    axisLine: {
      show: false,
      lineStyle: {
        color: '#fff',
      }
    },
    data: ['零售用户数量', '直接交易用户数量', '年度实际开展业务售电公司', '未实际开展业务售电公司', '年度零售用户用电量','直接交易用户用电量']
  }

  ],
  series: [{
    name: '能耗值',
    type: 'bar',
    label: {
      normal: {
        show: true,
        position: 'right',
        formatter: '{c}',
        textStyle: {
          color: 'white' //color of value
        }
      }
    },
    itemStyle: {
      normal: {
        show: true,
        color: function () {
          return {
            type: 'linear',
            colorStops: [{
              offset: 0,
              color: colorArray[0].bottom
            }, {
              offset: 1,
              color: colorArray[0].top
            },],
            //globalCoord: false
          }
        },
        barBorderRadius: 70,
        borderWidth: 0,
        borderColor: '#333',
      }
    },
    barGap: '0%',
    barCategoryGap: '50%',
    data: [60, 132, 89, 134, 60,120]
  }

  ]
}
)




</script>

<style scoped>
.chartContainer {
  box-shadow: inset 0px 0px 20px #4393CA;
  border: 1px solid #4393CA;
  border-radius: 5px;
}

.h-remain {
  height: calc(100% - 18%);
}

.chartName {
  height: 18%;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #FFFFFF;
  text-align: center;
  padding-top: 2%;
}

.area8-items {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  scroll-behavior: smooth;
}

.item {
  display: flex;
  justify-content: space-around;
  color: #fff;
}

.item-p {
  font-size: larger;
  font-family: Impact;
  font-weight: 400;
  color: #00FFFE;
}
</style>
