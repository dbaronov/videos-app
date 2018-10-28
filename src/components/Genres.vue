<template>
  <div id="genres-wrap">
    <div id="genres-list">
        <div class="genres-list__item" v-for="genre in genres" v-bind:key="genre.id">
          <input type="checkbox" v-bind:id="genre.id" v-bind:name="genre.name" v-bind:value="genre.id" @change="filterVidoes" v-model="filter.selectedGenres">
          <label v-bind:for="genre.id">{{ genre.name }}</label>
        </div>
    </div>
</div>
</template>

<script>
// genresService import
import genresService from "../services/genre-service";
// videosService import
import videosFilter from "../modules/videos-filter";

export default {
  name: "genresList",
  computed: {
    filter() {
      return this.$store.state.filter;
    },
    genres() {
      return this.$store.state.genres;
    },
    filteredVideos: {
      get: function() {
        return this.$store.state.filteredVideos;
      },
      set: function(fVideos) {
        this.$store.dispatch("SET_FILTERED_VIDEOS", fVideos);
      }
    },
    filteredGenres: {
      get: function() {
        return this.$store.state.filter.genres;
      },
      set: function(selectedGenres) {
        this.$store.dispatch("SET_SETECTED_GENRES", selectedGenres);
      }
    },
    origVideos: {
      get: function() {
        return this.$store.state.origVideos;
      }
    },
  },
  methods: {
    loadGenres: async function() {
      this.$store.state.genres = await genresService.fetchGenres();
    },
    filterVidoes() {
      this.filteredVideos = videosFilter.filter(this.filter, this.origVideos);
    },
  },
  mounted() {
    this.loadGenres();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #genres-list {
    max-width: 1200px;
    margin: 20px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .genres-list__item {
    margin: 0 10px;
    padding: 0 10px;
  }

  /* Styles go here */
</style>
