//import '../styles/welcome.css'
import styled from "styled-components";
function Welcome(){

    const Title = styled.h1`
    font-family: 'Montserrat', sans-serif;
    color:white;
    letter-spacing:3px;
    margin-top:30px;
    `;

    const TitleDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    `;

   

    return(
        <div>
        <TitleDiv>
            <Title>
                Weather App
            </Title>
            </TitleDiv>
            </div>
    )
}
export default Welcome;