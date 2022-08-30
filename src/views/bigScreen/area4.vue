<template>
  <div class="chartContainer h-full w-full">
    <div class="chartName">
      省间中长期运行情况
    </div>
    <!-- <echart :option="option" :loop="false" class="h-remain w-full"></echart> -->
    <div class="area4-items h-remain" v-auto-animate="{ duration: 1000 }">
      <div v-for="(item, index) in showData" :key="item.name" class="item">
        <div style="font-size:smaller;margin: auto 0;">{{ item.name }}</div>
        <div>
          <p class="item-p">{{ item.clearE }}</p>
          <p style="font-size:smaller">出清总量</p>
        </div>
        <div>
          <p class="item-p">{{ item.clearP }}</p>
          <p style="font-size:smaller">出清价格</p>
        </div>
        <div>
          <p class="item-p">{{ item.settleE }}</p>
          <p style="font-size:smaller">结算总量</p>
        </div>
        <div>
          <p class="item-p">{{ item.settleP }}</p>
          <p style="font-size:smaller">结算价格</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>

let showData = computed(() => {
  return data.value.filter((e, i) => {
    return i < 3
  })
})
interface item{
  name:string,
  clearE:string,
  clearP:string,
  settleE:string,
  settleP:string
}
const data = ref([
  { name: '送辽宁', clearE: '2921', clearP: '416', settleE: '1328', settleP: '312' },
  { name: '送鲁固', clearE: '2921', clearP: '416', settleE: '1328', settleP: '312' },
  { name: '送高玲', clearE: '2921', clearP: '416', settleE: '1328', settleP: '312' },
  { name: '新能源', clearE: '2921', clearP: '416', settleE: '1328', settleP: '312' },
  { name: '火电', clearE: '2921', clearP: '416', settleE: '1328', settleP: '312' },
])

setInterval(() => data.value.push(data.value.shift() as item), 2000)
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

.area4-items {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  scroll-behavior: smooth;
  overflow: hidden;

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
