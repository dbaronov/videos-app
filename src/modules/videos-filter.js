import intersection from 'lodash.intersection';
import sortby from 'lodash.sortby';
import reverse from 'lodash.reverse';

const videosFilter = {

    filter(filter, origVideos) {
      let filteredVideos = reverse(sortby( origVideos.filter( video => video.vote_average >= filter.rating ),  'vote_average'));
      
      if ( filter.selectedGenres.length ) {
        filteredVideos = filteredVideos.filter( video => intersection(video.genre_ids, filter.selectedGenres).length );
      }

      return filteredVideos;
    }
}

export default videosFilter;
