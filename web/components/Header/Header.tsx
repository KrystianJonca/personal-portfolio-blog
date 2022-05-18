import React from 'react';
import Model from '../Model/Model';

const Header: React.FC = () => {
  return (
    <>
      <header className="header">
        {/* Three.js */}
        <Model />
        <div className="header-text">
          <h1 className="header-text_title">
            <span className="header-text_greetings">Hello, I am</span>{' '}
            <span className="header-text_name">Krystian Jonca</span>
          </h1>
          <p className="header-text_bottom">Professional Web Developer</p>
          <p className="header-text_about_me">
            Eighteen years old passionate and enthusiastic programmer, based in
            Poland, who has worked with multiple modern front-end as well as
            full-stack technologies. Writing quality JavaScript code for 4+
            years, striving to improve everyday.
          </p>
        </div>
      </header>
      <style jsx>
        {`
          .header {
            display: flex;
            justify-content: center:
            align-items: center;
            flex-direction: column;
            max-width: 980px
            margin: 2rem auto;
            padding: 0 2rem;
          }
          .header-text {
            text-align: left;
            margin: 1rem auto;
            max-width: 540px;
          }
          .header-text_greetings{
            padding-bottom: 0.1rem;
            border-bottom: 4px solid;
          }
          .header-text_title {
            font-weight: 300;
            font-size: 2rem;
            margin-bottom: 0;
          }
          .header-text_bottom {
            font-weight: 300;
            margin-top: 0.2rem;
            text-transform: uppercase;
            letter-spacing: .2em 
          }
          .header-text_name{
            font-weight: 500;
            display:block;
            font-size: 4rem;
            margin-top: 0.2rem;
          }
          .header-text_about_me{
            font-size: 1.2rem;
            text-align: justify;
            text-justify: inter-word;
          }
        `}
      </style>
    </>
  );
};

export default Header;
