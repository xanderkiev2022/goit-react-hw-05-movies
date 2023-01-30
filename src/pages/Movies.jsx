import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMoviesbyName } from 'service/moviesApi';
// import { Navigate } from 'react-router-dom';
import SearchBox from 'components/SearchBox/SearchBox';
import { Gallery, GalleryItem, Img, LinkStyled, Title } from './Home.styled';
import { useContextHook } from 'components/Context';

export default function Movies() {
  const { movies, setMovies } = useContextHook();
  const [searchQuery, setSearchQuery] = useState('');
  const [status, setStatus] = useState('');
  const location = useLocation();

  const updateQueryString = query => {
    setSearchQuery(query);
    setMovies([]);
  };

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
  useEffect(() => {
    if (!movies) return;
    setStatus('resolved');
  }, [movies]);

  useEffect(() => {
    if (searchQuery === '') return;
    getMovies(searchQuery);
  }, [searchQuery]);

  if (status === 'resolved') {
    return (
      <>
        <SearchBox onChange={updateQueryString} />
        {movies.length > 0 && (
          <Gallery>
            {movies.map(({ id, title, poster_path }) => {
              return (
                <GalleryItem key={id}>
                  <LinkStyled
                    to={`/movies/${id}`}
                    state={{ location }}
                    key={id}
                  >
                    <Img
                      src={`https://image.tmdb.org/t/p/w300${poster_path} `}
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
