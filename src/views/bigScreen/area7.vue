<template>
  <div class="chartContainer h-full w-full" v-auto-animate="{ duration: 1000 }">
    <div class="chartName">
      当月省间现货运行情况
    </div>

    <div class="area7-items h-remain" v-if="show">
      <div v-for="item in data" class="item">
        <div>
          <el-progress type="circle" :color="item.color" :percentage="item.value" :width="55" :stroke-width="7" />
          <p style="font-size:smaller ;">{{ item.name }}</p>
          <div style="font-size:x-small;margin-top: 20%;">
            已{{ item.name }}:{{ item.done }}<br />
            未{{ item.name }}:{{ item.not }}
          </div>
        </div>
      </div>
    </div>
    <echart v-if="!show" :option="option" :loop="false" class="h-remain w-full"></echart>
  </div>
</template>

<script setup lang='ts'>
import echart from '@/components/echarts.vue'

const data = ref([
  { name: '申报', value: 86, done: 72991, not: 8399, color: '#C470FF' },
  { name: '出清', value: 64, done: 251, not: 253, color: '#00BFF3' },
  { name: '结算', value: 89, done: 121, not: 62, color: '#4366F3' }
])


const colorArray = [
  {
    bottom: '#0F45B4',
    top: '#01A2FF'
  },

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
    show: true,
    top: '5%',
    right: '10%',

    itemWidth: 15,
    itemHeight: 10,
    textStyle: {
      color: '#fff'
    }
  }],
  color: ['#C470FF', '#00BFF3'],
  yAxis: [{
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

  ],
  xAxis: {
    type: 'category',
    axisTick: {
      show: false,
      alignWithLabel: true,
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
    data: ['申报', '出清', '结算']
  },
  series: [

    {
      name: '日前电量',
      type: 'bar',
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
                color: colorArray[0].bottom
              }, {
                offset: 1,
                color: colorArray[0].top
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
      data: [40, 33, 28],
    },
    {
      name: '日内电量',
      type: 'bar',
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
                color: colorArray[1].bottom
              }, {
                offset: 1,
                color: colorArray[1].top
              },],
              //globalCoord: false
            }
          },
          barBorderRadius: 5,
          borderWidth: 0,
          borderColor: '#333',
        }
      },
      barGap: '10%',
      barCategoryGap: '70%',
      data: [14, 41, 53],
    },
    {
      name: '日前电价',
      data: [30, 20, 24],
      symbol: 'circle',
      type: 'line',
    }, {
      name: '日内电价',
      data: [51, 22, 31],
      symbol: 'circle',
      type: 'line',
    }

  ]
})
const show = ref(false)
onMounted(() => {
  setInterval(() => {
    show.value = !show.value
  }, 15000)
})
onUnmounted(() => {
  clearInterval()
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

.area7-items {
  display: flex;
  justify-content: space-around;
  padding: 3% 3%;
  color: #fff;
  text-align: center;
}
</style>
