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
  // 스테이트 값을 직접적으로 바꿔줌
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
  // 비동기적으로 값을 바꿔줘야 할 때 사용
  actions: {},
  // plugins: [createPersistedState()],
  modules: {}
})

// state: 상태 값 정의, 컴포넌트 간 공유하는 상태를 관리
// main.js 루트 인스턴스에 store 옵션을 추가 -> 하위 컴포넌트에서 this.$store 로 접근 가능
// 1 app - 1 store: 단일 상태 트리

// getters: state에 접근해 데이터 조작 ===> computed

// mutations: state 값 변경 ===> methods, commit으로 호출

// actions: 비동기 처리 담당, dispatch로 접근
// commit을 여러 번 호출해야 하는 경우 코드를 단순화하기 위해 ES2015 전달인자 분해 사용
