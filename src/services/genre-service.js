import axios from "axios"

const genresService = {

  fetchGenres() {
    // fetching Genres
    return axios
      .get('https://api.themoviedb.org/3/genre/movie/list?api_key=23206ae005c42724b84f5a45c297b757')
      .then(response => response.data.genres);
  }
}

export default genresService;
