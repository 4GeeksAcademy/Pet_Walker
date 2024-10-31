import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";
import { AddMascota } from "../component/addMascota";
import { FaDog, FaPaw } from "react-icons/fa";

export const OwnerProfile = () => {
    const { store, actions } = useContext(Context);

    const user = store.user ? store.user : {};
    const mascotas = store.mascotas ? store.mascotas : [];

    useEffect(() => {
        if (user.email) {
            actions.getMascotasByOwner(user.email);
        }
    }, [user.email]);

    return (
        <div className="profile-info m-4 mt-5 min-vh-100">
            <Navbar />
            <div className="text-center mb-4">
                <h1 className="fw-bold" style={{ color: "#499587", paddingTop: "3rem" }} >Mi Perfil</h1>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <div className="card p-4 d-flex align-items-center" style={{ height: '100%', borderColor: "#F0E0D2" }}>
                        <img
                            className="img-fluid rounded-circle mb-3 profile-photo"
                            src={user.fotoPerfil || "https://i0.wp.com/lanoticia.com/wp-content/uploads/2021/08/AdobeStock_116173569.jpg?fit=1200%2C800&ssl=1"}
                            alt={`Foto de perfil de ${user.nombre || 'usuario'}`}
                            style={{ width: "150px", height: "150px", objectFit: "cover", transition: "transform 0.3s ease" }}
                        />
                        <h4 className="fw-bold" style={{ color: "#499587" }}>{user.nombre || "Nombre no disponible"}</h4>
                        <p className="text-muted">{user.distrito || "Distrito no disponible"}</p>
                    </div>
                </div>

                <div className="col-md-8">
                    <div className="card p-4 mb-4" style={{ height: '48%', borderColor: "#F0E0D2" }}>
                        <h5 className="fw-bold" style={{ color: "#499587" }}>Detalles del Usuario</h5>
                        <p style={{ color: "#76C9B2" }}><strong className="textColor">Edad:  </strong>
                            {user.edad || "Edad no disponible"}
                        </p>
                        <p style={{ color: "#76C9B2" }}><strong className="textColor">Teléfono:</strong> {user.telefono || "Teléfono no disponible"}</p>
                    </div>

                    <div className="card p-4" style={{ height: '48%', borderColor: "#F0E0D2", overflowY: "auto", maxHeight: "250px" }}>
                        <h5 className="fw-bold" style={{ color: "#499587", marginBottom: "1rem" }}>
                            <FaPaw className="me-2" style={{ color: "#499587" }} /> Mis Mascotas
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
            <div className="text-center mt-5">
                <AddMascota />
            </div>
        </div>
    );
};
