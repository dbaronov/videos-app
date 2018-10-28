import axios from "axios"

const videosService = {

  fetchVideos() {
    // fetching Videos
    return axios
      .get('https://api.themoviedb.org/3/movie/now_playing?api_key=23206ae005c42724b84f5a45c297b757')
      .then(response => response.data.results);
  }
}

export default videosService;
