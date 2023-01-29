import { useEffect, useState } from 'react';
import { moviesApi } from 'service/moviesApi';

export function Movies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const updateQueryString = query => {
    setSearchQuery(query);
    setPage(1);
    setMovies([]);
  };

  useEffect(() => {
    moviesApi('/trending/get-trending').then(setMovies);
  }, []);

  return (
    <>
      <SearchForm value={searchQuery} onChange={updateQueryString} />

      <h2>Trending today</h2>
      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, poster_path, title }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`} cover={poster_path}>
                  {title}
                </Link>
                {/* <MovieDetails id={id} /> */}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
