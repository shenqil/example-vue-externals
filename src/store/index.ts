import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 1,
  },
  mutations: {
    changeCount(state) {
      state.count += 1;
    },
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getCount(state) {
      return state.count;
    },
  },
});
