import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-fuchsia-800 text-white py-4 mt-8 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Gifthub. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
