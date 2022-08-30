<template>
  <div class="chartContainer h-full w-full">
    <div class="chartName">
      合同完成率
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
    bottom: '5%',
    left: '10%',
    width: '100px',
    itemWidth: 15,
    itemHeight: 10,
    textStyle: {
      color: '#fff'
    }
  }],
  color: ['#C470FF'],
  yAxis: [{
    type: 'value',
    show: true,
    position: 'top',
    axisTick: {
      show: false
    },
    axisLabel:{
       formatter:'{value}%'
    },
    axisLine: {
      show: false,
      lineStyle: {
        color: '#fff',
      }
    },
    max:100,
    splitNumber: 5,
    splitLine: {
      show: true,
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
    data: ['2018', '2019', '2020', '2021']
  },
  series: [

    {
      type: 'bar',
      label: {
        normal: {
          show: true,
          position: 'top',
          formatter: '{c}%',
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
              }, {
                offset: 0,
                color: colorArray[params.dataIndex % num].bottom
              }, {
                offset: 1,
                color: colorArray[params.dataIndex % num].top
              }, {
                offset: 0,
                color: colorArray[params.dataIndex % num].bottom
              }, {
                offset: 1,
                color: colorArray[params.dataIndex % num].top
              }, {
                offset: 0,
                color: colorArray[params.dataIndex % num].bottom
              }, {
                offset: 1,
                color: colorArray[params.dataIndex % num].top
              }, {
                offset: 0,
                color: colorArray[params.dataIndex % num].bottom
              }, {
                offset: 1,
                color: colorArray[params.dataIndex % num].top
              }, {
                offset: 0,
                color: colorArray[params.dataIndex % num].bottom
              }, {
                offset: 1,
                color: colorArray[params.dataIndex % num].top
              }],
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
      data: ['39','68','52','84'],
    },

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
