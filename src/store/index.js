import Vue from 'vue'
import Vuex from 'vuex'

import dataService from '@/api/dataService'


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: {
      active: null,
      recovered: null,
      deaths: null,
      cases: null
    },
    error: null
  },
  mutations: {
    setData(state, data) {
      state.data.active = data.active;
      state.data.recovered = data.recovered;
      state.data.deaths = data.deaths;
      state.data.cases = data.cases;
    },
    setError(state, error) {
      state.error = error
    },
  },
  actions: {
    async fetchDepartments({ commit }) {
      let data = {};
      try {
        let response = await dataService.getData();
        data = response.data;
      }
      catch (e) {
        console.error(e);
        commit('setError', e)
      }
      commit('setData', data)
    },
    clear({ commit }) {
      commit('setData', {})
    }
  },
  modules: {
  }
})
