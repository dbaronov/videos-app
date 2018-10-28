<template>
  <div id="app">
    <Header msg="Videos List"/>
    <Genres/>
    <RatingSlider/>
    <VideosList/>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import RatingSlider from './components/RatingSlider.vue'
import Genres from './components/Genres.vue'
import VideosList from './components/VideosList.vue'

export default {
  name: 'app',
  components: {
    Header,
    RatingSlider,
    VideosList,
    Genres,
  },
}
</script>

<style>
  #app {
    max-width: 1200px;
    margin: 0 auto;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
