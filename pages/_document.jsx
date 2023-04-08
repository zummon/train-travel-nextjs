import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl dark:prose-invert !max-w-none font-serif px-4 bg-white dark:bg-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
