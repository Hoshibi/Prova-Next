import React from "react";

import { Container } from "./styles";
import { IoIosArrowUp } from "react-icons/io";

const BtnFloating: React.FC = () => {

    const GoToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <Container onClick={GoToTop}>
            <IoIosArrowUp />
        </Container>
    );
}

export default BtnFloating;