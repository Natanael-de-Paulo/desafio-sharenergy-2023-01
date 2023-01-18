import styled from 'styled-components';

export const NavContainer = styled.nav`
  max-width: 1120px;
  margin: 0 auto;
  flex: 1;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  a{
    color: ${({theme}) => theme.colors.Catskill_White };
  }

  a.logo {
    display: flex;
    align-items: center;
    gap: 0.4em;

    &:hover {
      span{
        display: inherit;
      }
    }
  }
  
  ul.itemsDesktop{
    display: flex;
    gap: 2em;


    @media (max-width: 600px) {
      display: none;
    }
  }
`;



