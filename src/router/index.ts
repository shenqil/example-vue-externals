import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import home from './modules/home';
import about from './modules/about';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  ...home,
  ...about,
];

const router = new VueRouter({
  routes,
});
export default router;
