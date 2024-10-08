import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import {  useNavigate } from "react-router-dom";

export const CreateProfileOwner = () => {
    const { store, actions } = useContext(Context);
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        edad: '',
        telefono: '',
        email: '',
        direccion: '',
        distrito: '', // POR AHORA EL DISTRITO SE DARAN OPCIONES DE PAISES
        fotoPerfil: null,
        contraseña: '',
        confirmarContraseña: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = async (e,formData) => {
        e.preventDefault();
        // if (formData.distrito === "Seleccionar") {
        //     alert("Por favor selecciona un distrito.");
        //     return;
        // }
        if (formData.contraseña.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            return;
        }
        if (formData.contraseña !== formData.confirmarContraseña) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        console.log(formData);
        await actions.createOwnerProfile(formData.nombre, formData.apellido , formData.edad , formData.telefono 
            , formData.email , formData.direccion, formData.distrito , formData.contraseña
        );
        navigate("/");
    };


    return (
        <div className="container">
            <h1 className="text-center mt-5 mb-5">
                Crear perfil de dueño
            </h1>
            <form onSubmit={(e) => handleSubmit(e, formData)}>
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
                    <label className="form-label fw-bold">Apellido</label>
                    <input 
                        type="text" 
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
                        placeholder="Debe tener 9 dígitos"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold">Email</label>
                    <input 
                        type="email" 
                        className="form-control"
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
                        placeholder = "Selecciona tu distrito" 
                        required
                    >
                        <option value="Seleccionar">Selecciona tu distrito</option>
                        <option value="Peru">Perú</option>
                        <option value="Mexico">Mexico</option>
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
                    <button type="submit" className="btn btn-primary">Guardar perfil</button>
                </div>
            </form>
        </div>
        
    )

}