import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <span className="text-xl font-bold">Your App</span>
          </Link>
          <nav>
            <Link href="/about">
              <span className="mx-2 text-gray-800">About</span>
            </Link>
            {/* Add more links here */}
          </nav>
        </div>
      </div>
    </header>
  );
}
