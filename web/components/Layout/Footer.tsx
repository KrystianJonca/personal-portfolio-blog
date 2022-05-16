import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <p>Krystian Jonca © 2022</p>
      <style jsx>
        {`
          p {
            text-align: center;
            font-weight: 300;
            margin: 2rem;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
