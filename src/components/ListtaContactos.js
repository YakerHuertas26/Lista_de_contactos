import { useState,useEffect } from "react";
import {ContenedorLista} from "../style/ContenedorLista";
import Contacto from "./Contacto";
import dataBase from "../firebase/faribaseConfig";
import { collection, onSnapshot } from "firebase/firestore"; 


const ListaContactos = () => {
    const [lista, setLista]=useState([])
    useEffect(()=>{
        onSnapshot(collection(dataBase,'usuarios'),
        (datos)=>{
        //    accedo a la información de contactos
            const listaBaseDatos= datos.docs.map((element)=>{
                return {...element.data(),id:element.id};
            })
            setLista(listaBaseDatos)

        })
        
    },[])
    return ( 
        
        lista.length>0 &&
        <ContenedorLista>
            <h3>Contactos dispoibles</h3>
            {lista.map((element,id)=>(
                    <Contacto 
                    key={id}
                    id={element.id}
                    nombre={element.nombre}
                    correo={element.correo}
                    /> 
            ))}

        </ContenedorLista>
    );
}

export default ListaContactos;