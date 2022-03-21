// import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div `
    height: 186px;
    width: 14.75rem;
    margin-right: 25px;
    margin-bottom: 32px;
    padding: 23px 17px 0px 17px;
    background-color: #F8F8FA;
    border-radius: 20px;
    font-family: 'Segoe UI';
    cursor: pointer;

    &:hover {
        background: linear-gradient(70deg, #ADADED, #D7C9F1);
        
        .bookNow {
            color: #fff;
        }

        .btnDots {
            color: #656469;
        }
    }

    @media (min-width: 1222px) and (max-width: 1344px) {
        width: 24vw;
    }

    @media (min-width: 755px) and (max-width: 1221px) {
        width: 28vw;
    }

    @media (min-width: 375px) and (max-width: 755px) {
        width: 71vw;
    }
`;

export const HeaderContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: start;
`;

export const TypeCar = styled.div `
    display: flex;
    flex-direction: column; 
    align-items: start;
`;

export const Brand = styled.h1 `
    font-size: 17px;
    font-weight: bold;
`;

export const Model = styled.p `
    font-size: 17px;
    font-weight: 300;
`;

export const BtnOptions = styled.button `
    background-color: transparent;
    border-width: 0px;
    z-index: 1;
    cursor: pointer;

    & svg {
        font-size: 28px;
        color: #C8C8CA;
        opacity: 64%;
    }

    &:hover{
        opacity: 0.7;   
    }
`;

export const ImageContainer = styled.div `
    margin-top: 10px;
    margin-bottom: 10px;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ImageCar = styled.img `
    width: 90%;
`;

export const FooterContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: end;
`;

export const BtnBookNow = styled.p `
    font-weight: 600;
    color: #F8F8FA;
    font-size: 16px;
    opacity: 0.9;
`;

export const PriceContainer = styled.div `
    display: flex;
    flex-direction: row;
    height: 30px;
`;

export const Dollar = styled.p `
    display: flex;
    align-self: start;
    font-size: 14px;
    font-weight: bold;
`;

export const Price = styled.p `
    display: flex;
    align-self: center;
    font-size: 24px;
    font-weight: bold;
`;

export const PriceDay = styled.p `
    display: flex;
    align-self: end;
    font-size: 14px;
    font-weight: 400;
`;