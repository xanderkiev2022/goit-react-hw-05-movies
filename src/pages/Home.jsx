import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchTrendMovies } from 'service/moviesApi';
import { Gallery, GalleryItem, Img, Title } from './Home.styled';

export default function Home() {
  const [trendMovies, setTrendMovies] = useState([]);

  const location = useLocation();

  const getTrendMovies = async () => {
    try {
      await fetchTrendMovies().then(res => setTrendMovies(res));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTrendMovies();
  }, []);

  return (
    <>
      <div>
        <div>
          <Gallery>
            {trendMovies.map(({ id, title, poster_path }) => {
              return (
                <GalleryItem key={id}>
                  <Link to={`/movies/${id}`} state={{ location }} key={id}>
                    <Img
                      src={`https://image.tmdb.org/t/p/w300${poster_path} `}
                      alt={title}
                    />
                    <Title>{title ? title : ' No information'}</Title>
                  </Link>
                </GalleryItem>
              );
            })}
          </Gallery>
        </div>
      </div>
    </>
  );
}
