import styled from 'styled-components';

export const Container = styled.div`
  display: flex ;
  width: 100vw;
  height: 100vh ;
`;

export const FormWrapper = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
    flex-direction: column ;
    justify-content: center ;
    align-items: center ;

    img {
        width: 20%;
    }

    form {
        display:  flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100% ;

        input {
                border: 3px #7F31FF solid ;
                margin: 12px auto ;
                border-radius: 6px;
                width: 40% ;
                height: 3.2em ;
                padding: 0em 0.4em;
        }
    }

    div {
        margin-top: 2em ;
        display: flex ;
        flex-direction: column;
        align-items: center ;

        h3 {
            margin-bottom: 12px ;
        }
    }
`
