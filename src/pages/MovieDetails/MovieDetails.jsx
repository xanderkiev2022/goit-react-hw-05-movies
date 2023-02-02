import { useEffect, useRef, useState } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { fetchMoviesById } from 'service/moviesApi';
import { Wrapper, Img, Info, Title, H3, Text, StyledLink, ExtraMenu } from './MovieDetails.styled';
import { BackLink } from 'components/BackLink';
import noPicture from '../../images/no_picture.jpg';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from || '/');
  // const backLinkHref = location?.state?.from ?? '/';
  // const backLinkHref = location?.state ?? '/';
  // const backLinkHref = location ?? '/';

  // console.log('location?.state?.from :>> ', location?.state?.from);
  // console.log('location?.state :>> ', location?.state);
  // console.log('location :>> ', location);

  useEffect(() => {
    fetchMoviesById(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return;
  }

  return (
    <>
      <BackLink to={backLinkHref.current}>Back to movies</BackLink>
      <Wrapper>
        <div>
          <Img src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : noPicture} alt={movie?.title} />
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
