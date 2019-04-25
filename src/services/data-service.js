// import axios from "axios"

const dataService = {

  fetchData() {
    // fetching Genres

    const moviesUrl = 'https://thingproxy.herokuapp.com/fetch/https://api.themoviedb.org/3/movie/now_playing?api_key=23206ae005c42724b84f5a45c297b757';
    const genresUrl = 'https://thingproxy.herokuapp.com/fetch/https://api.themoviedb.org/3/genre/movie/list?api_key=23206ae005c42724b84f5a45c297b757';
    
    
    return Promise.all([
                fetch(moviesUrl).then(value => value.json()),
                fetch(genresUrl).then(value => value.json())
                ])
                .then((value) => {
                   return value;
                })
                .catch((err) => {
                  throw err
                });
  }
}

export default dataService;
