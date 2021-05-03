import { UnderConstruction } from '../components/under-construction';
import { Layout } from '../layouts/layout';

export default function Blog() {
  return (
    <Layout title="Blog">
      <main className="m-auto pb-24">
        <UnderConstruction />
      </main>
    </Layout>
  );
}
