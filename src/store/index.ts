import Vuex from 'vuex';
import * as Vue from 'vue';
import { myModule } from './myModule';

Vue.use( Vuex );

export const store = new Vuex.Store({
  modules: {
    myModule
  }
});