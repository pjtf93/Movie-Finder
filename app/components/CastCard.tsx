import { Link } from '@remix-run/react';
import type { Cast } from '~/types/cast';

const CastCard = (props: Cast) => {
  return (
    <div className="flex space-x-4 items-center">
      <Link to={`/cast/${props?.id}`}>
        <img
          src={
            props?.profile_path
              ? `https://image.tmdb.org/t/p/w500${props?.profile_path}`
              : 'https://via.placeholder.com/80x80'
          }
          alt={props?.name}
          className="w-20 h-20 object-cover"
        />
      </Link>
      <div className="flex flex-col">
        <Link to={`/cast/${props?.id}`}>Name: {props?.name}</Link>
        <span>Character: {props?.character} </span>
      </div>
    </div>
  );
};

export default CastCard;
