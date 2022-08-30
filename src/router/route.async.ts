// 需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';
const VITE_BASE = import.meta.env.VITE_BASE;
const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: VITE_BASE + '/bigScreen',
  },
  {
    path: VITE_BASE + '/bigScreen',
    name: 'bigScreen',
    meta: {
      title: '大屏',
      icon: '',
    },
    component: () => import('@/views/bigScreen/index.vue'),
  },
  {
    path: VITE_BASE + '/bigScreen1',
    name: 'bigScreen1',
    meta: {
      title: '大屏',
      icon: '',
    },
    component: () => import('@/views/test/test.vue'),
  }
];

export default asyncRoutes;
