import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import CastList from '~/components/CastList';
import MovieDetails from '~/components/MovieDetails';
import RecommendationList from '~/components/RecommendationList';
import ReviewsList from '~/components/ReviewsList';
import {
  getMovieById,
  getMovieCredits,
  getMovieRecommendations,
  getMovieReviews,
} from '~/services/movies';

export const loader = async (args: LoaderArgs) => {
  const { params } = args;
  const id = params.id;

  if (!id) {
    throw new Response('No id provided', { status: 404 });
  }
  const [movieData, creditsData, recommendationsData, reviewsData] =
    await Promise.all([
      getMovieById(id),
      getMovieCredits(id),
      getMovieRecommendations(id),
      getMovieReviews(id),
    ]);

  return json({
    data: movieData,
    credits: creditsData,
    recommendations: recommendationsData,
    reviews: reviewsData,
  });
};

const MoviePage = () => {
  const { data, credits, recommendations, reviews } =
    useLoaderData<typeof loader>();

  return (
    <div className="text-white flex flex-col md:space-y-8 px-[5%] ">
      <MovieDetails {...data} />
      <CastList {...credits} />
      <ReviewsList reviews={reviews} />
      <RecommendationList recommendations={recommendations} />
    </div>
  );
};

export default MoviePage;
