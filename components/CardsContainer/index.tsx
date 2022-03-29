import { Card } from "../index";
import { Container } from "./styles";

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