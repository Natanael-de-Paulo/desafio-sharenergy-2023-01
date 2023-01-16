import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle` 

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a{
    text-decoration: none;
  }

  ul,
  li {
    list-style: none;
  }

  input {
    outline: none;
  }
 
  html,
  body {
    width: 100%;
    height: 100vh;
    font-family: 'Roboto', Helvetica, sans-serif;
  }

`;