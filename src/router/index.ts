import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/About'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;