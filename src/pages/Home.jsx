import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchTrendMovies } from 'service/moviesApi';

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
          {trendMovies.map(movie => {
            return (
              <Link
                to={`/movies/${movie.id}`}
                state={{ location }}
                key={movie.id}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path} `}
                  alt={movie.title}
                />
                <p>{movie.title ? movie.title : ' No information'}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
