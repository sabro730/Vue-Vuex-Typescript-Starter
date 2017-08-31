import * as Vue from 'vue';
import Vuex from 'vuex';
import { state } from './state';
import { mutations } from './mutation';

Vue.use( Vuex );

export const store = new Vuex.Store({
  state,
  mutations
});