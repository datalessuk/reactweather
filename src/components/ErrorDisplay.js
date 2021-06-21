import styled from "styled-components";
import Fade from '../components/FadeIn'




const HeadingDiv = styled.div`
    font-family: 'Montserrat', sans-serif;
    display:flex;
    align-items: center;
    justify-content: center;
    color:white;
    max-width:350px;
    margin:0 auto;
    visibility: hidden;
    background-color: rgba(255,255,255,0.5);
    border-radius:20px;
    padding:10px;
    margin-top:100px;
    font-size:0.4rem;
    font-weight: lighter;
    animation: ${Fade} 0.5s 0.7s forwards;

`;



function ErrorDisplay(){
    return(
        <div>
            <HeadingDiv>
                <h1>
                    Sorry city not found, please try again
                </h1>
            </HeadingDiv>
        </div>
    )
}
export default ErrorDisplay;