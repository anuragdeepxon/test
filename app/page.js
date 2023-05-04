'use client';

import Head from 'next/head';
import LanguageSelector from './components/common/LanguageSelector';
import UserLayout from './components/layouts/UserLayout';
import NextNProgress from 'nextjs-progressbar'


export default function Home({ Component, pageProps }) {
  return (
    <>
    <UserLayout>
        <NextNProgress
          color="#30ff8d"
          startPosition={0.3}
          stopDelayMs={100}
          height={5}
          showOnShallow={true}
          options={{ showSpinner: false }}
        />
        {/* <Component {...pageProps} /> */}
        <div className='bg-slate-400'>
          <Head>
            <title>Home | CalgaryScope</title>
          </Head>
          <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <div className="flex justify-end w-full">
                <LanguageSelector />
              </div>
              <h1 className="text-4xl font-bold text-black mb-4">CalgaryScope</h1>
              <p className="text-gray-700 mb-6">
                A platform for families raising children with developmental disabilities.
              </p>
              <div className="space-x-4">
                <a
                  href="/get-started"
                  className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
                >
                  Get Started
                </a>
                <a
                  href="/admin"
                  className="bg-gray-200 text-black px-4 py-2 rounded-md hover:bg-gray-300"
                >
                  Admin Panel
                </a>
              </div>
            </div>
          </div>
        </div>
      </UserLayout>

    </>
  );
}
