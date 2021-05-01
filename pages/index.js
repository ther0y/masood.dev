import { MeCard } from '../components/me-card/me-card';
import Head from 'next/head';

console.log('dcsd');

export default function Home() {
  return (
    <div>
      <Head>
        <title>masood</title>
      </Head>
      <div className="flex flex-col flex-grow items-center justify-center mt-40">
        <div className="mb-24">
          <MeCard />
        </div>
      </div>
    </div>
  );
}
