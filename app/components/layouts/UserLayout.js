import Header from '../includes/Header';
import Footer from '../includes/Footer';
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
