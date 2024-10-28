import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../component/navbar";
import uploadImage from "../../../firebase";

// Componente Modal
const Modal = ({ show, onClose, message }) => {
    return (
        <div className={`modal ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }} tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Mensaje</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <p>{message}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const CreateProfileWalker = () => {
    const { store, actions } = useContext(Context);
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        edad: '',
        telefono: '',
        email: '',
        direccion: '',
        distrito: '',
        fotoPerfil: null,
        contraseña: '',
        confirmarContraseña: '',
    });

    const [showModal, setShowModal] = useState(false); 
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.contraseña !== formData.confirmarContraseña) {
            setError("Las contraseñas no coinciden");
            return;
        }

        try {
            // Subir imagen a Firebase y obtener URL
            const profileImageURL = formData.fotoPerfil ? await uploadImage(formData.fotoPerfil) : null;
            console.log("URL de imagen subida:", profileImageURL); // Comprobar URL en consola

            // Enviar datos al backend, incluyendo URL de imagen
            await actions.createWalkerProfile({
                ...formData,
                fotoPerfil: profileImageURL  // Incluir URL en el backend
            });
            setShowModal(true); 
        } catch (error) {
            console.error("Error al crear el perfil:", error);
            alert("Ocurrió un error al guardar el perfil. Por favor, intenta de nuevo.");
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        navigate("/"); 
    };

    return (
        <div className="container mt-5 mb-5 d-flex justify-content-center profile-info">
            <Navbar />
            <div className="card px-1 py-4 mt-5 pt-5" style={{ border: "2px solid #E7F8F3", borderRadius: "0.25rem" }}>
                <div className="card-body">
                    <h1 className="text-center mt-5 mb-5 primaryText">
                        ¡Crea tu perfil de paseador! <br />
                    </h1>
                    {error && <p className="text-danger">{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label fw-bold">Nombre</label>
                            <input 
                                type="text" 
                                placeholder="Juan"
                                className="form-control"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-bold">Apellido</label>
                            <input 
                                type="text" 
                                placeholder="Sanchez"
                                className="form-control"
                                name="apellido"
                                value={formData.apellido}
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
                                placeholder="45"
                                value={formData.edad}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-bold">Teléfono</label>
                            <input 
                                type="tel" 
                                className="form-control"
                                name="telefono"
                                value={formData.telefono}
                                onChange={handleChange}
                                pattern="[0-9]{9}"
                                placeholder="987654321"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-bold">Email</label>
                            <input 
                                type="email" 
                                className="form-control"
                                placeholder="doglover97@myemail.com"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-bold">Dirección</label> 
                            <input 
                                type="text" 
                                className="form-control"
                                name="direccion"
                                placeholder="Calle Brisas 34, Depto. 101."
                                value={formData.direccion}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-bold">Distrito</label>
                            <select 
                                className="form-control" 
                                name="distrito" 
                                value={formData.distrito} 
                                onChange={handleChange}
                                required
                            >
                                <option value="">Selecciona tu distrito</option>
                                <option value="Peru">Perú</option>
                                <option value="Mexico">México</option>
                                <option value="Colombia">Colombia</option>
                                <option value="Venezuela">Venezuela</option>
                                <option value="Ecuador">Ecuador</option>
                                <option value="Bolivia">Bolivia</option>
                                <option value="Chile">Chile</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-bold">Foto de perfil</label>
                            <input 
                                type="file" 
                                className="form-control"
                                name="fotoPerfil"
                                accept=".jpg, .jpeg, .png"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-bold">Contraseña</label>
                            <input 
                                type="password" 
                                className="form-control"
                                name="contraseña"
                                onChange={handleChange}
                                minLength={6}
                                placeholder="La contraseña debe tener mínimo 6 caracteres"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-bold">Confirmar contraseña</label>
                            <input 
                                type="password" 
                                className="form-control"
                                name="confirmarContraseña"
                                value={formData.confirmarContraseña}
                                onChange={handleChange}
                                placeholder="Vuelve a ingresar la contraseña"
                                required
                            />
                        </div>
                        <div className="form-check mb-3">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                name="aceptaTerminos" 
                                required
                            />
                            <label className="form-check-label">
                                Acepto los términos y condiciones
                            </label>
                        </div>
                        
                        <div className="d-flex justify-content-center mt-5">
                            <button type="submit" className="btn btnPrimary">Guardar perfil</button>
                        </div>
                    </form>
                </div>
            </div>

            <Modal show={showModal} onClose={handleCloseModal} message="¡Perfil guardado con éxito!" />
        </div>
    );
};
