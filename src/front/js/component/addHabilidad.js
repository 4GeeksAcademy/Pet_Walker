import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";  // Importamos el contexto para acceder a las acciones

export const AddHabilidad = ({ selectedHabilidades, setSelectedHabilidades }) => {
    const [habilidad, setHabilidad] = useState(""); 
    const [showModal, setShowModal] = useState(false); 
    const { store, actions } = useContext(Context); // Accedemos al contexto de acciones

    const habilidadesDisponibles = [
        "Ejercicio de Alta Intensidad",
        "Socialización Canina",
        "Entrenamiento Básico",
        "Cuidado Especial para Perros Mayores",
        "Atención a Necesidades Especiales",
        "Paseo en Grupos Pequeños"
    ];

    const handleAddHabilidad = () => {
        if (habilidad && !selectedHabilidades.includes(habilidad)) {
            setSelectedHabilidades([...selectedHabilidades, habilidad]);
        }
        setHabilidad(""); 
    };

    const handleDeleteHabilidad = (index) => {
        setSelectedHabilidades(selectedHabilidades.filter((_, i) => i !== index));
    };

    // Guardamos las habilidades y hacemos la llamada al backend
    const handleSaveHabilidades = () => {
        actions.updateWalkerHabilidades(store.user.id, selectedHabilidades); // Actualizamos las habilidades en el backend
        setShowModal(false); 
    };

    return (
        <div>
            <button className="btn btn-success mt-2" onClick={() => setShowModal(true)}>
                Agregar Habilidad
            </button>

            {showModal && (
                <div className="modal d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Seleccionar habilidades</h5>
                                <button type="button" className="close" onClick={() => setShowModal(false)}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <label htmlFor="habilidadSelect">Habilidad:</label>
                                <select
                                    id="habilidadSelect"
                                    value={habilidad}
                                    onChange={(e) => setHabilidad(e.target.value)}
                                    className="form-select"
                                >
                                    <option value="">Seleccionar habilidad</option>
                                    {habilidadesDisponibles.map((h, index) => (
                                        <option key={index} value={h}>{h}</option>
                                    ))}
                                </select>
                                <button className="btn btn-success mt-2" onClick={handleAddHabilidad}>
                                    Añadir Habilidad
                                </button>

                                <div className="mt-3">
                                    <h6>Habilidades seleccionadas:</h6>
                                    <ul className="list-group">
                                        {selectedHabilidades.map((hab, index) => (
                                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                                {hab}
                                                <button className="btn btn-danger btn-sm" onClick={() => handleDeleteHabilidad(index)}>
                                                    Eliminar
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Cerrar</button>
                                <button className="btn btnPrimary" onClick={handleSaveHabilidades}>Guardar Habilidades</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
