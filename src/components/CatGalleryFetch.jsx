import { useEffect } from "react";
import { useState } from "react"

export const CatGalleryFetch = () => {

    // estado para almecenar imagenes de gatos con un array vacio.
    const [cats,setCats] = useState([]);

    // estado para manejar posibles errores.
    const [error, setError] = useState(null);

    //Metodo para realizar la peticion a la API con fetch

    const fetchData = async () => {
        try {
            const response = await fetch ('http://api.thecatapi.com/v1/images/search?limit=15');

            // convertimos la respuesta a formato JSON
            const data = await response.json();

            //setear la varialble de estado cats a traves de su metodo setCats
            setCats(data);

        } catch (error){

            console.log('error al realiza la solicitud', error); // Debugg
            setError('error al realiza la solicitud');

        }
    };
    // useEfect ejecuta el metodo fetc data la primera vez que se monta el componente (hace peticion a la API)
    useEffect(()=>{
        fetchData();
    }, []);

    // si hay error mostramos el mensaje de error. 

    if (error){
        return(
            <div className="alert alert-danger-text-center" role="alert">
                {error}
            </div>
        );
    }

  return (
    <div className="container mt-5">
        <h2 className="text-center text-white mb-4"> Galeria de gatos toxoplamosos, con Fetch </h2>

        <div>
            
        </div>
    </div>
  )
}
