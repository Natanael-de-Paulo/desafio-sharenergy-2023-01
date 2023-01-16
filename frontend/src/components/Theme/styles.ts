import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: ${({theme}) => theme.colors.Catskill_White };


  div.container-header {
    width: 100%;
    background: ${({theme}) => theme.colors.Ocean_Green};

    header{
      max-width: 1120px;
      margin: 0 auto;
      padding: 1em;
      display: flex;
      justify-content: space-between;
      gap: 2em;

      label {
        display: flex;
        align-items: center;
        padding: 0 0.5em;
        gap: 0.5em;
        background: ${({theme}) => theme.colors.Catskill_White } ;
        border-radius: 1em;
      }

      nav{  
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
        
        ul{
          display: flex;
          gap: 2em;
        }
      }
    }
  }

`;