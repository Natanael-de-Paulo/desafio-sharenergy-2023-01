import styled from 'styled-components';

export const ButtonIcon = styled.button`
  border: none;
  background: transparent;
  color: ${({theme}) => theme.colors.White };
  cursor: pointer;

  &:hover{
    filter: brightness(0.8);
  }

  @media (min-width: 601px) {
    display: none;
  }
`;