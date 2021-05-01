import { MeCard } from '../components/me-card/me-card';
import { Layout } from '../layouts/layout';

export default function Home() {
  return (
    <Layout title="Home">
      <div>
        <div className="flex flex-col flex-grow items-center justify-center mt-40">
          <div className="mb-24">
            <MeCard />
          </div>
        </div>
      </div>
    </Layout>
  );
}
