import { useLocation, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMoviesbyName } from 'service/moviesApi';
import SearchBox from 'components/SearchBox/SearchBox';
import { Gallery, GalleryItem, Img, LinkStyled, Title } from './Home.styled';
import { useContextHook } from 'components/Context';
import noPicture from '../images/no_picture.jpg';

export default function Movies() {
  const { movies, setMovies } = useContextHook();
  const [searchParams, setSearchParams] = useSearchParams('');
  const currentQuery = searchParams.get('query') ?? '';
  const [status, setStatus] = useState('');
  const location = useLocation();

  const updateQueryString = query => {
    if (query === currentQuery) {
      return;
    }
    if (query === '') {
      setMovies([]);
      return;
    }
    setSearchParams({ query: query });
    setMovies([]);
  };

  useEffect(() => {
    if (!movies) return;
    setStatus('resolved');
  }, [movies]);

  useEffect(() => {
    if (currentQuery === '') return;

    const getMovies = async searchQuery => {
      try {
        await fetchMoviesbyName(searchQuery).then(res => {
          setMovies(res);
          setStatus('resolved');
        });
      } catch (error) {
        console.log(error);
      }
    };

    getMovies(currentQuery);
  }, [currentQuery, setMovies]);

  if (status === 'resolved') {
    return (
      <>
        <SearchBox onChange={updateQueryString} />
        {movies.length > 0 && (
          <Gallery>
            {movies.map(({ id, title, poster_path }) => {
              return (
                <GalleryItem key={id}>
                  <LinkStyled to={`/movies/${id}`} state={location} key={id}>
                    <Img
                      src={
                        poster_path
                          ? `https://image.tmdb.org/t/p/w300${poster_path} `
                          : noPicture
                      }
                      alt={title}
                    />
                    <Title>{title ? title : ' No information'}</Title>
                  </LinkStyled>
                </GalleryItem>
              );
            })}
          </Gallery>
        )}
      </>
    );
  }
}
