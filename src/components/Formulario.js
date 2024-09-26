import { useState} from "react";
import { InputStyled, BotonStyled } from "../style/Styled";
import dataBase from "../firebase/faribaseConfig";
import { collection, addDoc } from "firebase/firestore"; 

const Formulario = () => {
    const [nombre,setNombre]=useState("");
    const [correo,setCorreo]=useState("");

    const obtenerNombre=(e)=>{
        setNombre(e.target.value) 
    };
    

    const obtenerCorreo= (e)=>{
        setCorreo(e.target.value);

    }
    const agregar= async (e)=>{
        e.preventDefault();
        try {
            await addDoc(collection(dataBase,"usuarios"),{
                nombre:nombre,
                correo:correo
            })
        } catch (error) {
            console.log(error);
        }
    }
    
    
    return ( 
        <form action="" onSubmit={agregar} >
            <InputStyled
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={nombre}
                onChange={obtenerNombre}
                />

                <InputStyled
                type="email"
                name="correo"
                placeholder="Correo eléctrónico"
                value={correo}
                onChange={obtenerCorreo}
                />
            <BotonStyled type="submit">AGREGAR</BotonStyled>
        </form>
    );
}
 
export default Formulario;