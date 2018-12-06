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
    modalActive: false,
    selectedVideo: null
  },
  mutations: {
    SET_SETECTED_GENRES: function(state, selectedGenres) {
      state.filter.selectedGenres = selectedGenres;
    },
    SET_FILTERED_VIDEOS: function(state, filteredVideos) {
      state.filteredVideos = filteredVideos;
    },
    SET_MODAL_ACTIVE: function(state, boolean) {
      state.modalActive = boolean
    },
    SET_SELECTED_VIDEO: function(state, selectedVideo) {
      state.selectedVideo = selectedVideo
    }
  },
  actions: {
    SET_FILTERED_VIDEOS(context, filteredVideos) {
      context.commit('SET_FILTERED_VIDEOS', filteredVideos )
    },
    SET_SETECTED_GENRES(context, selectedGenres) {
      context.commit('SET_SETECTED_GENRES', selectedGenres )
    },
    SET_MODAL_ACTIVE(context, boolean) {
      context.commit('SET_MODAL_ACTIVE', boolean )
    },
    SET_SELECTED_VIDEO(context, selectedVideo) {
      context.commit('SET_SELECTED_VIDEO', selectedVideo)
    }
  }
});
