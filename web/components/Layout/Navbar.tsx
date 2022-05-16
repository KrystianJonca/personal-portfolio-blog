import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="navigation">
        <div className="navigation-logo">
          <Link href="/">
            <Image
              src="/Logo.webp"
              width="42"
              height="42"
              alt="Krystian's Logo"
            />
          </Link>
        </div>
        <div className="navigation-links">
          <Link href="/portfolio">
            <a className="navigation-link">Portfolio</a>
          </Link>
          <Link href="/blog">
            <a className="navigation-link">Blog</a>
          </Link>
          <a
            href="https://github.com/KrystianJonca"
            rel="noreferrer"
            target="_blank"
            className="navigation-icon"
          >
            <FaGithub />
          </a>
        </div>
      </nav>

      <style jsx>{`
        .navigation {
          margin: 1rem auto;
          padding: 0 1.2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 980px;
        }
        .navigation-logo {
          cursor: pointer;
        }
        .navigation-links {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .navigation-link {
          font-size: 1.2rem;
          margin: 0 0.5rem;
          transition: all ease 0.55s;
          transition: all 0.2s ease-in-out;
          border-bottom: 1px solid;
          border-color: var(--primary-dark);
        }
        .navigation-link:hover {
          border-color: var(--primary-light);
        }
        .navigation-icon {
          display: grid;
          place-items: center;
          font-size: 1.5rem;
          margin: 0 0.5rem;
          transition: all 0.2s ease-in-out;
        }
        .navigation-icon:hover {
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
};

export default Navbar;
