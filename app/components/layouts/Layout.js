// components/layout/Layout.js

import React from 'react';
import Navbar from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <Navbar/>
      <main className="bg-white min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
