import { useEffect, useState } from 'react';
import { moviesApi } from 'service/moviesApi';

export function MoviesGallery({ id }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    moviesApi('/movies/get-movie-details', id).then(setMovie);
  }, [id]);

  if (!movie) {
    return;
  }

  const { title, vote_count: votes, backdrop_path: img } = movie;

  return (
    <>
      {/* {movie && ( */}
      {/* <> */}
      (<img />
      <h2>{title}</h2>
      <p>User Score: {votes}%</p>
      <h3>Overview {votes}%</h3>
      <h3>Genres {votes}%</h3>){/* </> */}
      {/* )} */}
    </>
  );
}
