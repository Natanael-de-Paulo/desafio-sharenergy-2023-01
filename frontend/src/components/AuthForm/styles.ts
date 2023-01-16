import styled from 'styled-components';



export const Container = styled.section`
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em;
  
  h1{
    font: 2.5em ${({theme}) => theme.fonts.poppins};
    font-weight: bold;
    margin: 0 auto;
  }

  footer{
    margin-top: 1em;
  }
`;



export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2em;
  gap: 1em;

  label {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0.5em;
    gap: 0.2em;

    border: 1px solid #000;
    border-radius: 0.5em;

    & + label {
      margin-top: 0.5em;
    }
  }
`;


export const Button = styled.button`
  margin-top: 1em;
  padding: 1em;
  background: ${({theme}) => theme.colors.Ocean_Green };
  box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.6);
  border: none;

  &:hover{
    filter: brightness(0.9);
  }
`;