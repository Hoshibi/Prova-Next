import React from "react";
import { IoCalendarSharp } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";


import { 
    Container, 
    TitleContainer, 
    BigTitle, 
    SmallTitle, 
    SearchContainer, 
    LocateInputContainer, 
    LocateInput, 
    TwoInputContainer,
    DateInputContainer, 
    DateInput, 
    BtnSearch, 
    BtnAuthContainer, 
    BtnSignUp, 
    BtnSignIn
} from "./styles";
import { useRouter } from "next/router";

const Navbar: React.FC = () => {
    const router = useRouter();

    return (
        <Container>
            <TitleContainer onClick={() => {router.push('/')}}>
                <BigTitle>EXOTIC</BigTitle>
                <SmallTitle>CARS</SmallTitle>
            </TitleContainer>
            <SearchContainer>
                <LocateInputContainer>
                    <FaMapMarkerAlt/>
                    <LocateInput type="text" placeholder="Localization"/>
                </LocateInputContainer>
                <TwoInputContainer>
                    <DateInputContainer>
                        <IoCalendarSharp height={18}/>
                        <DateInput type="date"/>
                    </DateInputContainer>
                    <DateInputContainer>
                        <IoCalendarSharp />
                        <DateInput type="date"/>
                    </DateInputContainer>
                </TwoInputContainer>
                <BtnSearch>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15.012" height="15.013" viewBox="0 0 15.012 15.013"><path d="M8.42,14.84a6.382,6.382,0,0,0,3.93-1.355l3.528,3.528,1.135-1.135L13.484,12.35A6.412,6.412,0,1,0,8.42,14.84ZM8.42,3.6A4.815,4.815,0,1,1,3.6,8.42,4.82,4.82,0,0,1,8.42,3.6Z" transform="translate(-2 -2)"/></svg>
                </BtnSearch>
            </SearchContainer>
            <BtnAuthContainer>
                <BtnSignUp>Sign Up</BtnSignUp>
                <BtnSignIn>Sign In</BtnSignIn>
            </BtnAuthContainer>
        </Container>
    );
}

export default Navbar;