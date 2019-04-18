import intersection from 'lodash.intersection';
// import sortby from 'lodash.sortby';
// import reverse from 'lodash.reverse';

const videosFilter = {

    filter(filter, origVideos) {
      // Using Lowdash
      // let filteredVideos = reverse(sortby( origVideos.filter( video => video.vote_average >= filter.rating ),  'vote_average'));
      
      // Without libraries
      const sortBy = (key) => {
        return (a, b) => (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0);
      };

      // Using Lowdash
      // let filteredVideos = sortby( origVideos.filter( video => video.vote_average >= filter.rating ),  'vote_average').reverse();
      
      // Without libraries
      let filteredVideos =  origVideos.filter( video => video.vote_average >= filter.rating ).concat().sort(sortBy('vote_average')).reverse();

      if ( filter.selectedGenres.length ) {
        // Using Lowdash
        filteredVideos = filteredVideos.filter( video => intersection(video.genre_ids, filter.selectedGenres).length );
      }

      return filteredVideos;
    }
}

export default videosFilter;
