<template>
  <div class="chartContainer h-full w-full">
    <div class="chartName">
      交易平台市场出清
    </div>
    <echart :option="option" :loop="false" class="h-remain w-full"></echart>


  </div>
</template>

<script setup lang='ts'>
import echart from '@/components/echarts.vue'

const colorArray = [
 {
    bottom: '#4E1F9C',
    top: '#C470FF'
  },
  {
    bottom: '#594412',
    top: '#EAB33D'
  },
   {
    bottom: '#0F45B4',
    top: '#01A2FF'
  },


]
const option = ref({
  tooltip: {
    trigger: 'item'
  },
  grid: {
    left: '40%',
    top: '12%',
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
  color: ['#C470FF', '#FEC006', '#00BFF3'],
  yAxis: [{
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
    // inverse: 'true', //排序
    axisLine: {
      show: false,

      lineStyle: {
        color: '#fff',
      }
    },
    axisLabel:{
      fontSize:8,
    },
    data: ['售电公司', '直接交易用户', '代理购电']
  },
  series: [
    {
      name: '占比情况',
      type: 'pie',
      radius: [30, 40],
      center: ['25%', '30%'],
      roseType: 'radius',
      itemStyle: {
        borderRadius: 2
      },
      legend: {
        top: 'bottom',
        left: 'center',
        width: '100px'
      },
      label: {
        show: true,
        fontSize:8

      },
      labelLine:{
        length:1,
        length2:2
      },
      emphasis: {
        label: {
          show: false
        }
      },
      data: [
        { value: 40, name: '售电公司' },
        { value: 33, name: '直接交易用户' },
        { value: 28, name: '代理购电交易' },

      ]
    },
    {
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
          color: function (params:any) {
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
      data: [
        { value: 40, name: '售电公司' },
        { value: 33, name: '直接交易用户' },
        { value: 28, name: '代理购电交易' }],
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
