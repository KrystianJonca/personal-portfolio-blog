import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import globalStyles from '../../styles/global';

interface ILayoutProps {
  readonly children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />

      <style jsx global>
        {globalStyles}
      </style>
    </>
  );
};

export default Layout;
