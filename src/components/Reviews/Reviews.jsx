import { fetchReviews } from 'service/moviesApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Wrapper, List, Item, Author, NoInfoDiv } from './Reviews.styled';

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
    <Wrapper>
      <List>
        {movieReviews.length ? (
          movieReviews.map(review => {
            const { id, author, content } = review;
            return (
              <Item key={id}>
                <Author>{author}</Author>
                <p>{content}</p>
              </Item>
            );
          })
        ) : (
          <NoInfoDiv>
            <p>There are no reviews</p>
          </NoInfoDiv>
        )}
      </List>
    </Wrapper>
  );
}
