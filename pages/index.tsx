import { GetStaticProps } from "next";
import path from 'path';
import fs from 'fs/promises';

import { Navbar, CardsContainer, BtnFloating } from "@components/index";


interface PropsType {
  cars: {}[]
}
export default function Home({ cars }: PropsType) {
    return (
        <>
            <BtnFloating />
            <Navbar />
            <CardsContainer infoCars={cars}/>
        </>
    );
  }

export const getStaticProps: GetStaticProps = async () => {
    const filePath = path.join(process.cwd(), 'public', 'cars.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData.toString());
  
    return {
      props: {
        cars: data.cars
      }
    };
};