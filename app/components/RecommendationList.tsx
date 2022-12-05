import type { MovieType } from '~/types/movie';
import MovieCard from './MovieCard';

type Props = {
  recommendations: MovieType[] | undefined;
};

const RecommendationList = ({ recommendations }: Props) => {
  return (
    <div className="flex flex-col space-y-4 pb-16">
      <h1 className="text-2xl md:text-4xl">Recommendations</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-8 pt-8 ">
        {recommendations && recommendations?.length > 0 ? (
          recommendations?.map((movie) => {
            return <MovieCard key={movie?.id} short {...movie} />;
          })
        ) : (
          <p>No recommendations found</p>
        )}
      </div>
    </div>
  );
};

export default RecommendationList;
