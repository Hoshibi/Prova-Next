import { GetStaticPaths, GetStaticProps } from "next";
import path from "path";
import fs from 'fs/promises';

import { DetailComponent, Navbar } from "../../components/index"

export default function Detail({ car }: any) {
  
    return (
        <>
            <Navbar />
            <DetailComponent dataCar={car}/>
        </>
    );
  }

  async function getData() {
    const filePath = path.join(process.cwd(), 'public', 'cars.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData.toString());
  
    return data;
  }
  
  export const getStaticProps: GetStaticProps = async context => {
    const { params } = context;
  
    const carId = params?.id;
    const data = await getData();
    const car = data.cars.find((car: any) => car.id == carId);
  
    if (!car) {
      return { notFound: true };
    }
  
    return {
      props: {
        car
      }
    };
  };
  
  export const getStaticPaths: GetStaticPaths = async () => {
    const data = await getData();
  
    const ids = data.cars.map((car: any) => parseInt(car.id));
    const pathsWithParams = ids.map((id: number) => ({ params: { id: id.toString() } }));
  
    return {
      paths: pathsWithParams,
      fallback: true
    };
  };