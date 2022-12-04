import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 기존 데이터에서 사용했던 변수들
  state: {
    url: process.env.VUE_APP_URL,
    token: localStorage.getItem('token') || null,
    user: JSON.parse(localStorage.getItem('user')) || null,
    isUserLoggedIn: localStorage.getItem('token') || false
  },
  getters: {
    GE_URL(state) {
      return state.url
    },
    GE_TOKEN(state) {
      return state.token
    },
    GE_USER_DATA(state) {
      return state.user
    },
    GE_LOGIN_STATUS(state) {
      return state.isUserLoggedIn
    }
  },
  mutations: {
    MU_SET_TOKEN(state, token) {
      state.token = token

      if (token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    MU_SET_USER(state, data) {
      state.user = data
    },
    MU_CLEAR_AUTH(state) {
      state.token = null
      state.user = null
      state.isUserLoggedIn = false
    }
  },
  actions: {},
  modules: {}
})
