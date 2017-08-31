import * as Vue from 'vue';
import VueRouter from 'vue-router';

import IndexPage from './Index/Index.page.vue';
import HomePage from './Home/Home.page.vue';

Vue.use( VueRouter );

const routes = [
  {
    path: '/',
    component: HomePage
  }
];

export const router = new VueRouter({ routes });