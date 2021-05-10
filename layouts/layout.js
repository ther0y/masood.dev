import { Navbar } from '../components/navbar/navbar';
import Link from 'next/link';
import Head from 'next/head';

export const Layout = ({ props, children, title }) => {
  return (
    <div {...props}>
      <Head>
        <title>Masood | {title}</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500&display=swap"
        />
      </Head>
      <div className="min-h-screen flex">
        <div className="flex flex-col flex-1">
          <header className="flex flex-col sm:flex-row justify-center sm:justify-between items-center w-full mx-auto p-2 py-8 sm:px-8 sm:py-4 md:container md:p-8">
            <Link href="/">
              <div className="text-lg font-black cursor-pointer mb-3 sm:mb-0">
                MR.
              </div>
            </Link>
            <Navbar />
          </header>
          {children}
        </div>
      </div>
    </div>
  );
};
