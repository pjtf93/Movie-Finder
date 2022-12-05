import { Link } from 'react-router-dom';
import type { MovieType } from '~/types/movie';

const MovieCard = (props: MovieType) => {
  return (
    <div className="flex flex-col space-y-2 text-white items-center">
      <Link to={`/movie/${props?.id}`}>
        <img
          src={
            props?.poster_path
              ? `https://image.tmdb.org/t/p/w500${props?.poster_path}`
              : 'https://via.placeholder.com/500x750'
          }
          alt={props?.title}
          className="w-full h-full object-cover"
        />
      </Link>
      <Link to={`/movie/${props?.id}`} className="text-2xl font-bold">
        {props?.title}
      </Link>
      {!props?.short && <span>{props?.overview}</span>}
    </div>
  );
};

export default MovieCard;
