import { useEffect, useState } from 'react';
import { moviesApi } from 'service/moviesApi';

export function MoviesGallery() {
  const [moviesGallery, setMoviesGallery] = useState([]);

  useEffect(() => {
    moviesApi('/trending/get-trending').then(setMoviesGallery);
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      {moviesGallery.length > 0 && (
        <ul>
          {movies.map(({ id }) => {
            return (
              <li key={id}>
                <MovieDetails id={id} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
