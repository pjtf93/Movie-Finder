import type { MovieType } from '~/types/movie';

const MovieDetails = (props: MovieType) => {
  return (
    <div>
      <div className="flex flex-col justify-center center items-center">
        <h1 className="text-5xl  my-16">{props?.title}</h1>
        <div className="flex flex-col md:flex-row">
          <div className=" md:w-[50%] xl:w-[30%] ">
            <img
              src={
                props?.poster_path
                  ? `https://image.tmdb.org/t/p/w500${props?.poster_path}`
                  : 'https://via.placeholder.com/500x750'
              }
              className="w-full h-full object-cover"
              alt={props?.title}
            />
          </div>

          <div className="md:w-[50%] lg:w-[50%] 2xl:w-[70%] my-8 md:my-0 md:px-[5%]">
            <div className="flex flex-col space-y-2">
              <span>Release date: {props?.release_date}</span>
              <span>
                Genre: {props?.genres?.map((genre) => genre?.name).join(', ')}
              </span>
              <span>
                Country:{' '}
                {props?.production_countries
                  ?.map((country) => country?.name)
                  .join(', ')}
              </span>
              <p className="text-white">{props?.overview}</p>

              <span className="text-white">
                Vote average: {props?.vote_average} / 10 ({props?.vote_count}
                {' votes'})
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
