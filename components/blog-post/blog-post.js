import React from 'react';
import hydrate from 'next-mdx-remote/hydrate';

import classes from './blog-post.module.scss';

function BlogPost({ post }) {
  const { data, content } = post;
  const mdxContent = hydrate(content);

  return (
    <div
      className={`container mx-auto sm:px-8 prose-sm max-w-xl sm:max-w-3xl md:max-w-4xl sm:prose-lg md:prose-xl ${classes.wrapper}`}>
      {mdxContent}
    </div>
  );
}

export default BlogPost;
