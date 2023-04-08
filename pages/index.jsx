import Link from 'next/link';
import { getAllContents } from '../lib/content-parser';

export function getStaticProps() {
  return {
    props: {
      blogs: getAllContents('blog')
        .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
        .slice(0, 3),
      excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      title: 'Train Travel',
      thumbnail: {
        src: '',
      },
      date: '',
    },
  };
}

export default function Home({ blogs, excerpt, title }) {
  return (
    <>
      <h1 className="text-center">{title}</h1>
      <p className="text-center">{excerpt}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map(
          ({ category, date, excerpt, thumbnail, title, slug }, index) => (
            <div key={index}>
              <img
                className="w-full object-cover h-48 md:h-56 lg:h-72"
                src={thumbnail.src}
                alt={thumbnail.alt}
              />
              <h2>{title}</h2>
              <blockquote>
                <b>Date</b> {date} <b>Category</b> <a href="#">{category}</a>
              </blockquote>
              <p>{excerpt}</p>
              <p>
                <Link href={`/blog/${slug}`}>Read more</Link>
              </p>
            </div>
          )
        )}
      </div>
    </>
  );
}
