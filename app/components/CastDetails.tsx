import type { CastdetailType } from '~/types/cast';

const CastDetails = (props: CastdetailType) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row py-8">
        <div className=" md:w-[50%] xl:w-[30%] ">
          <img
            src={
              props?.profile_path
                ? `https://image.tmdb.org/t/p/w500${props?.profile_path}`
                : 'https://via.placeholder.com/500x750'
            }
            className="w-full h-full object-cover"
            alt={props?.name}
          />
        </div>

        <div className="md:w-[50%] lg:w-[50%] 2xl:w-[70%] my-8 md:my-0 md:px-[5%] flex flex-col space-y-2">
          {props?.name && <h1 className="text-5xl">{props?.name}</h1>}
          {props?.birthday && (
            <>
              <span className="text-2xl text-white">Birthday</span>
              <p className="text-white">{props?.birthday}</p>
            </>
          )}
          {props.biography && (
            <>
              <span className="text-2xl text-white">Biography</span>
              <p className="text-white">{props?.biography}</p>
            </>
          )}
          {props?.known_for_department && (
            <>
              <span className="text-2xl text-white">Known For</span>
              <p className="text-white">{props?.known_for_department}</p>
            </>
          )}

          {props?.place_of_birth && (
            <>
              <span className="text-2xl text-white">Place of Birth</span>
              <p className="text-white">{props?.place_of_birth}</p>
            </>
          )}

          {props?.deathday && (
            <>
              <span className="text-2xl text-white">Deathday</span>
              <p className="text-white">{props?.deathday}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CastDetails;
