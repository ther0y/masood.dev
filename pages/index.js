import { MeCard } from '../components/me-card/me-card';
import { Layout } from '../layouts/layout';
import GithubGraph from '../components/github-graph/github-graph';

export default function Home() {
  return (
    <Layout title="Home">
      <div className="m-auto pb-24">
        <div className="flex flex-col flex-grow justify-center px-8 md:p-0 ">
          <MeCard />
          <GithubGraph />
        </div>
      </div>
    </Layout>
  );
}
