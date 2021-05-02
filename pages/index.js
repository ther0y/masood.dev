import { MeCard } from '../components/me-card/me-card';
import { Layout } from '../layouts/layout';
import Image from 'next/image';
import GithubGraph from '../components/github-graph/github-graph';

export default function Home() {
  return (
    <Layout title="Home">
      <div>
        <div className="flex flex-col flex-grow items-center justify-center">
          <div className="mb-24">
            <MeCard />
          </div>
          <GithubGraph />
        </div>
      </div>
    </Layout>
  );
}
