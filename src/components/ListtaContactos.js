import { useState } from "react";
import dataBase from "../firebase/faribaseConfig";
import ContenedorLista from "../style/ContenedorLista";


const ListaContactos = () => {
    const [lista, setLista]=useState([
        {id:1,nombre:'juan',correo:'juan@gamil.com'}
    ])
    
    return ( 
        lista.length>0 &&
        <ContenedorLista>
            <h3>Contactos dispoibles</h3>
            {lista.map((element,id)=>{
            return(
                <div>
                    <p key={id}>{element.nombre}</p>
                    <p key={id}>{element.correo}</p>
                </div>
            )
            })}
        </ContenedorLista>
    );
}

export default ListaContactos;