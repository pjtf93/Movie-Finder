import type { CastListType } from '~/types/cast';
import CastCard from './CastCard';

const CastList = (props: CastListType) => {
  return (
    <div>
      <span className="text-2xl md:text-4xl">Cast</span>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-y-4 pt-8 pb-16">
        {props?.cast?.map((castMember) => {
          return <CastCard key={castMember.id} {...castMember} />;
        })}
      </div>
    </div>
  );
};

export default CastList;
