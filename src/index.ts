/// <reference path="./index.d.ts" />

import * as Vue from 'vue';

import { store } from './store';
import { router } from './page';
import IndexPage from './page/Index/Index.page.vue';

const app = new Vue({
  store,
  router,
  el: '#app',
  template: '<IndexPage />',
  components: { IndexPage }
});

if ( module.hot ) {
  module.hot.accept( );
}
