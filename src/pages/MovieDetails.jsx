import { useEffect, useState } from 'react';
import {
  useParams,
  useLocation,
  Navigate,
  Outlet,
  Link,
} from 'react-router-dom';
import { fetchMoviesById } from 'service/moviesApi';
import {
  Wrapper,
  Img,
  Info,
  Title,
  H3,
  Text,
  StyledLink,
} from './Movie.details.styled';

export default function MovieDetails() {
  const { movieId } = useParams();
  console.log('movieId :>> ', movieId);
  const [movie, setMovie] = useState(null);

  // const location = useLocation();
  // const backLink = location?.state?.from ?? '/';

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

      <Wrapper>
        <div>
          <Img
            src={`https://image.tmdb.org/t/p/w300${movie?.poster_path}`}
            alt={movie?.title}
          />
        </div>
        <Info>
          <Title>{movie?.title}</Title>
          <H3>User Score: {Math.round(movie?.vote_average) * 10}%</H3>
          <div>
            <H3>Overview</H3>
            <Text>{movie?.overview}</Text>
          </div>
          <div>
            <H3>Genres</H3>
            <Text> {movie?.genres?.map(genre => genre.name).join(', ')}</Text>
          </div>
        </Info>
      </Wrapper>

      <div>
        {/* <Navigate to="cast">Cast</Navigate>
        <Navigate to="reviews">Reviews</Navigate> */}
        <StyledLink to="cast">Cast</StyledLink>
        <StyledLink to="reviews">Reviews</StyledLink>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
