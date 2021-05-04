import React from 'react';
import hydrate from 'next-mdx-remote/hydrate';
import { findPostBySlug, getAllPostsPaths } from '../../_content/blog-data';
import { Layout } from '../../layouts/layout';

export default function BlogPost({ data, content }) {
  const mdxContent = hydrate(content);

  return (
    <Layout title={data.title}>
      <div className="container mx-auto md:px-8 prose">
        <h1>{data.title}</h1>
        <h4>{data.date}</h4>
        {mdxContent}
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  return {
    props: await findPostBySlug(params.slug)
  };
}

export async function getStaticPaths() {
  return {
    paths: getAllPostsPaths(),
    fallback: false
  };
}
