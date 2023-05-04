// components/layout/Header.js

import React from 'react';
import Link from 'next/link';

const Header = () => (
  <header>
    <nav>
      <Link href="/">
        <span>Home</span>
      </Link>
      <Link href="/about">
        <span>About</span>
      </Link>
      {/* Add more links as needed */}
    </nav>
  </header>
);

export default Header;
