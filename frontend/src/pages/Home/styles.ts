import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  flex: 1;
  max-width: 1120px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1em;

  

  label {
    margin: 0 auto;
    margin-top: 2em;
    max-width: 600px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0.5em;
    gap: 0.5em;
    background: ${({theme}) => theme.colors.White } ;
    border-radius: 1em;
    border: 1px solid ${({theme}) => theme.colors.Ocean_Green};
  }

 
`;