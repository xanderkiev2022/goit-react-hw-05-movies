import PropTypes from 'prop-types';
import axios from 'axios';

const API_KEY = '6f3a72a470b06bab99f8d69f54b4e2d3';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchTrendMovies = async (page = 1) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMoviesbyName = async searchQuery => {
  try {
    const { data } = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`);
    return data;
    // return data.results;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMoviesById = async searchQuery => {
  try {
    const { data } = await axios.get(`${BASE_URL}/movie/${searchQuery}?api_key=${API_KEY}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchCast = async searchQuery => {
  try {
    const { data } = await axios.get(`${BASE_URL}/movie/${searchQuery}/credits?api_key=${API_KEY}`);
    // return data;
    return data.cast;
  } catch (error) {
    console.error(error);
  }
};

export const fetchReviews = async searchQuery => {
  try {
    const { data } = await axios.get(`${BASE_URL}/movie/${searchQuery}/reviews?api_key=${API_KEY}&page=1`);
    return data.results;
  } catch (error) {
    console.error(error);
  }
};

fetchTrendMovies.propTypes = {
  searchQuery: PropTypes.string,
};
fetchMoviesbyName.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};
fetchMoviesById.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};
fetchCast.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};
fetchReviews.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};
