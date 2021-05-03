import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), '_content/blog');

export function getAllPosts() {
  const allPosts = fs.readdirSync(contentDirectory);

  return allPosts.map((fileName) => {
    const fileContents = fs.readFileSync(
      path.join(contentDirectory, fileName),
      'utf8'
    );

    const { data, content } = matter(fileContents);

    return { data, content };
  });
}