import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw ;
    height: 100vh ;
    display: flex ;
    flex-direction: column ;

    h1 {
        margin: 2em auto 20px;
    }

    h2 {
        margin: 40px auto 12px;
    }
  
    div {
        width: 100% ;
        display: flex;

       div {
        width: 50% ;
        display: flex ;
        align-items: center ;
        flex-direction: column ;

        img {
            width: 35% ;
            margin-top: 100px ;
        }
       }
    }

    span {
        color: #7F31FF;
        font-size: 1.7em ;
        font-weight: bold ;
        margin: 18px auto ;
    }
`;
