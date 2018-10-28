import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    genres: [],
    origVideos: [],
    filteredVideos: [],
    filter: {
      rating: 3,
      selectedGenres: [],
    },
  },
  actions: {
    SET_FILTERED_VIDEOS({state}, filteredVideos) {
      state.filteredVideos = filteredVideos;
    },
    SET_SETECTED_GENRES({state}, selectedGenres) {
      state.filter.selectedGenres = selectedGenres;
    }
  }
});
