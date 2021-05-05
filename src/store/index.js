import { createStore } from 'vuex'
// import axios from 'axios'

export default createStore({
  state: {
    userName: '',
    selectedSeats: [],
  },
  mutations: {
    logout(state) {
      state.userName = '';
      state.selectedSeats = [];
    },
    changeUserName(state, loginUserName){
      state.userName = loginUserName;
    }
  },
  actions: {

  },
  getters: {

  },
  modules: {
  }
})
