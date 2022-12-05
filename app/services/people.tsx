import type { CastdetailType } from '~/types/cast';

const API_KEY = process.env.API_KEY;

export const getPersonById = async (id: string) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}`
    );
    const data: CastdetailType = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPersonCredits = async (id: string) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${API_KEY}`
    );
    const data = await res.json();
    const formatData = data.cast.slice(0, 20);
    return formatData;
  } catch (error) {
    console.log(error);
  }
};
