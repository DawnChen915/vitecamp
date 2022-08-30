<template>
  <div class="container max-w-screen h-screen">
    <div class="title ">
      蒙东电力交易中心
    </div>
    <div class="area1">
      <area1></area1>
    </div>
    <div class="area2 area">
      <area2></area2>
    </div>
    <div class="area3 area">
     <area3></area3>
    </div>
    <div class="area4 area">
      <area4></area4>
    </div>
    <div class="area5 area">
      <area5></area5>
    </div>
    <div class="area6 area">
      <area6></area6>
    </div>
    <div class="area7 area">
      <area7></area7>
    </div>
    <div class="area8 area">
      <area8></area8>
    </div>
    <div class="area9 area">
      <area9></area9>
    </div>
  </div>
</template>

<script setup lang='ts'>
import '../../assets/mapJson/register'
import area1 from './area1.vue'
import area2 from './area2.vue';
import area3 from './area3.vue'
import area4 from './area4.vue'
import area5 from './area5.vue'
import area6 from './area6.vue'
import area7 from './area7.vue'
import area8 from './area8.vue'
import area9 from './area9.vue'

const resize = () => {
  console.log('inner:', window.innerHeight, window.innerWidth)
  console.log('outer:', window.outerHeight, window.outerWidth)
}

window.addEventListener('resize', debounce(resize, 1000))
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
  window.removeEventListener('resize', debounce(resize, 1000))
})

</script>

<style scoped>
.title {
  grid-area: title;
  text-align: center;
  font-size: x-large;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #FFFFFF;
}

.area1 {
  grid-area: area1;

}

.area2 {
  grid-area: area2
}

.area3 {
  grid-area: area3
}

.area4 {
  grid-area: area4
}

.area5 {
  grid-area: area5
}

.area6 {
  grid-area: area6
}

.area7 {
  grid-area: area7
}

.area8 {
  grid-area: area8
}

.area9 {
  grid-area: area9
}
.area{
  background-image: url('../../assets/image/框左右.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.container {
  padding: 10px;
  background-image: url('../../assets/image/背景.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: grid;
  gap: 10px;
  grid:
    'title title title title'
    'area2 area1  area1 area5'
    'area3 area1  area1 area6'
    'area4 area8  area9 area7';
  grid-template-rows: 1fr 3fr 3fr 3fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>
