import { Link } from '@remix-run/react';
import type { CastCreditListType } from '~/types/cast';

const CastCredits = (props: CastCreditListType) => {
  return (
    <div className="flex flex-col pb-10">
      <h1 className="text-5xl mb-8 md:mb-0 md:py-16">Credits</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {props?.credits?.map((movie) => (
          <div key={movie.id} className="flex flex-col space-y-4">
            <Link to={`/movie/${movie.id}`}>
              <img
                src={
                  movie?.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie?.poster_path}`
                    : 'https://via.placeholder.com/500x750'
                }
                alt={movie?.title}
                className="w-full h-full object-cover max-w-md"
              />
            </Link>
            <h1>
              {movie?.title} ({movie?.release_date})
            </h1>
            <h1>As {movie?.character}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CastCredits;
