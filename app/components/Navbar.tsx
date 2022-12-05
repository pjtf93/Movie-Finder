import { Form, Link } from '@remix-run/react';

const Navbar = () => {
  return (
    <div className="w-full flex bg-blue-800 px-2 md:px-4 py-4 text-xl justify-between text-white">
      <Link to={'/'} className="px-4 py-2">
        Home
      </Link>
      <div className="w-fit">
        <Form method="post">
          <div className="flex space-x-4">
            <input
              name="title"
              type="text"
              placeholder="Search a movie..."
              autoComplete="off"
              className="bg-white rounded-md px-4 py-2 text-black w-[50%] md:w-full"
            />
            <button type="submit" className="bg-red-600 py-2 px-8 rounded-md">
              Search
            </button>
          </div>
        </Form>
      </div>
      <div className="hidden sm:block"></div>
    </div>
  );
};

export default Navbar;
