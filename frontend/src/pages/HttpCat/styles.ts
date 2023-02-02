import styled from "styled-components";


export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;

  img{
    max-width: 30em;
    width: 100%;
    height: 25em;
  }
`

export const WrapperInput = styled.div`
  display: flex;
  align-items: center;
  max-width: 20em;
  width: 100%;
  justify-content: space-between;
  gap: 1.5em;

  input, button{
    width: 100%;
    height: 2em;
  }


`