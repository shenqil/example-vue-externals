import { RouteConfig } from 'vue-router';

const routes: Array<RouteConfig> = [
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
  },
];
export default routes;
