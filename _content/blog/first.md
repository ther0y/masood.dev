---
    title: Hello Blog
    slug: hello-blog
    date: 2021-05-03T13:15:05.583Z
---

### Hello Blog
-----
This is how this page is rendered using `Next.js`
```javascript
  
  export async function getStaticProps({ params }) {
    return {
      props: await findPostBySlug(params.slug)
    };
  }

```
