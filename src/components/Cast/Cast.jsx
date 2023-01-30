import { fetchCast } from 'service/moviesApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Cast() {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  const getCast = async movieId => {
    try {
      await fetchCast(movieId).then(res => setMovieCast(res));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCast(movieId);
  }, [movieId]);

  return (
    <>
      <div>
        {movieCast
          ? movieCast.map(actor => {
              return (
                <div key={actor.id}>
                  <p>{actor.original_name}</p>
                  <img
                    src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                    alt={actor.original_name}
                  />

                  <p>
                    Character: <br />
                    {actor.character}
                  </p>
                </div>
              );
            })
          : 'oops'}
      </div>
    </>
  );
}
