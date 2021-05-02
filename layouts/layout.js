import { Navbar } from '../components/navbar/navbar';
import Link from 'next/link';
import Head from 'next/head';

export const Layout = ({ props, children, title }) => {
  return (
    <div {...props}>
      <Head>
        <title>Masood | {title}</title>
      </Head>
      <div className="min-h-screen flex">
        <div className="flex flex-col flex-1">
          <header className="flex flex-col sm:flex-row justify-center sm:justify-between items-center container mx-auto p-8">
            <Link href="/">
              <div className="text-lg font-black cursor-pointer mb-3 sm:mb-0">
                MR.
              </div>
            </Link>
            <Navbar />
          </header>
          <div className="m-auto pb-24">{children}</div>
        </div>
      </div>
    </div>
  );
};
