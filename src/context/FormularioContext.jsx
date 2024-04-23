import { createContext, useState, useEffect, useCallback } from "react";

const FormularioContext = createContext()

const FormularioProvider = ({children}) => {

    // Propiedades Reunion
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [comentarios, setComentarios] = useState('')
    const [error, setError] = useState('')

    // Objeto Reunion -> Propiedades Reunion
    const [reunion, setReunion] = useState({})

    // Lista de Objetos -> Reunion -> Propiedades Reunion
    const [listaReuniones, setListaReuniones] = useState([])

    // Eliminar una reunion de la lista
    const eliminarReunion = (id) => {
        const listaReunionesActualizado = listaReuniones.filter(reunion => reunion.id !== id)
        setListaReuniones(listaReunionesActualizado)
    }

    // Cargando Local Storage
    useEffect(()=> {
        const obtenerLS = () => {
            const listaReunionesLS = JSON.parse(localStorage.getItem('ListaReuniones')) ?? [];
            setListaReuniones(listaReunionesLS)
            console.log(listaReunionesLS)
          }
          obtenerLS();

    }, [])

    useEffect(() => {
        localStorage.setItem('ListaReuniones', JSON.stringify( listaReuniones ));
    }, [listaReuniones])

    return(
        <FormularioContext.Provider value={{
            // Propiedades Reunion
            nombre,
            setNombre,
            email,
            setEmail,
            fecha,
            setFecha,
            comentarios,
            setComentarios,
            error,
            setError,

            // Objeto Reunion
            reunion,
            setReunion,

            // Lista Reuniones
            listaReuniones,
            setListaReuniones,
            
            // Eliminar Reunion
            eliminarReunion
        }}>
            {children}
        </FormularioContext.Provider>
    )
}


export {
    FormularioProvider
}

export default FormularioContext
