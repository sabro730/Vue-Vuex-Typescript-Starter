/// <reference path="./index.d.ts" />

import * as Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import { router } from './page';
import IndexPage from './page/Index/Index.page.vue';

Vue.use( Vuex );
Vue.use( VueRouter );

const app = new Vue({
  router,
  el: '#app',
  template: '<IndexPage />',
  components: { IndexPage }
});

if ( module.hot ) {
  module.hot.accept( );
}
