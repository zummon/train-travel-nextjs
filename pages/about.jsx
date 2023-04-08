import mdHtmlParser from '../lib/md-html-parser';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { getContent } from '../lib/content-parser';

export async function getStaticProps() {
  const { content, ...others } = getContent('', 'about');

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

export default function About({ excerpt, thumbnail, title, sourceContent }) {
  return (
    <>
      <div className="max-w-prose mx-auto">
        <h1 className="text-center">{title}</h1>
        <p className="text-center">{excerpt}</p>
        <p>
          <img
            className="w-full object-cover object-top h-96"
            src={thumbnail.src}
            alt={thumbnail.alt}
          />
        </p>
        <MDXRemote {...sourceContent} components={mdHtmlParser} />
      </div>
    </>
  );
}
