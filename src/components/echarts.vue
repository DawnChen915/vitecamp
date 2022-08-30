<template>
  <div class="chartDom" ref="chart">
    <slot></slot>
  </div>
</template>
<script setup lang='ts'>
import * as echarts from 'echarts'
const props = defineProps<{ option: Object ,loop:boolean}>()
const chart = ref()

let myChart:any
onMounted(() => {

  myChart = echarts.init(chart.value)
  myChart.setOption(props.option)
  window.addEventListener('resize', debounce(myChart.resize, 1000))
})

function debounce(fun: Function, time: number) {
  let timer: any
  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fun()
    }, time)
  }
}
onUnmounted(() => {
  window.removeEventListener('resize', debounce(myChart.resize, 1000))
  clearInterval()
})
if(props.loop){
   setInterval(()=>{myChart.setOption(props.option)},1000)
}



</script>

<style scoped>
</style>
