import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import { FaPaw } from "react-icons/fa";

export const VerPerfilWalker = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams(); // Obtiene el ID del walker desde los parámetros de la URL
    const [walker, setWalker] = useState(null);

    // Función para obtener el perfil del walker usando el ID
    const fetchWalkerProfile = async () => {
        try {
            const response = await fetch(`${process.env.BACKEND_URL}/api/walker/${id}`);
            if (response.ok) {
                const data = await response.json();
                setWalker(data); // Almacena los datos del walker en el estado local
            } else {
                console.error("Error al obtener los datos del walker.");
            }
        } catch (error) {
            console.error("Error en la conexión:", error);
        }
    };

    useEffect(() => {
        fetchWalkerProfile(); // Llama a la función para obtener los datos cuando se monta el componente
    }, [id]);

    if (!walker) {
        return <p>Cargando perfil...</p>; // Muestra un mensaje de carga hasta que los datos estén disponibles
    }

    return (
        <div className="my-5 regBackground">
            <Navbar />
            <div className="profile-section my-5">
                <div className="card d-flex my-5 mx-auto p-3 flex-row align-items-center" style={{ maxWidth: "700px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "8px", border: "2px solid #E7F8F3" }}>
                    <div className="col-4">
                        <img
                            className="img-fluid rounded-circle mb-3"
                            src={walker.fotoPerfil || "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"}
                            alt={`Foto de perfil de ${walker.nombre || 'usuario'}`}
                            style={{ width: "150px", height: "150px", objectFit: "cover" }}
                        />
                    </div>
                    <div className="text-left col-8 ps-4">
                        <h5 className="card-title" style={{ color: "#0f8c8c" }}>{walker.nombre || "Nombre no disponible"}</h5>
                        <p className="card-text">Cuida en <strong>{walker.distrito || "Ubicación no disponible"}</strong>.</p>
                        <p className="card-text"><strong>Edad:</strong> {walker.edad || "Edad no disponible"}</p>
                        <p className="card-text"><strong>Teléfono:</strong> {walker.telefono || "Teléfono no disponible"}</p>
                        <h6>Habilidades:</h6>
                        {walker.habilidades && walker.habilidades.length > 0 ? (
                            <div className="d-flex flex-wrap">
                                {walker.habilidades.map((hab, index) => (
                                    <span key={index} className="badge bg-primary m-1" style={{ fontSize: "14px" }}>
                                        {hab}
                                    </span>
                                ))}
                            </div>
                        ) : (
                            <p className="text-muted">No se han agregado habilidades.</p>
                        )}
                    </div>
                </div>
            </div>

            <div className="card profile-info d-flex align-items-center justify-content-center">
                <div className="col-12 tab p-5">
                    <h2>Acerca de mí</h2>
                    <p>
                        Hola! Soy {walker.nombre} y estaré muy agradecido de que me elijas como tu paseador. 
                        Tengo amplia experiencia en el cuidado de mascotas así como en un diplomado en primeros 
                        auxilios. Estoy seguro de que si me escoges, no te arrepentirás.
                    </p>
                    <h2>Horarios</h2>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Lu</th>
                                <th>Ma</th>
                                <th>Mi</th>
                                <th>Ju</th>
                                <th>Vi</th>
                                <th>Sa</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mañana</td>
                                <td>☑</td>
                                <td>☑</td>
                                <td>☑</td>
                                <td>☑</td>
                                <td>☑</td>
                                <td>☑</td>
                            </tr>
                            <tr>
                                <td>Tarde</td>
                                <td>☑</td>
                                <td>☑</td>
                                <td>☑</td>
                                <td>☑</td>
                                <td>☑</td>
                                <td>☑</td>
                            </tr>
                            <tr>
                                <td>Noche</td>
                                <td>☒</td>
                                <td>☑</td>
                                <td>☒</td>
                                <td>☑</td>
                                <td>☒</td>
                                <td>☒</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="gallery-section mt-5">
                    <h2 className="text-center" style={{ color: "#499587" }}><FaPaw className="me-2" />Galería de Fotos</h2>
                    <div className="d-flex flex-wrap justify-content-center mt-4">
                        {walker.galeria && walker.galeria.length > 0 ? (
                            walker.galeria.map((foto, index) => (
                                <div key={index} className="m-2" style={{ borderRadius: "8px", overflow: "hidden", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                                    <img
                                        src={foto}
                                        alt={`Galería de ${walker.nombre}`}
                                        className="img-fluid rounded"
                                        style={{ width: "200px", height: "200px", objectFit: "cover" }}
                                    />
                                </div>
                            ))
                        ) : (
                            <p className="text-muted">No hay fotos en la galería.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
