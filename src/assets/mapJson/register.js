import * as echarts from 'echarts';

import nmg from './内蒙古自治区.json'
import nmgOut from './内蒙古自治区 (1).json'
import hlbr from './呼伦贝尔市.json'
import xa from './兴安盟.json'
import tl from './通辽市.json'
import cf from './赤峰市.json'



echarts.registerMap('nmg', nmg);
echarts.registerMap('nmgOut', nmgOut);
echarts.registerMap('hlbr',hlbr)
echarts.registerMap('xa',xa)
echarts.registerMap('tl',tl)
echarts.registerMap('cf',cf)
