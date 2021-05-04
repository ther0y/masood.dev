import { UnderConstruction } from '../components/under-construction';
import { Layout } from '../layouts/layout';
import { getAllPosts } from '../_content/blog-data';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import Link from 'next/link';

export default function Blog({ posts }) {
  const Posts = posts.map(({ data, content }) => {
    const mdxContent = hydrate(content);

    return (
      <div key={data.slug}>
        <Link href={`/blog/${data.slug}`}>
          <a>
            <h1>{data.title}</h1>
          </a>
        </Link>
        {data.date}
      </div>
    );
  });

  return (
    <Layout title="Blog">
      <main className="m-auto pb-24">{Posts}</main>
    </Layout>
  );
}

export async function getStaticProps() {
  // eslint-disable-next-line no-undef
  const posts = await Promise.all(
    getAllPosts().map(async (post) => {
      const content = await renderToString(post.content);
      return {
        data: {
          ...post.data,
          date: post.data.date.toISOString()
        },
        content
      };
    })
  );

  return {
    props: {
      posts
    }
  };
}
