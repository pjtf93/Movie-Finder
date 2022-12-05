import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData, useSearchParams } from '@remix-run/react';
import MovieList from '~/components/MovieList';
import Paginator from '~/components/Paginator';
import type { MovieListType } from '~/types/movie';

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className="text-white">
      <h1>Error</h1>
      <p>{error.message}</p>
      <p>The stack trace is:</p>
      <pre>{error.stack}</pre>
    </div>
  );
}

export const loader = async (args: LoaderArgs) => {
  const { request } = args;
  const url = new URL(request.url);
  const query = url.searchParams.get('query');
  const page = url.searchParams.get('page') || 1;

  if (!query) {
    return json({ results: [], total_pages: 0, page: 0 });
  }

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${query}&page=${page}`
  );
  const data: MovieListType = await res.json();

  if (data?.page > data?.total_pages) {
    return json({ results: [], total_pages: 0, page: 0 });
  }

  return json(data);
};

const ResultsPage = () => {
  const data = useLoaderData<typeof loader>();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  return (
    <div className="px-[5%] text-white">
      <h1 className="text-5xl my-8 ">Results for: {query} </h1>
      <MovieList {...data} />
      {data?.page && data?.total_pages ? (
        <Paginator page={data?.page} totalPage={data?.total_pages} />
      ) : null}
    </div>
  );
};

export default ResultsPage;
