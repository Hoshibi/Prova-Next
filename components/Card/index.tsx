import React from "react";
import { useRouter } from 'next/router';

import { BsThreeDots } from "react-icons/bs";
import { Container, Brand, HeaderContainer, TypeCar, Model, BtnOptions, ImageContainer, ImageCar , FooterContainer, BtnBookNow, PriceContainer, Dollar, Price, PriceDay  } from "./styles";

interface PropsType {
    brand: string,
    model: string,
    price: number,
    imagem: string,
    id: number
}

const Card: React.FC<PropsType> = ({brand, model, price, imagem, id}) => {
    const router = useRouter();

    const selectCar = (id: number) => {
        router.push({
          pathname: '/detail/[id]',
          query: { id: id }
        });
    };
    
    return (
            <Container onClick={() => {selectCar(id)}}>
                <HeaderContainer>
                    <TypeCar>
                        <Brand>{brand}</Brand>
                        <Model>{model.toUpperCase()}</Model>
                    </TypeCar>
                    <BtnOptions onClick={
                        (event) => {
                            alert("Clickou no Options");
                            event.stopPropagation();
                        }
                    }>
                        <BsThreeDots className="btnDots"/>
                    </BtnOptions>
                </HeaderContainer>
                <ImageContainer>
                    <ImageCar src={imagem}/>
                </ImageContainer>
                <FooterContainer>
                    <BtnBookNow className="bookNow">Book Now</BtnBookNow>
                    <PriceContainer>
                        <Dollar>$</Dollar>
                        <Price>{price}</Price>
                        <PriceDay>/day</PriceDay>
                    </PriceContainer>
                </FooterContainer>
            </Container>
    );
}

export default Card;