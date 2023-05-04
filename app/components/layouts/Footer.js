// components/layout/Footer.js

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <footer className="footer footer-center mt-5 p-10 bg-black shadow-2xl text-white font-extrabo">
        <div className="grid grid-flow-col gap-4">
          <Link href="/about">
            <span className="link link-hover text-black-500 font-bold">
              About Site
            </span>
          </Link>

          <Link href="/privacy">
            <span className="link link-hover text-black-500 font-bold">
              Privacy Policy
            </span>
          </Link>

          <Link href="/dmca">
            <span className="link link-hover text-black-500 font-bold">DMCA</span>
          </Link>

          <Link href="/contact">
            <span className="link link-hover text-black-500 font-bold">
              Contact
            </span>
          </Link>
        </div>
        <br></br>
        <div>
          <div>
            Copyright &copy; {`${new Date().getFullYear()}`}
            <Link href="/">
              <span className="text-black-500 font-bold link link-hover mx-2">
                KabHai
              </span>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
