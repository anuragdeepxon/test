import Header from '../common/Header';
import Footer from '../common/Footer';
import React from 'react';

export default function UserLayout({ children }) {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
