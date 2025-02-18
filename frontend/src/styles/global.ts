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
 
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
  -webkit-text-fill-color: #000;
  /* -webkit-box-shadow: 0 0 0px 1000px #1b1b6c inset; */
  background-color: #1b1b6c;
  transition: background-color 5000s ease-in-out 0s;
  }


  html,
  body {
    width: 100%;
    height: 100vh;
    font-family: 'Roboto', Helvetica, sans-serif;
    background: ${({theme}) => theme.colors.Catskill_White };
  }

`;