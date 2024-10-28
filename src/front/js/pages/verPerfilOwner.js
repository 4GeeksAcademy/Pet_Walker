import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import { FaDog, FaPaw } from "react-icons/fa";

export const VerPerfilOwner = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams(); // Obtiene el ID del owner desde los parámetros de la URL
    const [owner, setOwner] = useState(null);
    const [mascotas, setMascotas] = useState([]);

    // Función para obtener el perfil del owner usando el ID
    const fetchOwnerProfile = async () => {
        try {
            const response = await fetch(`${process.env.BACKEND_URL}/api/owner/${id}`);
            if (response.ok) {
                const data = await response.json();
                setOwner(data); // Almacena los datos del owner en el estado local
            } else {
                console.error("Error al obtener los datos del owner.");
            }
        } catch (error) {
            console.error("Error en la conexión:", error);
        }
    };

    const fetchMascotas = async (email) => {
        await actions.getMascotasByOwner(email);
        setMascotas(store.mascotas || []);
    };

    useEffect(() => {
        if (owner) {
            fetchMascotas(owner.email);
        } else {
            fetchOwnerProfile();
        }
    }, [id, owner]);

    if (!owner) {
        return <p>Cargando perfil...</p>; // Muestra un mensaje de carga hasta que los datos estén disponibles
    }

    return (
        <div className="container mt-5">
            <Navbar />
            <div className="text-center mb-4">
                <h1 className="fw-bold" style={{ color: "#499587", paddingTop: "3rem" }}>Perfil del Dueño</h1>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <div className="card p-4 d-flex align-items-center" style={{ height: '100%', borderColor: "#F0E0D2" }}>
                        <img 
                            className="img-fluid rounded-circle mb-3 profile-photo" 
                            src={owner.fotoPerfil || "https://i0.wp.com/lanoticia.com/wp-content/uploads/2021/08/AdobeStock_116173569.jpg?fit=1200%2C800&ssl=1"}
                            alt={`Foto de perfil de ${owner.nombre || 'usuario'}`}
                            style={{ width: "150px", height: "150px", objectFit: "cover", transition: "transform 0.3s ease" }} 
                        />
                        <h4 className="fw-bold" style={{ color: "#499587" }}>{owner.nombre || "Nombre no disponible"}</h4> 
                        <p className="text-muted">{owner.distrito || "Distrito no disponible"}</p>
                    </div>
                </div>

                <div className="col-md-8">
                    <div className="card p-4 mb-4" style={{ height: '48%', borderColor: "#F0E0D2" }}>
                        <h5 className="fw-bold" style={{ color: "#499587" }}>Detalles del Usuario</h5>
                        <p><strong>Edad:</strong> {owner.edad || "Edad no disponible"}</p>
                        <p><strong>Teléfono:</strong> {owner.telefono || "Teléfono no disponible"}</p>
                    </div>

                    <div className="card p-4" style={{ height: '48%', borderColor: "#F0E0D2", overflowY: "auto", maxHeight: "250px" }}>
                        <h5 className="fw-bold" style={{ color: "#499587", marginBottom: "1rem" }}>
                            <FaPaw className="me-2" style={{ color: "#499587" }} /> Mascotas
                        </h5>
                        {mascotas.length > 0 ? (
                            <ul className="list-group list-group-flush">
                                {mascotas.map((mascota, index) => (
                                    <li key={index} className="list-group-item">
                                        <FaDog className="me-2" style={{ color: "#499587" }} /> 
                                        <strong style={{ color: "#499587" }}>Nombre:</strong> 
                                        <span style={{ color: "#76C9B2" }}> {mascota.nombre}</span>, 
                                        <strong style={{ color: "#499587" }}> Raza:</strong> 
                                        <span style={{ color: "#76C9B2" }}> {mascota.raza}</span>, 
                                        <strong style={{ color: "#499587" }}> Edad:</strong> 
                                        <span style={{ color: "#76C9B2" }}> {mascota.edad}</span>, 
                                        <strong style={{ color: "#499587" }}> Detalles:</strong> 
                                        <span style={{ color: "#76C9B2" }}> {mascota.detalles}</span>
                                    </li>
                                ))}
                            </ul>                       
                        ) : (
                            <p className="text-muted">No hay mascotas registradas.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
