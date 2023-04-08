import Link from 'next/link';
import { Fragment } from 'react';
import { getAllContents } from '../../lib/content-parser';

export function getStaticProps() {
  return {
    props: {
      blogs: getAllContents('blog').sort((a, b) =>
        a.date < b.date ? 1 : a.date > b.date ? -1 : 0
      ),
      excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      title: 'Blog',
      thumbnail: {
        src: '',
      },
      date: '',
    },
  };
}

export default function Blogs({ blogs, title }) {
  const categories = [...new Set(blogs.map(({ category }) => category))];

  return (
    <>
      <h1 className="text-center">{title}</h1>
      <p className="text-center">
        <b>Categories </b>
        {categories.map((category, index) => (
          <Fragment key={`cate-${index}`}>
            <a href="#">{category}</a>
            {index !== categories.length - 1 ? <span>, </span> : ''}
          </Fragment>
        ))}
      </p>
      {blogs.map(
        ({ category, date, excerpt, thumbnail, title, slug }, index) => (
          <div className="sm:flex items-center" key={index}>
            <div className="flex-1">
              <img
                className="w-full object-cover h-56 sm:h-72 md:h-96"
                src={thumbnail.src}
                alt={thumbnail.alt}
              />
            </div>
            <div className="flex-1 sm:pl-4">
              <h2>{title}</h2>
              <blockquote>
                <b>Date</b> {date} <b>Category</b> <a href="#">{category}</a>
              </blockquote>
              <p>{excerpt}</p>
              <p>
                <Link href={`/blog/${slug}`}>Read more</Link>
              </p>
            </div>
          </div>
        )
      )}
    </>
  );
}
