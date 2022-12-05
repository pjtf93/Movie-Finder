import type { MovieListType } from '~/types/movie';
import MovieCard from './MovieCard';

const MovieList = ({ results }: Pick<MovieListType, 'results'>) => {
  if (results?.length === 0 || results === undefined) {
    return (
      <div>
        <h1>No results found</h1>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 pt-2 mb-8 gap-8">
      {results &&
        results?.map((movie) => <MovieCard key={movie?.id} {...movie} />)}
    </div>
  );
};

export default MovieList;
