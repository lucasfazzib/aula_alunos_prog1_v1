import styled from 'styled-components';

export const input = styled.input`
    border: 1px solid #ddd;
    height: 1.5rem;
    padding: 0 .5rem;
    border-radius: .25rem 0 0 .25rem;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;

export const Button = styled.button`
    height; 2rem;
    border: 3.5px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;
    position: relative;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;


export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-itens: center;
    justify-content: center;
`