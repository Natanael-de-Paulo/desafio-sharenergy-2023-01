import styled from 'styled-components';

export const ContainerMenuMobile = styled.div`
  position: absolute;
  z-index: 100;
  inset: 0;
  background: ${({theme}) => theme.colors.Ocean_Green};
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    position: absolute;
    right: 1em;
    top: 1em;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    font-size: 1.5em;
  }
`;