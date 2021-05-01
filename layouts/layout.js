import { Navbar } from '../components/navbar/navbar';
import Link from 'next/link';

export const Layout = ({ props, children }) => {
  return (
    <div {...props}>
      <div className="min-h-screen flex">
        <div className="flex flex-col flex-1 max-w-6xl mx-auto p-10 my-24">
          <header className="flex justify-between">
            <Link href="/">
              <div className="text-lg font-black cursor-pointer">MR.</div>
            </Link>
            <Navbar />
          </header>
          {children}
        </div>
      </div>
    </div>
  );
};
