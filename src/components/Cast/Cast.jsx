import { fetchCast } from 'service/moviesApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Wrapper, List, Item, H3, H4, Img, InnerWrapper } from './Cast.styled';

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
      <Wrapper>
        <List>
          {movieCast
            ? movieCast.map(actor => {
                return (
                  <Item key={actor.id}>
                    <Img
                      src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                      alt={actor.original_name}
                    />
                    <InnerWrapper>
                      <H3>{actor.original_name}</H3>

                      <H4>
                        Character:
                        {' ' + actor.character}
                      </H4>
                    </InnerWrapper>
                  </Item>
                );
              })
            : 'Something went wrong'}
        </List>
      </Wrapper>
    </>
  );
}
