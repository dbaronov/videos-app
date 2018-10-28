<template>
  <div id="videos-list" v-if="filteredVideos.length">
      <div class="video-list__item" v-for="video in filteredVideos" v-bind:key="video.id">
          <span class="video-list__item-rating">{{ video.vote_average }}</span>
          <img v-bind:src="`http://image.tmdb.org/t/p/w300/${video.poster_path}`" v-bind:alt="video.title" />
          <h2>{{ video.title }}</h2>
      </div>
  </div>
  <div v-else>
    <p>No result found based on your input</p>
  </div>
</template>

<script>
// VideosService import
import videosService from "../services/video-service";
// Filter
import videosFilter from "../modules/videos-filter";

export default {
  name: "VideosList",
  computed: {
    filter() {
      return this.$store.state.filter;
    },
    origVideos: {
      get: function() {
        return this.$store.state.origVideos;
      }
    },
    filteredVideos: {
      get: function() {
        return this.$store.state.filteredVideos;
      },
      set: function(fVideos) {
        this.$store.dispatch("SET_FILTERED_VIDEOS", fVideos);
      }
    },
  },
  methods: {
    loadVideos: async function() {
      this.$store.state.origVideos = await videosService.fetchVideos();
    }
  },
  async mounted() {
    await this.loadVideos();
    this.filteredVideos = videosFilter.filter(this.filter, this.origVideos);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#videos-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.video-list__item {
  box-sizing: border-box;
  max-width: calc(20% - 20px);
  padding: 20px 10px;
  margin: 0 10px;
  position: relative;
}

.video-list__item img {
  width: 100%;
}

.video-list__item-rating {
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  height: 60px;
  width: 60px;
  border-radius: 60px;
  line-height: 60px;
  background-color: orange;
  color: white;
  font-weight: bold;
  text-align: center;
}
</style>
