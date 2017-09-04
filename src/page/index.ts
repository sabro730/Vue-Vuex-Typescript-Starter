import * as Vue from 'vue';
import VueRouter from 'vue-router';

import IndexPage from './Index/Index.page.vue';

const HomePage = ( ) => System.import('./Home/Home.page.vue').then( n => n.default );

Vue.use( VueRouter );

const routes = [
  {
    path: '/',
    component: HomePage
  }
];

export const router = new VueRouter({ routes });