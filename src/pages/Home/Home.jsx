import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchTrendMovies } from 'service/moviesApi';
import { Gallery, GalleryItem, Img, Title, LinkStyled, H2 } from './Home.styled';
import { ButtonLoadMore } from 'components/Button/Button';

export default function Home() {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  // 1й рендер
  useEffect(() => {
    const getTrendMovies = async () => {
      try {
        const { results, total_pages } = await fetchTrendMovies();
        setTrendMovies(results);
        setTotalPages(total_pages);
      } catch (error) {
        console.log(error);
      }
    };

    getTrendMovies();
  }, []);

  // 2й і наступні рендери
  useEffect(() => {
    if (page === 1) {
      return;
    }
    const getTrendMovies = async () => {
      try {
        const { results } = await fetchTrendMovies(page);
        setTrendMovies(prevData => [...prevData, ...results]);
      } catch (error) {
        console.log(error);
      }
    };

    getTrendMovies();
  }, [page]);

  return (
    <>
      <div>
        <H2>Trending today</H2>
        <Gallery>
          {trendMovies.map(({ id, title, poster_path }) => {
            return (
              <GalleryItem key={id}>
                <LinkStyled to={`/movies/${id}`} state={{ location }} key={id}>
                  <Img src={`https://image.tmdb.org/t/p/w300${poster_path} `} alt={title} />
                  <Title>{title ? title : ' No information'}</Title>
                </LinkStyled>
              </GalleryItem>
            );
          })}
        </Gallery>
        {trendMovies && totalPages > 1 && <ButtonLoadMore loadMore={loadMore} />}
      </div>
    </>
  );
}
