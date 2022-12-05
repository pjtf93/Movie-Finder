import type { CastListType } from '~/types/cast';
import type { MovieListType, MovieType } from '~/types/movie';

const API_KEY = process.env.API_KEY;

export const getPopularMovies = async (page: string) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`
    );
    const data: MovieListType = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieById = async (id: string) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    );
    const data: MovieType = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieRecommendations = async (id: string) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`
    );
    const data: MovieListType = await res.json();
    const formatData = data.results.slice(0, 5);
    return formatData;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieReviews = async (id: string) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`
    );
    const data = await res.json();
    const formatData = data.results.slice(0, 5);
    return formatData;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieCredits = async (id: string) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
    );
    const data: CastListType = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
