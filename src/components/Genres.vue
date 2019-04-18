<template>
  <div id="genres-wrap">

    <h3>Filters ( {{filter.selectedGenres.length}} applied ) </h3>

    <div id="genres-list">
        <div class="genres-list__item" v-for="genre in genres" v-bind:key="genre.id">
          <label v-bind:for="genre.id">{{ genre.name }}
            <input type="checkbox" v-bind:id="genre.id" v-bind:name="genre.name" v-bind:value="genre.id" @change="filterVidoes" v-model="filter.selectedGenres">
            <span></span>
          </label>
        </div>
    </div>
</div>
</template>

<script>
// dataService import
import dataService from "../services/data-service";
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
      let result = await dataService.fetchData();
      this.$store.state.genres = result[1].genres;
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
    margin: 0 10px 20px;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 12.5%;
    text-align: left;
  }

  .genres-list__item label {
    background-color: #ececec;
    padding: 6px 40px 6px 10px;
    border-radius: 4px;
    font-family: sans-serif;
    position: relative;
    cursor: pointer;
    -webkit-user-select:none;
    -moz-user-select:none;
  }

  .genres-list__item span {
    width: 30px;
    height: 100%;
    background-color: red;
    display: inline-block;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 100;
    border-radius: 0px 4px 4px 0px;
    color: white;
    text-align: center;
  }

  .genres-list__item span:before {
      content:"-";
      line-height: 30px;
  }

  .genres-list__item input[type="checkbox"] {
      opacity: 0;
      position: absolute;
  }

  .genres-list__item input[type="checkbox"]:checked + span {
      background-color: green;
  }

  .genres-list__item input[type="checkbox"]:checked + span:before {
      content:"+";
  }

  /* Styles go here */
</style>
