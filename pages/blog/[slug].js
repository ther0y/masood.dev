import React from 'react';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import { getAllPosts } from '../../_content/blog-data';
import { Layout } from '../../layouts/layout';

function BlogPost({ data, content }) {
  const mdxContent = hydrate(content);

  return (
    <Layout>
      <div className="container mx-auto md:px-8">
        <h1>{data.title}</h1>
        <h4>{data.date}</h4>
        {mdxContent}
      </div>
    </Layout>
  );
}

export default BlogPost;

export async function getStaticProps(context) {
  const { params } = context;
  const { data, content } = getAllPosts().find(
    (post) => post.data.slug === params.slug
  );

  const mdxSource = await renderToString(content);
  console.log({
    data: {
      ...data,
      date: data.date.toISOString()
    },
    content
  });
  return {
    props: {
      data: {
        ...data,
        date: data.date.toISOString()
      },
      content: mdxSource
    }
  };
}

export async function getStaticPaths() {
  return {
    paths: getAllPosts().map(({ data }) => ({
      params: {
        slug: data.slug
      }
    })),
    fallback: false
  };
}