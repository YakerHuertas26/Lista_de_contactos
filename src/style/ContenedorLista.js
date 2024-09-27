import styled from "styled-components";


const ContenedorLista = styled.div`
    margin-top: 40px;
    font-size: 1.6rem;
    font-weight: 400;
`;

const ContendorContacto=styled.div`
    padding: 10px 0;
    border-bottom: 1px solid rgba(0,0,0,.2);
`
const Nombre=styled.p`
    font-weight: bold;
`

const Correo=styled.p `
    font-style: italic;
    color: #6b6b6b;
    margin: 5px 0;
`

const Boton = styled.button`
    padding: 5px 20px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    margin-bottom: 10px;
    transition:  .3s ease all;
    outline: none;
    background:  #3d76e9;
    color: #fff;
    font-size: 12px;
    margin: 5px;
    
`

const Input = styled.input`
    padding: 10px;
    border:  2px solid rgba(0,0,0,.2);
    border-radius: 4px;
    width: 100%;
    margin-bottom: 10px;
    transition: .2s ease all ;
    outline: none;
    text-align: center;
    &:focus{
        border: 2px solid #3d76e9;
    }
`
export {ContenedorLista,ContendorContacto, Nombre,Correo,Boton,Input};