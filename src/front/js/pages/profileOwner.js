import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";


export const OwnerProfile = () => {

    const [formData, setFormData] = useState({
        nombre: '',
        raza: '',
        edad: '',
        detalles: ''
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        actions.addMascota(formData);
    };

    return (
        <div className="container">
            <Navbar />
            <div className="profile-card d-flex align-items-start p-4 border rounded shadow">
                <div className="profile-photo">
                    <img 
                        className="img-fluid rounded" 
                        style={{ width: "150px", height: "150px", objectFit: "cover" }} 
                    />
                </div>

                
                <div className="profile-info ms-4">
                    <p><strong>Nombre:</strong> </p>
                    <p><strong>Edad:</strong> </p>
                    <p><strong>Distrito:</strong> </p>
                    <p><strong>Mascotas</strong> </p>
                </div>
            </div>

            <div className = "mt-4 text-center" >
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Agrega tu mascota!
                </button>

                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Ingresa los datos de tu mascota</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-start">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label fw-bold">Nombre</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-bold">Raza</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    name="raza"
                                    value={formData.raza}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-bold">Edad</label>
                                <input 
                                    type="number" 
                                    className="form-control"
                                    name="edad"
                                    value={formData.edad}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label fw-bold">Detalles</label>
                                <textarea 
                                    className="form-control" 
                                    id="exampleFormControlTextarea1"
                                    rows="5"
                                    name="detalles" 
                                    value={formData.detalles} 
                                    onChange={handleChange} 
                                    placeholder="Detalla las necesidades y actitudes de tu perrito ¡Lo queremos conocer para saber cómo cuidarlo! Usa como máximo 800 letras" 
                                    maxLength="800"
                                    required 
                                />
                            </div>
                        </form>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-primary">Guardar cambios</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>


        </div>
    )
}