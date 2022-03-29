import React, { useState } from "react";

import { 
    Container, 
    DetailContainer, 
    BrandLogo, 
    TextContainer, 
    TitleContainer, 
    Brand, 
    Model, 
    Price, 
    CenterContainer, 
    BtnBack, 
    CarContainer, 
    CarImage, 
    TypeCar, 
    Number, 
    Color, 
    BtnBookNowContainer, 
    BtnBookNow,
    CarrosselContainer,
    BtnArrowLeft, 
    BtnArrowRight, 
    Carrossel, 
    AreaContainer,
    GrayArea,
    ImageGrayArea,
    PurpleArea,
    ImagePurpleArea
} from "./styles";

import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";
import { useRouter } from "next/router";

interface PropsType {
    dataCar: {
        brand: string,
        id: number,
        logo: string,
        model: string,
        price: number,
        sideImage: string,
        types:any
    }
}

const DetailComponent: React.FC<PropsType> = ({dataCar}) => {
    const router = useRouter();
    const [numLeft, setNumLeft] = useState(dataCar.types.length-1);
    const [numCenter, setNumCenter] = useState(0);
    const [numRight, setNumRight] = useState(1);
    
    const returnToHome = () => {
        router.push('/');
    };

    function btnRightHandler() {
        numLeft === 0 ? setNumLeft(dataCar.types.length-1) : setNumLeft(numLeft-1);
        numCenter === 0 ? setNumCenter(dataCar.types.length-1) : setNumCenter(numCenter-1);
        numRight === 0 ? setNumRight(dataCar.types.length-1) : setNumRight(numRight-1);
    }

    function btnLeftHandler() {
        numLeft === (dataCar.types.length-1) ? setNumLeft(0) : setNumLeft(numLeft+1);
        numCenter === (dataCar.types.length-1) ? setNumCenter(0) : setNumCenter(numCenter+1);
        numRight === (dataCar.types.length-1) ? setNumRight(0) : setNumRight(numRight+1);
    }

    return (
        <Container>
            <DetailContainer>
                <BrandLogo src={dataCar.logo} />
                <TextContainer>
                    <TitleContainer>
                        <Brand>{dataCar.brand}</Brand>
                        <Model>{dataCar.model}</Model>
                    </TitleContainer>
                    <Price>${dataCar.price}/day</Price>
                </TextContainer>
            </DetailContainer>
            <CenterContainer>
                <BtnBack onClick={returnToHome}><VscArrowLeft />Back to calatog</BtnBack>
                <CarContainer>
                    <CarImage src={dataCar.types[numCenter].imgCar}/>
                    <TypeCar>
                        { dataCar.types[numCenter].index < 10 && <Number>{"0"+dataCar.types[numCenter].index}</Number> }
                        { dataCar.types[numCenter].index >= 10 && <Number>{dataCar.types[numCenter].index}</Number> }
                        <Color>{dataCar.types[numCenter].color}</Color>
                    </TypeCar>
                </CarContainer>
            </CenterContainer>
            <BtnBookNowContainer><BtnBookNow>Book Now<VscArrowRight /></BtnBookNow></BtnBookNowContainer>
            <CarrosselContainer >
                <BtnArrowLeft onClick={btnRightHandler}><VscArrowLeft /></BtnArrowLeft>
                <Carrossel>
                    { dataCar.types.length > 2 && <AreaContainer onClick={btnRightHandler}><GrayArea><ImageGrayArea src={dataCar.types[numLeft].imgCar} alt="02"/></GrayArea></AreaContainer>}
                    <PurpleArea><ImagePurpleArea src={dataCar.types[numCenter].imgCar} alt="01"/></PurpleArea>
                    { dataCar.types.length > 1 && <AreaContainer onClick={btnLeftHandler}><GrayArea><ImageGrayArea src={dataCar.types[numRight].imgCar} alt="03"/></GrayArea></AreaContainer>}
                </Carrossel>
                <BtnArrowRight onClick={btnLeftHandler}><VscArrowRight /></BtnArrowRight>
            </CarrosselContainer> 
        </Container>
    );
}

export default DetailComponent;