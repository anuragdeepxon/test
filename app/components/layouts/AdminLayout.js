import Header from '../common/Header';
import Footer from '../common/Footer';
import Sidebar from '../admin/Sidebar';
import React from 'react';

export default function AdminLayout({ children }) {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="bg-white min-h-screen flex-grow">{children}</main>
      </div>
      <Footer />
    </>
  );
}
