import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { FaDog } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";


export const AddMascota = () => {
    const { store, actions } = useContext(Context);
    const [formData, setFormData] = useState({
        nombre: '',
        raza: '',
        edad: '',
        detalles: ''
    });

    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const email = store.user.email;
            if (!email) {
                throw new Error("No se encontró el correo electrónico del usuario");
            }
            await actions.createMascota(email, formData.nombre, formData.raza, formData.edad, formData.detalles);
            
            // Resetear el formulario después de agregar la mascota
            setFormData({
                nombre: '',
                raza: '',
                edad: '',
                detalles: ''
            });

            // Actualizar la lista de mascotas en el perfil del usuario
            actions.getMascotasByOwner(email);

            // Cerrar el modal
            setShowModal(false);
        } catch (error) {
            console.error("Error al agregar la mascota:", error);
            toast.error("Ocurrió un error al agregar la mascota. Por favor, intenta de nuevo.");
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="mt-4 text-center">
            <button type="button" className="btn btnPrimary" onClick={() => setShowModal(true)}>
                <FaDog className="me-2" /> ¡Agrega tu mascota!
            </button>

            {showModal && (
                <div className={`modal fade show`} style={{ display: 'block' }} role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5">Ingresa los datos de tu mascota</h1>
                                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
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
                                            placeholder="Detalla las necesidades y actitudes de tu perrito. ¡Lo queremos conocer para saber cómo cuidarlo!" 
                                            maxLength="800"
                                            required 
                                        />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Cerrar</button>
                                        <button type="submit" className="btn btn-primary">Guardar cambios</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

