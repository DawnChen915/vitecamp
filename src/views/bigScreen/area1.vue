<template>
  <div class="chartContainer h-full w-full">
    <div class="mesWindow">
      <p class="msg-p" style="height: 30%;text-align: center;font-size: large;margin-bottom: 5%;">{{ showMsg.name }}
        <span class="msg-span">{{ showMsg.total }}</span>
      </p>
      <div class="grid-cols-2 grid" style="height: 65%;text-align: center;">
        <div class="msg-p">发电企业
          <span class="msg-span">{{ showMsg.fd }}</span>
        </div>
        <div class="msg-p">售电公司
          <span class="msg-span">{{ showMsg.sd }}</span>
        </div>
        <div class="msg-p">电力用户
          <span class="msg-span">{{ showMsg.yh }}</span>
        </div>
      </div>
    </div>
    <div class="msgWindow2">
      <div class="flex" style="align-items: center;">
        <img src="../../assets/image/icon1.png" alt="" style="height: 50%;">
        <p class="msg-p" style="font-size:x-small;color: #fff;width: 40%;">已上线售电公司
          <span class="msg-span-2">65</span>
        </p>
        <p class="msg-p" style="font-size:x-small;color: #fff;margin-left: 10%;">平均评分
          <span class="msg-span-2">89</span>
        </p>

      </div>
      <div class="flex" style="align-items: center;">
        <img src="../../assets/image/icon2.png" alt="" style="height: 50%;">
        <p class="msg-p" style="font-size:x-small;color: #fff;width: 40%;">已上线商品个数
          <span class="msg-span-2">235</span>
        </p>
        <p class="msg-p" style="font-size:x-small;color: #fff;margin-left: 10%;">平均评分
          <span class="msg-span-2">96</span>
        </p>

      </div>
      <div class="flex" style="align-items: center;">
        <img src="../../assets/image/icon3.png" alt="" style="height: 50%;">
        <p class="msg-p" style="font-size:x-small;color: #fff;width: 40%;">已签订合同数量
          <span class="msg-span-2">1833</span>
        </p>
        <p class="msg-p" style="font-size:x-small;color: #fff;margin-left: 10%;">平均完成时间（天）
          <span class="msg-span-2">2.5</span>
        </p>

      </div>
    </div>
    <echart :loop="true" :option="option" class="h-full w-full">

    </echart>
  </div>
</template>

<script setup lang='ts'>
import echart from '@/components/echarts.vue';
const mapData = [
  { name: '呼伦贝尔市', value: 9 },
  { name: '兴安盟', value: 1 },
  { name: '通辽市', value: 2 },
  { name: '赤峰市', value: 1 }]
const option = ref({
  title: {
    text: '',
    left: 'center',

  },
  legend: {
    show: false,

  },
  visualMap: {
    pieces: [{
      gte: 1,
      lt: 10,
      color: "#53A2F6"
    }, {
      gt: 0,
      lt: 3,
      color: "#24538C"
    }, {
      value: 0,
      color: "#ffffff"
    }],
    show: false
  },
  geo: {
    map: 'nmg',
    label: {
      normal: {
        show: false,
        fontSize: "14",
        color: "#fff"
      },
      emphasis: {
        show: false
      }
    },
    roam: false,
    zoom: 1.2,
    top: '8%',
    regions: [
      {
        name: '呼伦贝尔市',
        label: {
          normal: {
            show: true,
            textStyle: {
              color: '#fff',
              fontSize: 16
            }
          }
        },
        selected: true,
        itemStyle: {
          normal: {
            areaColor: 'rgba(0,255,255,.02)',
            borderColor: '#00ffff',
            borderWidth: 1.5,
            shadowColor: '#00ffff',
            shadowOffsetX: 0,
            shadowOffsetY: 4,
            shadowBlur: 10,
          },

        }

      },
      {
        name: '兴安盟',
        label: {
          normal: {
            show: true,
            textStyle: {
              color: '#fff',
              fontSize: 16
            }
          }
        },
        itemStyle: {
          normal: {
            areaColor: 'rgba(0,255,255,.02)',
            borderColor: '#00ffff',
            borderWidth: 1.5,
            shadowColor: '#00ffff',
            shadowOffsetX: 0,
            shadowOffsetY: 4,
            shadowBlur: 10,
          },
        }

      },
      {
        name: '通辽市',
        label: {
          normal: {
            show: true,
            textStyle: {
              color: '#fff',
              fontSize: 16
            }
          }
        },
        itemStyle: {
          normal: {
            areaColor: 'rgba(0,255,255,.02)',
            borderColor: '#00ffff',
            borderWidth: 1.5,
            shadowColor: '#00ffff',
            shadowOffsetX: 0,
            shadowOffsetY: 4,
            shadowBlur: 10,
          },
        }

      },
      {
        name: '赤峰市',
        label: {
          normal: {
            show: true,
            textStyle: {
              color: '#fff',
              fontSize: 16
            }
          },
        },
        itemStyle: {
          normal: {
            areaColor: 'rgba(0,255,255,.02)',
            borderColor: '#00ffff',
            borderWidth: 1.5,
            shadowColor: '#00ffff',
            shadowOffsetX: 0,
            shadowOffsetY: 4,
            shadowBlur: 10,
          },
        }

      }
    ],
    itemStyle: {
      normal: {
        areaColor: 'rgba(7,21,57,0.5)',
        borderColor: 'rgba(7,21,57,0.5)'
      },
      emphasis: {
        areaColor: 'rgba(7,21,57,0.5)' //鼠标指上市时的颜色
      }
    }
  },
  series: [
    {
      map: 'nmgOut',
      silent: true,
      type: 'map',
      zoom: 1.2,
      top: '8%',
      roam: false,
      itemStyle: {
        normal: {
          areaColor: 'rgba(0,255,255,.02)',
          borderColor: '#00ffff',
          borderWidth: 1,
          shadowColor: '#00ffff',
          shadowOffsetX: 0,
          shadowOffsetY: 15,
          shadowBlur: 5,
        }
      }
    },
    {
      type: "map",
      geoIndex: 0,
      data: mapData
    }]
})
let i = 0
const changeRegion = () => {
  i++
  mapData.forEach(e => {
    e.value = 1
  })
  mapData[i % 4].value = 4
  option.value.series[1].data = mapData
  showMsg.value = msgData[i % 4]
}
onMounted(() => {
  setInterval(changeRegion, 10000)
})
onUnmounted(() => {
  clearInterval()
})
const msgData = [
  { name: '呼伦贝尔市', total: 61, fd: 20, sd: 10, yh: 31 },
  { name: '兴安盟', total: 73, fd: 15, sd: 20, yh: 38 },
  { name: '通辽市', total: 52, fd: 10, sd: 10, yh: 32 },
  { name: '赤峰市', total: 100, fd: 20, sd: 25, yh: 55 }
]
const showMsg = ref(msgData[0])







</script>

<style scoped>
.chartContainer {
  position: relative;
  background-image: url('');
}

.mesWindow {
  position: absolute;
  height: 50%;
  width: 40%;
  top: 5%;
  left: 5%;
  background-image: url('../../assets/image/框1.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 6% 6%;
  text-align: left;
}

.msg-p {
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #17B8FF;

}

.msg-span {
  font-family: Impact;
  font-size: x-large;
  color: #17B8FF;
}

.msgWindow2 {
  position: absolute;
  height: 30%;
  width: 45%;
  bottom: 0;
  right: 1%;
  background-image: url('../../assets/image/框2.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1% 3%;
}
.msg-span-2 {
  font-family: Impact;
  font-size:medium;
  color: #17B8FF;
}
</style>
