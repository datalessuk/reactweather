//import '../styles/search.scss'
import styled from "styled-components";
import seatchIcon from '../img/icons/search-solid.svg'

const SearchDiv = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 50px;
    `;
    const SearchInput = styled.input`
        background-color: rgba(255,255,255,0.5);
        border-radius: 20px;
        border: none;
        padding: 20px 15px 15px 20px;
        height: 25px;
        width: auto;
        outline: none;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        width: 350px;
        font-family: 'Montserrat', sans-serif;
        text-align: center;
        color:white;

    /*Search Icon on left side */
        background-image: url(${seatchIcon});
        background-repeat: no-repeat;
        background-position: 4px 10px;
        background-size: 15px 15px;
        
    `;

function Search(props){
    return(
        <div>
            <SearchDiv>
            <SearchInput placeholder="Enter location" type="text" onChange={props.handleInput} onKeyPress={props.handleSearch}></SearchInput>
            </SearchDiv>
        </div>
    )
}
export default Search;