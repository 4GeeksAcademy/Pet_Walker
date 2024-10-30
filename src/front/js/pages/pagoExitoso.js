// pagoExitoso.js
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

//USAR ESTAS RUTAS, PARA QUE SE MUESTREN LOS DETALLES Y EL ESTADO DEL PASEO
//##RUTA DE GET PARA PASEOS
//##MOSTRAR EL DETALLE DE LOS PASEOS Y SU ESTADO DE PENDIENTE Y TERMINADO


export const PagoExitoso = () => {
    const params = useParams();
    const { actions } = useContext(Context);
    const [paseoDetails, setPaseoDetails] = useState(null);
    console.log(params.theid)

    // useEffect(() => {
    //     const fetchPaseoDetails = async () => {
    //         // if (!paseoId) {
    //         //     toast.error("ID de paseo no encontrado en la URL");
    //         //     return;
    //         // }
    //         try {
    //             const data = await actions.getPaseoById(paseoId);
    //             setPaseoDetails(data);
    //         } catch (error) {
    //             toast.error("Error al cargar los detalles del paseo");
    //         }
    //     };
    
    //     fetchPaseoDetails();
    // }, [paseoId, actions]);
   useEffect(()=>{
        actions.getPaseoById(params.theid)
   },[]) 

    return (
        <div className="container mt-5">
            <h1 className="text-center text-success">¡Paseo Agendado Exitosamente!</h1>
            {paseoDetails ? (
                <div className="text-center">
                    <p>
                        Paseador: {paseoDetails.walker_nombre} {paseoDetails.walker_apellido}
                    </p>
                    <p>Su número de paseo es: {paseoDetails.paseo_id}</p>
                </div>
            ) : (
                <p>Cargando detalles del paseo...</p>
            )}
            <ToastContainer />
        </div>
    );
};
