import React from 'react';

interface ISocialLinkProps {
  href: string;
  text: string;
  readonly icon: React.ReactNode;
}

const SocialLink: React.FC<ISocialLinkProps> = ({ href, text, icon }) => {
  return (
    <>
      <a href={href} target="_blank" rel="noreferrer" className="link">
        <span className="content">
          {icon} <span className="text">{text}</span>
        </span>
      </a>
      <style jsx>
        {`
          .link {
            display: inline-block;
            margin: 0.2rem;
            padding: 0.6rem 1rem;
            border-radius: 10px;
            transition: all 0.2s ease-in-out;
            font-size: 1.2rem;
          }
          .content {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .text {
            padding: 0 0.5rem;
          }
          .link:hover {
            background-color: rgba(255, 255, 255, 0.1);
          }
        `}
      </style>
    </>
  );
};

export default SocialLink;
