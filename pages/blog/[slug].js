import React from 'react';
import { findPostBySlug, getAllPostsPaths } from '../../_content/blog-data';
import { Layout } from '../../layouts/layout';
import BlogPost from '../../components/blog-post/blog-post';

export default function BlogPostPage(post) {
  return (
    <Layout title={post.data.title}>
      <BlogPost post={post} />
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
