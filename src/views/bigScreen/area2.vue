<template>
  <div class="chartContainer h-full w-full">
    <div class="chartName">
      合同电量转让
    </div>
    <!-- <echart :option="option" :loop="false" class="h-remain w-full"></echart> -->
    <div class="area2-items h-remain">
      <div v-for="item in data" class="item">
        <img :src="item.icon" alt="" class="item-image">
        <div style="margin-left:5%">
          <p style="font-family: Impact;font-weight: 400;color: #17B8FF;font-size: larger;">{{ item.value }}</p>
          <p style="font-size: smaller;">{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import echart from '@/components/echarts.vue'
import image1 from '../../assets/image/图1.png'
import image2 from '../../assets/image/图2.png'
import image3 from '../../assets/image/图3.png'
import image4 from '../../assets/image/图4.png'
const option = ref({
  grid: {
    top: 10,
    bottom: 30,
    left: 50,
    right: 50
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    }
  },
  yAxis: {
    type: 'value',
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    }
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    },
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'bar'
    }
  ]
})
const data = ref([
  {
    name: '签订合同数量',
    icon: image1,
    value: '157'
  },
  {
    name: '发电侧合同转让',
    icon: image2,
    value: '268'
  },

  {
    name: '转让电量规模',
    icon: image4,
    value: '16323'
  },
  {
    name: '用电侧合同转让',
    icon: image3,
    value: '892'
  },
])





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

.area2-items {
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;

}

.item {
  display: flex;
  padding: 5% 0;
  justify-content: center;
  color: #fff;
}

.item-image {
  width: 25%;
  height: 80%;
}
</style>
