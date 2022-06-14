import styled from 'styled-components';

export const Container = styled.button`
    padding: 0.5em 3.4em;
    background: ${(props) => props.outline ? "#fff" : "#7F31FF"};
    font-size: 16pt;
    border: 3px solid #7F31FF;
    border-radius: 6px;
    color: ${(props) => props.outline ? "#7F31FF" : "#fff"};
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) ;

    &:hover {
        cursor: pointer;
        background: ${(props) => props.outline ? "#7F31FF" : "#fff"};
        color: ${(props) => props.outline ? "#fff" : "#7F31FF"};
    }
`;
