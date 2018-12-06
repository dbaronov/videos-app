<template>
  <div class="video-wrapper">

    <div id="videos-list" v-if="filteredVideos.length">
        <div class="video-list__item" v-for="(video, videoIndex) in filteredVideos" v-bind:key="video.id">
          <span class="video-list__item-rating">{{ video.vote_average }}</span>
          <img v-bind:src="`//image.tmdb.org/t/p/w300/${video.poster_path}`" v-bind:alt="video.title" />
          <h2>{{ video.title }}</h2>
          <button class="button-green" @click="prepareSelectedVideo(videoIndex)">More info</button>
      </div>
    </div>

    <div v-else>
      <p>No result found based on your input</p>
    </div>

    <div class="video-list__modal" v-if="modalActive">
      <div class="video-list__modal-content">
        <button class="close-button" @click="destroySelectedVideo"></button>

        <h2>{{ filteredVideos[selectedVideo].title }}</h2>
        <img v-bind:src="`//image.tmdb.org/t/p/w300/${filteredVideos[selectedVideo].poster_path}`" v-bind:alt="filteredVideos[selectedVideo].title" />
        <p>{{ filteredVideos[selectedVideo].overview }}</p>
      </div>
    </div>

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
    selectedVideo: {
      get: function() {
        return this.$store.state.selectedVideo;
      },
      set: function(selectedVideo) {
        this.$store.dispatch("SET_SELECTED_VIDEO", selectedVideo);
      }
    },
    modalActive:  {
      get: function() {
        return this.$store.state.modalActive;
      },
      set: function(boolean) {
        this.$store.dispatch("SET_MODAL_ACTIVE", boolean);
      }
    }
  },
  methods: {
    loadVideos: async function() {
      this.$store.state.origVideos = await videosService.fetchVideos();
    },
    prepareSelectedVideo: function(videoIndex) {
      this.selectedVideo = videoIndex
      this.modalActive = true
    },
    destroySelectedVideo: function() {
      this.selectedVideo = null
      this.modalActive = false
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
  width: 100%;
  padding: 20px 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 40px 10px;
}

.video-list__item h2 {
  flex: 1 0 auto;
}

@media only screen and (min-width: 576px) {
  .video-list__item {
    max-width: calc(50% - 20px);
  }
}

@media only screen and (min-width: 768px) {
  .video-list__item {
    max-width: calc(33.33333% - 20px);
  }
}

@media only screen and (min-width: 1024px) {
  .video-list__item {
    max-width: calc(20% - 20px);
  }
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

.video-list__modal {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: beige;
}

.video-list__modal-content {
  position: relative;
  max-width: 75vw;
}

.video-list__modal-content p {
  max-width: 500px;
}

.close-button {
  position: absolute;
  right: 0;
  top: 0;
  height: 25px;
  width: 25px;
  box-sizing: border-box;
  line-height: 25px;
  display: inline-block;
  background-color: beige;
  border: none;
  outline: none;
  cursor: alias;
}

.close-button:before,
.close-button:after {
  transform: rotate(-45deg);
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -5px;
  margin-left: -25px;
  display: block;
  height: 5px;
  width: 25px;
  background-color: grey;
  transition: all 0.2s ease-out;
}

.close-button:after {
  transform: rotate(45deg);
}

.close-button:hover:before,
.close-button:hover:after {
    transform: rotate(0deg);
}

.button-green {
    position: relative;
    display: inline-block;
    cursor: pointer;
    font-size: 12px;
    font-weight: bold;
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    user-select: none;
    overflow: hidden;
    padding: 10px 15px;
    border-radius: 2px;
    background: linear-gradient(rgb(29, 176, 42), rgb(24, 146, 35));
}

.button-green:hover::after {
    left: 120%;
    transition: all 1550ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
}

.button-green:after {
    content: "";
    height: 155px;
    left: -75px;
    opacity: 0.2;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    width: 50px;
    background: rgb(255, 255, 255);
    transition: all 1550ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
}
</style>
