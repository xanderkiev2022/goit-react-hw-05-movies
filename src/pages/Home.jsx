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
            {trendMovies.map(movie => {
              return (
                <GalleryItem key={movie.id}>
                  <Link
                    to={`/movies/${movie.id}`}
                    state={{ location }}
                    key={movie.id}
                  >
                    <Img
                      src={`https://image.tmdb.org/t/p/w300${movie.poster_path} `}
                      alt={movie.title}
                    />
                    <Title>
                      {movie.title ? movie.title : ' No information'}
                    </Title>
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
