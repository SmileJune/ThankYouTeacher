import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    boards: [],
  },
  getters: {},
  mutations: {
    GET_BOARDS(state, payload) {
      state.boards = payload;
      console.log(state.boards);
    },
  },
  actions: {
    getBoards({ commit }) {
      const API_URL = "https://jsonplaceholder.typicode.com/posts";
      axios({
        url: API_URL,
        method: "GET",
      })
        .then((res) => {
          commit("GET_BOARDS", res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
});
