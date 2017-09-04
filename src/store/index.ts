import * as Vue from 'vue';
import Vuex from 'vuex';
import { state } from './state';
import { getters } from './getter';
import { mutations } from './mutation';
import { actions } from './action';

Vue.use( Vuex );

export const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});