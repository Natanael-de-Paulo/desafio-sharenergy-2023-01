import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1120px;
  width: 100%;
  margin-top: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2em;
  padding: 2em;

  @media screen {
    padding: 1em;
  }


  article{
    background: ${({theme}) => theme.colors.White};
    max-width: 18em;
    width: 100%;
    height: 20em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 2em;
    gap: 1em;
    padding: 1em;
    border-radius: 20 10px ;
 
    img{
      border-radius: 30% 70% 30% 70% / 70% 30% 70% 30%;
    }

    ul{
      width: 100%;
      display: flex;
      flex-direction: column;

      li{
        display: flex;
        align-items: center;
        gap: 0.2em;
        

        & + li {
          margin-top: 0.5em;
        }

        span{
          flex: 1;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
`;