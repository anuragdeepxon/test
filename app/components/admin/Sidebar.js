import React from 'react';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="bg-gray-800 text-white w-64 flex-shrink-0 p-4">
      <nav>
        <ul>
          <li>
            <Link href="/admin/dashboard">
              <span className="block py-2 px-4">Dashboard</span>
            </Link>
          </li>
          {/* Add more admin links here */}
        </ul>
      </nav>
    </aside>
  );
}
