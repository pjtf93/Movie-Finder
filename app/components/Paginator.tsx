import { Link, useSearchParams } from '@remix-run/react';

type PaginatorProps = {
  page: number | string;
  totalPage: number | string;
};

const Paginator = ({ page, totalPage }: PaginatorProps) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  return (
    <div className=" flex justify-center items-center py-10 space-x-2">
      {page > 1 && (
        <Link
          to={
            query
              ? `?query=${query}&page=${(page as number) - 1}`
              : `?page=${(page as number) - 1}`
          }
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="white"
            >
              <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
              <path d="M13.293 7.293 8.586 12l4.707 4.707 1.414-1.414L11.414 12l3.293-3.293-1.414-1.414z" />
            </svg>
          </span>
        </Link>
      )}

      <span>
        Page {page} of {totalPage}
      </span>

      {totalPage > 1 && (
        <Link
          to={
            query
              ? `?query=${query}&page=${(page as number) + 1}`
              : `?page=${(page as number) + 1}`
          }
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="white"
            >
              <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
              <path d="M9.293 8.707 12.586 12l-3.293 3.293 1.414 1.414L15.414 12l-4.707-4.707-1.414 1.414z" />
            </svg>
          </span>
        </Link>
      )}
    </div>
  );
};

export default Paginator;
