//USAR ESTAS RUTAS, PARA QUE SE MUESTREN LOS DETALLES Y EL ESTADO DEL PASEO
//##RUTA DE GET PARA PASEOS
//##MOSTRAR EL DETALLE DE LOS PASEOS Y SU ESTADO DE PENDIENTE Y TERMINADO

// misPaseos.js// misPaseos.js
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";
import { FaDog, FaUserAlt } from "react-icons/fa";

export const MisPaseos = () => {
    const { store, actions } = useContext(Context);
    const [userType, setUserType] = useState(null);  

    const user = store.user ? store.user : {};
    const paseos = store.paseos ? store.paseos : [];

    useEffect(() => {
        if (user.email) {
            console.log(user)
            if (user.tipo === "owner") {
                actions.getPaseosByOwner(user.email)
                    .then(() => setUserType("owner"))
                    .catch(error => console.error("Error al cargar paseos de owner:", error));
            } else if (user.tipo === "walker") {
                actions.getPaseosByWalker(user.email)
                    .then(() => setUserType("walker"))
                    .catch(error => console.error("Error al cargar paseos de walker:", error));
            }
        }
    }, [user.email, user.tipo]);
    

    return (
        <div className="m-4 mt-5 min-vh-100">
            <Navbar />
            <div className="text-center mb-4">
                <h1 className="fw-bold" style={{ color: "#499587", paddingTop: "3rem" }}>Mis Paseos</h1>
            </div>
            <div className="row">
                {paseos.length > 0 ? (
                    paseos.map((paseo, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card p-4" style={{ borderColor: "#F0E0D2" }}>
                                <h5 className="fw-bold" style={{ color: "#499587" }}>Paseo ID: {paseo.id}</h5>
                                <p style={{ color: "#76C9B2" }}>
                                    <FaUserAlt className="me-2" style={{ color: "#499587" }} />
                                    <strong className="textColor">
                                        {userType === "owner" ? "Walker: " : "Owner: "}
                                    </strong>
                                    <span style={{ color: "#76C9B2" }}>
                                        {userType === "owner" ? `${paseo.walker_nombre} ${paseo.walker_apellido}` : `${paseo.owner_nombre} ${paseo.owner_apellido}`}
                                    </span>
                                </p>
                                <p style={{ color: "#76C9B2" }}>
                                    <strong className="textColor">Estado:</strong> {paseo.estado}
                                </p>
                                <p style={{ color: "#76C9B2" }}>
                                    <strong className="textColor">Tipo de Paseo:</strong> {paseo.tipo_de_paseo}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-muted text-center">No tienes paseos registrados.</p>
                )}
            </div>
        </div>
    );
};
