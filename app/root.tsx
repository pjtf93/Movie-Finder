import type { ActionArgs, LinksFunction, MetaFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from '@remix-run/react';
import Navbar from './components/Navbar';
import styles from './tailwind.css';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Movie Finder',
  viewport: 'width=device-width,initial-scale=1',
});

export const action = async (args: ActionArgs) => {
  const { request } = args;
  const formData = await request.formData();
  const value = formData.get('title');
  return redirect(`/results?query=${value}`);
};

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-slate-900 text-white h-full min-h-screen flex flex-col">
      <Navbar />
      <div className="">{children}</div>

      <footer className="mt-auto">
        <div className="bg-slate-800 text-center py-4">
          <p className="text-sm">
            Made with{' '}
            <span role="img" aria-label="love">
              ❤️
            </span>{' '}
            with Remix
          </p>
        </div>
      </footer>
    </div>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <div className="m-16">
          <h1 className="text-4xl my-8">
            {caught.status}: {caught.statusText}
          </h1>
          <span className="text-2xl">{message}</span>
        </div>
      </Layout>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <Document title="Error!">
      <Layout>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
        </div>
      </Layout>
    </Document>
  );
}
