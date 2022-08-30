<template>
  <div class="chartContainer h-full w-full">
    <div class="chartName">
      交易平台市场结算
    </div>
    <echart :option="option" :loop="false" class="h-remain w-full"></echart>


  </div>
</template>

<script setup lang='ts'>
import echart from '@/components/echarts.vue'

const colorArray = [
  // {
  //   bottom: '#0F45B4',
  //   top: '#01A2FF'
  // },

  // {
  //   bottom: '#594412',
  //   top: '#EAB33D'
  // },
  {
    bottom: '#4E1F9C',
    top: '#C470FF'
  },
]
const option = ref({
  tooltip: {
    trigger: 'item'
  },
  grid: {
    left: '5%',
    top: '20%',
    right: '1%',
    bottom: '8%',
    containLabel: true
  },
  legend: [{
    top: '0',
    left: '50%',
    width: '100px',
    itemWidth: 15,
    itemHeight: 10,
    textStyle: {
      color: '#fff'
    }
  }],
  color: ['#C470FF', '#FEC006'],
  yAxis: [{
    name: '单位：亿兆瓦时',
    type: 'value',
    show: true,
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
    splitNumber: 4,
    splitLine: {
      show: true,
      lineStyle: {
        color: ['#fff'],
        opacity: 0.1
      }
    },
  },
  {
    name: '单位：元',
    type: 'value',
    show: true,
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
    splitNumber: 4,
    splitLine: {
      show: false,
      lineStyle: {
        color: ['#fff'],
        opacity: 0.1
      }
    },
  }],
  xAxis: {
    type: 'category',
    axisTick: {
      show: false,
      alignWithLabel: false,
      length: 5,

    },
    "splitLine": { //网格线
      "show": false
    },
    //inverse: 'true', //排序
    axisLine: {
      show: false,
      lineStyle: {
        color: '#fff',
      }
    },
    axisLabel:{
       fontSize:7
    },
    data: ['新能源', '火电', '平价新能源', '售电公司', '直接交易用户', '代理购电']
  },
  series: [

    {
      name: '电量',
      type: 'bar',
      label: {
        normal: {
          show: true,
          position: 'top',
          formatter: '{c}',
          textStyle: {
            color: 'white' //color of value
          }
        }
      },

      itemStyle: {
        normal: {
          show: true,
          color: function (params: any) {
            let num = colorArray.length;
            return {
              type: 'linear',
              x: 0,
              y: 1,
              x2: 0,
              y2: 0,
              colorStops: [{
                offset: 0,
                color: colorArray[params.dataIndex % num].bottom
              }, {
                offset: 1,
                color: colorArray[params.dataIndex % num].top
              },],
              //globalCoord: false
            }
          },
          barBorderRadius: 5,
          borderWidth: 0,
          borderColor: '#333',
        }
      },
      barGap: '0%',
      barCategoryGap: '70%',
      data: [23, 13, 41, 43, 21, 32]
    },
    {
      name: '电价',
      data: [150, 230, 224, 321, 216, 279],
      type: 'line',
      symbol: 'circle',
      yAxisIndex: 1
    }
  ]
})






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
</style>
