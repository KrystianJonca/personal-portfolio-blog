import css from 'styled-jsx/css';

export default css.global`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');
  :root {
    --primary-dark: #202023;
    --primary-light: #ecf0f1;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: var(--primary-dark);
    color: var(--primary-light);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
