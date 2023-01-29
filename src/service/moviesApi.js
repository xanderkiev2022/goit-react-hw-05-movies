import PropTypes from 'prop-types';
import axios from 'axios';

const API_KEY = '6f3a72a470b06bab99f8d69f54b4e2d3';
const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

export const moviesApi = async (searchQuery, page) => {
  try {
    const { data } = await axios.get(BASE_URL, {
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

  return axios('search/movie', {
    params: { api_key: API_KEY, page, searchQuery },
  });
};

moviesApi.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
