import PropTypes from 'prop-types';
import axios from 'axios';

const API_KEY = '6f3a72a470b06bab99f8d69f54b4e2d3';
const BASE_URL = 'https://api.themoviedb.org/3/';

// endpoint
// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.

export const moviesApi = async (endpoint, searchQuery, page) => {
  try {
    const { data } = await axios.get(BASE_URL, endpoint, {
      params: {
        key: API_KEY,
        query: searchQuery,
        page: page,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

moviesApi.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
