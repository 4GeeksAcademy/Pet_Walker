import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";
import { AddMascota } from "../component/addMascota";

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
        <div className="container">
            <Navbar />
            <div>
                <h1>Mi Perfil</h1>
            </div>
            <div className="profile-card d-flex align-items-start p-4 m-4 border rounded shadow">
                <div className="profile-photo">
                    <img 
                        className="img-fluid rounded" 
                        src={user.fotoPerfil || "https://i0.wp.com/lanoticia.com/wp-content/uploads/2021/08/AdobeStock_116173569.jpg?fit=1200%2C800&ssl=1"}
                        alt="Foto de perfil"
                        style={{ width: "150px", height: "150px", objectFit: "cover" }} 
                    />
                </div>

                <div className="profile-info ms-4">
                    <p><strong>Nombre:</strong> {user.nombre || "Nombre no disponible"}</p>
                    <p><strong>Apellido:</strong> {user.apellido || "Apellido no disponible"}</p>
                    <p><strong>Edad:</strong> {user.edad || "Edad no disponible"}</p>
                    <p><strong>Distrito:</strong> {user.distrito || "Distrito no disponible"}</p>
                    <p><strong>Teléfono:</strong> {user.telefono || "Teléfono no disponible"}</p>

                    <p><strong>Mascotas:</strong></p>
                    {mascotas.length > 0 ? (
                        <ul>
                            {mascotas.map((mascota, index) => (
                                <li key={index}>
                                    <strong>Nombre:</strong> {mascota.nombre}
                                    {/* <strong> Raza:</strong> {mascota.raza}  */}
                                    {/* <strong> Edad:</strong> {mascota.edad}, 
                                    <strong> Detalles:</strong> {mascota.detalles} */}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No hay mascotas registradas.</p>
                    )}
                </div>
            </div>
            <AddMascota/>
        </div>
    );
};
