import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import MovieList from '~/components/MovieList';
import Paginator from '~/components/Paginator';
import { getPopularMovies } from '~/services/movies';

export const loader = async (args: LoaderArgs) => {
  const { request } = args;
  const url = new URL(request.url);
  const page = url.searchParams.get('page') || '1';
  const popularMovies = await getPopularMovies(page);
  if (popularMovies) {
    return json(popularMovies);
  }
  return json({ results: [], total_pages: 0, page: 0 });
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  return (
    <div className="flex flex-col justify-center items-center px-[5%]">
      <h1 className="text-4xl text-white my-10">Popular movies</h1>
      <MovieList results={data?.results} />
      <Paginator page={data?.page} totalPage={data?.total_pages} />
    </div>
  );
}
