<template>
    <div id="rating-slider">
        <h3>Rating ( {{ filter.rating }} )</h3>
        <input type="range" min="0" max="10" step="0.5" @input="filterVidoes" v-model="filter.rating">
    </div>
</template>

<script>
import videosFilter from "../modules/videos-filter";

export default {
  name: "RatingSlider",
  computed: {
    filter() {
      return this.$store.state.filter;
    },
    filteredVideos: {
      get: function() {
        return this.$store.state.filteredVideos;
      },
      set: function(fVideos) {
        this.$store.dispatch("SET_FILTERED_VIDEOS", fVideos);
      }
    },
    origVideos: {
      get: function() {
        return this.$store.state.origVideos;
      }
    },
  },
  methods: {
    filterVidoes() {
      this.filteredVideos = videosFilter.filter(this.filter, this.origVideos);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#rating-slider input {
  box-sizing: border-box;
  margin: 20px;
  padding: 20px;
  -webkit-appearance: none;
  width: calc(100% - 40px);
  height: 25px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

#rating-slider input:hover {
  opacity: 1;
}

#rating-slider input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: orange;
  cursor: pointer;
}

#rating-slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #4caf50;
  cursor: pointer;
}

#rating-slider h3 {
  margin: 30px 0 0;
}

/* Styles go here */
</style>
