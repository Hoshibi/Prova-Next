import styled from "styled-components";

export const Container = styled.div `
    margin: 102px 75px 57px 90px;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 1344px) {
        margin: 102px 1vw 57px 5vw;
    }

    @media (max-width: 1221px) {
        margin: 102px 10vw 57px 13vw;
    }

    @media (max-width: 939px) {
        margin: 140px 10vw 57px 13vw;
    }

    @media (max-width: 755px) {
        margin: 140px 5vw 57px 9vw;
    }

    @media (max-width:577px) {
        margin: 180px 5vw 57px 9vw;
    }

;`
