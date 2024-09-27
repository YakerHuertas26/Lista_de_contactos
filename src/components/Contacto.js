import { useState } from "react";
import dataBase from "../firebase/faribaseConfig";
import { ContendorContacto,Nombre,Boton,Correo,Input } from "../style/ContenedorLista";
import { doc,updateDoc,deleteDoc } from "firebase/firestore";


const Contacto = ({nombre,correo,id}) => {
    const [btneditar,setbtnEditar]=useState(false)
    const [nuevoNombre,setNuevoNombre]=useState(nombre);
    const [nuevoCorreo,setNuevoCorreo]=useState(correo)

    const editarContacto=()=>{
        setbtnEditar(true)
    }

    const obtenerNuevoNombre=(e)=>{
        setNuevoNombre(e.target.value)
    }

    const obtenerNuevoCorreo=(e)=>{
        setNuevoCorreo(e.target.value)
    }
    
    const Guardar= async(e)=>{
        e.preventDefault();
        try {
            await updateDoc(doc(dataBase,"usuarios",id),{
                nombre:nuevoNombre,
                correo:nuevoCorreo
            })
            setbtnEditar(false)
            
        } catch (error) {
            console.log('eror: '+error);
            
        }
    }

    const Borrar= async (id)=>{
        try {
            await deleteDoc(doc(dataBase,'usuarios',id))
            setbtnEditar(false)
        } catch (error) {
            console.log(error);
            
        }
    }
    return ( 
            
        <ContendorContacto>
            {btneditar===false ?
            <>
                <Nombre>{nombre}</Nombre>
                <Correo>{correo}</Correo>
                <Boton onClick={editarContacto}>Editar</Boton>
                <Boton onClick={()=>Borrar(id)} >Eliminar</Boton>
            </>
            :
            
            <form action="" onSubmit={Guardar}>
                <Input
                type="text"
                value={nuevoNombre}
                onChange={obtenerNuevoNombre}
                />

                <Input
                type="email"
                value={nuevoCorreo}
                onChange={obtenerNuevoCorreo}/>
                <Boton> Guardar </Boton>

            </form>
            
            }
            
        </ContendorContacto>
    );
}

export default Contacto;