import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import renderToString from 'next-mdx-remote/render-to-string';
import mdxPrism from 'mdx-prism';

const contentDirectory = path.join(process.cwd(), '_content/blog');

export function getAllPosts() {
  const allPosts = fs.readdirSync(contentDirectory);

  return allPosts.map((fileName) => {
    const fileContents = fs.readFileSync(
      path.join(contentDirectory, fileName),
      'utf8'
    );

    const { data, content } = matter(fileContents);

    return {
      data: {
        ...data,
        date: data.date.toISOString()
      },
      content
    };
  });
}

export async function findPostBySlug(slug) {
  const post = getAllPosts().find((post) => post.data.slug === slug);

  const mdxSource = await renderToString(post.content, {
    mdxOptions: {
      rehypePlugins: [mdxPrism]
    }
  });

  return {
    ...post,
    content: mdxSource
  };
}

export function getAllPostsPaths() {
  return getAllPosts().map(({ data }) => ({
    params: {
      slug: data.slug
    }
  }));
}

export function getAllPostsParsed() {
  // eslint-disable-next-line no-undef
  return Promise.all(
    getAllPosts().map(async (post) => {
      const content = await renderToString(post.content);
      return {
        data: post.data,
        content
      };
    })
  );
}
