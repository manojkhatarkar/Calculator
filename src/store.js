import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export  const store = new Vuex.Store({
  state: {
  
    historyData:[],

  },
  mutations: {
   
  },
  getters: {
    historyData: state =>state.historyData
  }
})

