import { Layout } from '../layouts/layout';
import { getAllPostsParsed } from '../_content/blog-data';
import hydrate from 'next-mdx-remote/hydrate';
import Link from 'next/link';

export default function Blog({ posts }) {
  const Posts = posts.map(({ data, content }) => {
    return (
      <div
        className="rounded-sm shadow-md border border-grey-200"
        key={data.slug}
        style={{ maxWidth: '600px', width: '80%' }}>
        <div className="p-8 relative">
          <h1>{data.title}</h1>

          {data.date}
          <Link href={`/blog/${data.slug}`}>
            <a>
              <div className="absolute right-5 text-sm text-blue-400 font-semibold">
                read more
                <span className="text-md font-bold relative top-px left-1">></span>
              </div>
            </a>
          </Link>
        </div>
      </div>
    );
  });

  return (
    <Layout title="Blog">
      <main className="justify-center flex">{Posts}</main>
    </Layout>
  );
}

export async function getStaticProps() {
  // eslint-disable-next-line no-undef
  return {
    props: {
      posts: await getAllPostsParsed()
    }
  };
}
