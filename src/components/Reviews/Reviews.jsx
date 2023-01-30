import { fetchReviews } from 'service/moviesApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  const getReviews = async movieId => {
    try {
      await fetchReviews(movieId).then(res => setMovieReviews(res));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReviews(movieId);
  }, [movieId]);

  return (
    <>
      <div>
        <div>
          {movieReviews.length ? (
            movieReviews.map(review => {
              const { id, author, content } = review;
              return (
                <div key={id}>
                  <h3>{author}</h3>
                  <p>{content}</p>
                </div>
              );
            })
          ) : (
            <div>
              <p>There are no reviews</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
