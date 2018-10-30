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
  mutations: {
    SET_SETECTED_GENRES: function(state, selectedGenres) {
      state.filter.selectedGenres = selectedGenres;
    },
    SET_FILTERED_VIDEOS: function(state, filteredVideos) {
      state.filteredVideos = filteredVideos;
    },
  },
  actions: {
    SET_FILTERED_VIDEOS(context, filteredVideos) {
      context.commit('SET_FILTERED_VIDEOS', filteredVideos )
    },
    SET_SETECTED_GENRES(context, selectedGenres) {
      context.commit('SET_SETECTED_GENRES', selectedGenres )
    },
  }
});
