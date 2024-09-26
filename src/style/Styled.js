import styled from "styled-components";

const ContenedorStyled = styled.div`
    margin: 40px;
    width: 90%;
    max-width: 400px;
    background: #fff;
    padding: 40px;
    border-radius: 5px;
    text-align: center;

`;

const TituloStyled=styled.h2`
    margin-bottom: 10px;

`;
const InputStyled=styled.input`
    padding: 10px;
    border: 2px solid rgba(0,0,0,.2);
    border-radius: 4px;
    width: 100%;
    margin-bottom: 10px;
    transition: .2 ease all;
    outline: none;
    text-align: center;
    &:focus{
        border: 2px solid #2d76e9;
    }
`;

const BotonStyled=styled.button`
    padding: 10px 30px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    transition: .3 ease all;
    outline: none;
    background: #c4c4c4;
    color: #fff;
    font-size: 1.2rem;
    &:hover{
        background: #3d76e9;
    }
`;

export {ContenedorStyled,TituloStyled,InputStyled,BotonStyled};