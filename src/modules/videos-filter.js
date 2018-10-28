import intersection from 'lodash.intersection';

const videosFilter = {

    filter(filter, origVideos) {
      let filteredVideos = origVideos.filter( video => video.vote_average >= filter.rating );
      
      if ( filter.selectedGenres.length ) {
        filteredVideos = filteredVideos.filter( video => intersection(video.genre_ids, filter.selectedGenres).length );
      }

      return filteredVideos;
    }
}

export default videosFilter;
