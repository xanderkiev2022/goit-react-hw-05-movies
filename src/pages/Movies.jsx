import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMoviesbyName } from 'service/moviesApi';
// import { Navigate } from 'react-router-dom';
import SearchBox from 'components/SearchBox/SearchBox';
import { Gallery, GalleryItem, Img } from './Home.styled';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const updateQueryString = query => {
    setSearchQuery(query);
    console.log('searchQuery :>> ', searchQuery);
    setPage(1);
    setMovies([]);
  };

  const getMovies = async searchQuery => {
    try {
      await fetchMoviesbyName(searchQuery).then(res => setMovies(res));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    getMovies(searchQuery);
  }, [searchQuery]);

  return (
    <>
      <SearchBox onChange={updateQueryString} />
      {movies.length > 0 && (
        <Gallery>
          {movies.map(({ id, title, poster_path }) => {
            return (
              <GalleryItem key={id}>
                <Link to={`/movies/${id}`} state={{ location }} key={id}>
                  <Img
                    src={`https://image.tmdb.org/t/p/w300${poster_path} `}
                    alt={title}
                  />
                  <p>{title ? title : ' No information'}</p>
                </Link>
              </GalleryItem>
            );
          })}
        </Gallery>
      )}
    </>
  );
}
