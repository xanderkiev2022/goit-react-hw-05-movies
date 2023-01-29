import { useEffect, useState } from 'react';
import { useParams, useLocation, Navigate, Outlet } from 'react-router-dom';
import { moviesApi } from 'service/moviesApi';

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const backLink = location?.state?.from ?? '/';

  const location = useLocation();

  useEffect(() => {
    moviesApi('/movies/get-movie-details', movieId).then(setMovie);
  }, [id]);

  if (!movie) {
    return;
  }

  //   const { title, vote_count: votes, backdrop_path: img } = movie;

  return (
    <>
      <Navigate to={backLink} />

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
        <Navigate to="cast">Cast</Navigate>
        <Navigate to="reviews">Reviews</Navigate>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
