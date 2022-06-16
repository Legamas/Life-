import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw ;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center ;
  width: 100%;

  div {
    width: 40%;
    display: flex;
    flex-direction: column ;
    align-items: center ;
    margin-top: 22px ;
  }

  a {
    width: 80%;
    background: #D9D9D9;
    border-radius: 40px ;
    padding: 1em;
    display: flex;
    justify-content: center ;

  }
`;
