import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function () {
  const { pathname } = useRouter();
  const [darkmode, setDarkmode] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkmode);
  }, [darkmode]);

  return (
    <div className="max-w-screen-lg mx-auto flex flex-wrap items-center mb-8">
      <div className="flex flex-wrap space-x-4">
        <h2>{pathname === '/' ? '' : 'Train Travel'}</h2>
        <button onClick={() => setDarkmode(!darkmode)}>
          {/* Moon icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 hidden dark:inline"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
          {/* Sun icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 inline dark:hidden"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <nav className="ml-auto flex flex-wrap items-center divide-x divide-gray-200 dark:divide-gray-700">
        <Link href="/" className="px-4 !no-underline">
          Home
        </Link>
        <Link href="/blog" className="px-4 !no-underline">
          Blog
        </Link>
        <Link href="/about" className="px-4 !no-underline">
          About
        </Link>
      </nav>
    </div>
  );
}
