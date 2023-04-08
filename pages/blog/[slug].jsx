import mdHtmlParser from '../../lib/md-html-parser';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { getContentPaths, getContent } from '../../lib/content-parser';

export function getStaticPaths() {
  return {
    paths: getContentPaths('blog').map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const { content, ...others } = getContent('blog', slug);

  return {
    props: {
      ...others,
      sourceContent: await serialize(content, {
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [],
        },
      }),
    },
  };
}

export default function Blog({
  sourceContent,
  category,
  date,
  excerpt,
  thumbnail,
  title,
}) {
  return (
    <>
      <div className="max-w-prose mx-auto">
        <p>
          <img
            className="w-full object-cover h-96"
            src={thumbnail.src}
            alt={thumbnail.alt}
          />
        </p>
        <h1>{title}</h1>
        <p>
          <b>Date</b> {date} <b>Category</b> <a href="#">{category}</a>
        </p>
        <p>{excerpt}</p>
        <hr />
      </div>
      <div className="max-w-prose mx-auto">
        <MDXRemote {...sourceContent} components={mdHtmlParser} />
      </div>
    </>
  );
}
