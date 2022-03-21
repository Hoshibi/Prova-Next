import styled from "styled-components";

export const Container = styled.div `
    background-color: #FBFBFB;
    padding: 134px 6vw 30px 6vw;
    font-family: Segoe UI;

    @media (max-width: 939px) {
        padding: 164px 6vw 30px 6vw;
    }

    @media (max-width: 755px) {
        padding: 194px 5vw 57px 9vw;
    }

    @media (max-width:577px) {
        padding: 210px 5vw 57px 9vw;
    }
`;

export const DetailContainer = styled.div `
    display: flex;
    flex-direction: row;
`;

export const BrandLogo = styled.img `
    height: 9.25vw;
    max-width: 190px;
    margin-right: 2.96vw;
`;

export const TextContainer = styled.div `
    display: flex;
    flex-direction: column;
`;

export const TitleContainer = styled.div `
    display: flex;
    flex-direction: row;
    font-weight: bold;
`;

export const Brand = styled.h1 `
    margin-right: 10px;
    font-size: 3.7vw;

    @media (max-width: 1171px) {
        font-size: 4.0vw;
    }
    
    @media (max-width: 616px) {
        font-size: 6.0vw;
    }
    
`;

export const Model = styled.h1 `
    font-size: 3.7vw;

    @media (max-width: 1171px) {
        font-size: 4.0vw;
    }
    
    @media (max-width: 616px) {
        font-size: 6.0vw;
    }
`;

export const Price = styled.h2 `
    font-size: 2.96vw;
    font-weight: 300;

    @media (max-width: 1171px) {
        font-size: 2.99vw;
    }
    
    @media (max-width: 616px) {
        font-size: 5.26vw;
    }
`;

export const CenterContainer = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 804px) {
        flex-direction: normal;
        align-items: start;
        height: 60vw;
    }
`;

export const BtnBack = styled.button `
    font-family: Segoe UI;
    font-weight: 300;
    font-size:16px;
    width: 177px;
    height: 50px;
    border: 1px solid #313136;
    border-radius: 25px;
    background-color: transparent;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    & svg {
        font-size: 25px;
        margin-right: 12px;
    }

    @media (max-width: 804px) {
        position: absolute;
        align-self: end;
        margin-top: 30px;
    }

    @media (max-width: 418px){
        font-size: 15px;
        width: 157px;
        height: 50px;
    }

`;

export const CarContainer = styled.div `
    flex: 1;
    display: flex;
    justify-content: center;
    position: relative;
    padding-bottom: 45px;
`;

export const CarImage = styled.img `
    width: 100%;

    @media (min-width: 1100px) {
    height: 400px;
    width: auto;
  }
`;

export const TypeCar = styled.div `
    position: absolute;
    right: 0;
    top: -2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Number = styled.h2 `
    font-size:3.7vw;
    font-weight: bold;

    @media (max-width: 1171px) {
        font-size: 4.0vw;
    }
    
    @media (max-width: 616px) {
        font-size: 6.0vw;
    }
`;

export const Color = styled.h2 `
    font-size: 2.2vw;
    font-weight: 300;

    @media (max-width: 1171px) {
        font-size: 2.5vw;
    }
    
    @media (max-width: 616px) {
        font-size: 4.52vw;
    }
`;

export const BtnBookNowContainer = styled.div `
    display: flex;
    justify-content: center;

    @media (max-width: 804px) {
        position: relative;
        justify-content: end;
        right: 0;
        top: -50px;
    }
`;

export const BtnBookNow = styled.button `
    font-family: Segoe UI;
    font-size: 16px;
    width: 177px;
    height: 50px;
    background-color: #313136;
    border-width: 0;
    border-radius: 25px;
    box-shadow: 0px 5px 20px #0000001A;
    font-weight: 300;
    color: #FFFFFF;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    & svg {
        font-size: 25px;
        margin-left: 12px;
    }

    @media (max-width: 418px){
        font-size: 15px;
        width: 157px;
        height: 50px;
    }
`;

export const CarrosselContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;

    @media (max-width: 681px){
        align-items: end;
        height: 181px;
    }

`;

export const BtnArrowLeft = styled.button `
    height: 42px;
    width: 42px;
    border-radius: 21px;
    border-width: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #313136;
    cursor: pointer;

    & svg{
        font-size: 24px;
        color: #fff;
    }

    @media (max-width: 681px){
        position: absolute;
    }
`;

export const BtnArrowRight = styled.button `
    height: 42px;
    width: 42px;
    border-radius: 21px;
    border-width: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #313136;
    cursor: pointer;

    & svg{
        font-size: 24px;
        color: #fff;
    }

    @media (max-width: 681px){
        right: 5vw;
        position: absolute;
    }
`;

export const Carrossel = styled.div `
    margin-right: 5vw;
    display: flex;
    flex-direction: row;

    @media (max-width: 681px){
        margin-right: 0;
        width: 100%;
        justify-content: center;
        align-self: start;
    }
`;

export const AreaContainer = styled.div `
    cursor: pointer;
    align-self: end;
    margin-bottom: 2.5vw;
`;

export const GrayArea = styled.div `
    width: 16.5vw;
    height: 12.5vw;
    background: linear-gradient(70deg, #B5C0CA, #D2D2D2);
    border-radius: 10px;
    display:flex;
    align-items: center;

    @media (max-width: 681px){
        width: 19.5vw;
        height: 15.5vw;
    }
`;

export const ImageGrayArea = styled.img `

    height: 72%;
    min-width: 22vw;

    @media (max-width: 681px){
        min-width: 25vw;
    }
`;

export const PurpleArea = styled.div `
    margin-right: 6vw;
    margin-left: 8vw;
    margin-top: 44px;
    background: linear-gradient(70deg, #B5B8F1, #e1e2f5);
    height: 17vw;
    width: 22vw;
    border-radius: 10px;
    display: flex;
    
    & Image {
        width: 27vw;
        align-self: center;
    }

    @media (max-width: 681px){
        width: 25vw;
        height: 20vw;

        & Image {
            min-width: 30vw;
        }
    }
`;

export const ImagePurpleArea = styled.img `
    width: 27vw;
    align-self: center;

    @media (max-width: 681px){
        min-width: 30vw;
    }
`;