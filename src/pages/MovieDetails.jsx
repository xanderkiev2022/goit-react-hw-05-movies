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
  ExtraMenu,
} from './Movie.details.styled';
import { BackLink } from 'components/BackLink';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = location?.state ?? '/';

  useEffect(() => {
    fetchMoviesById(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return;
  }

  return (
    <>
      <BackLink to={backLinkHref}>Back to movies</BackLink>
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
      <ExtraMenu>
        <StyledLink to="cast">Cast</StyledLink>
        <StyledLink to="reviews">Reviews</StyledLink>
      </ExtraMenu>
      <div>
        <Outlet />
      </div>
    </>
  );
}
