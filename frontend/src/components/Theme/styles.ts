import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  
  header{
    width: 100%;
    background: ${({theme}) => theme.colors.Ocean_Green};
    padding: 1em;
    display: flex;
    justify-content: space-between;
    gap: 2em;
  }
`;