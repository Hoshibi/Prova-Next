import styled from 'styled-components';

export const Container = styled.button `
    height: 73px;
    width: 73px;
    background-color: #c68ee6;
    opacity: 0.4;
    border-width: 0px;
    border-radius: 36.5px;
    box-shadow: 5px 5px 10px #c4c4c4;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    position: fixed;
    right: 5rem;
    bottom: 3rem;

    & svg {
        height: 63px;
        width: 63px;
        color: #fff;
    }

    &:hover {
        background-color: #c68ee6;
        opacity: 0.7;
    }

    @media (min-width: 251px) and (max-width: 755px) {
        height: 63px;
        width: 63px;
        position: fixed;
        right: 2rem;
        bottom: 3rem;
    }
`;