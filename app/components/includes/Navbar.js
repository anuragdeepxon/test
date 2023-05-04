import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <div>
        <Link href="/">
          <a>Calgary Scope</a>
        </Link>
      </div>
    </nav>
  );
}
