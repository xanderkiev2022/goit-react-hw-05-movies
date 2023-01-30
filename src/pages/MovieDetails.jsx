import { useEffect, useState } from 'react';
import {
  useParams,
  useLocation,
  Navigate,
  Outlet,
  Link,
} from 'react-router-dom';
import { fetchMoviesById } from 'service/moviesApi';

export default function MovieDetails() {
  const { movieId } = useParams();
  console.log('movieId :>> ', movieId);
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const backLink = location?.state?.from ?? '/';

  useEffect(() => {
    fetchMoviesById(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return;
  }

  console.log('movie :>> ', movie);

  //   const { title, vote_count: votes, backdrop_path: img } = movie;

  return (
    <>
      {/* <Navigate to={backLink} /> */}

      <div>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie?.poster_path}`}
            alt={movie?.title}
          />
        </div>
        <div>
          <h2>{movie?.title}</h2>
          <p>User Score: {Math.round(movie?.vote_average) * 10}%</p>
          <div>
            <h3>Overview</h3>
            <p>{movie?.overview}</p>
          </div>
          <div>
            <h3>Genres</h3>
            <p> {movie?.genres?.map(genre => genre.name).join(', ')}</p>
          </div>
        </div>
      </div>

      <div>
        {/* <Navigate to="cast">Cast</Navigate>
        <Navigate to="reviews">Reviews</Navigate> */}
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
