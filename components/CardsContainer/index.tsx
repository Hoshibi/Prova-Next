// import React, { useEffect} from "react";

import { Card } from "../index";
import { Container } from "./styles";
// import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
// import { getInfoCars } from '@store/cars-actions';

interface PropsType {
    infoCars: {}[]
}

const CardsContainer: React.FC<PropsType> = ({infoCars}) => {

    return (
        <Container>
            {infoCars.map((info:any,index:number) => {
                return <Card key={index} brand={info["brand"]} model={info["model"]} price={info["price"]} imagem={info["sideImage"]} id={info["id"]}/>
            })}
        </Container>
    );
}

export default CardsContainer;