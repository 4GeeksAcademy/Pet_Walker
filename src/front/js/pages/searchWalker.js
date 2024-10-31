import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";
import { Link } from "react-router-dom";

export const SearchWalker = () => {
    const { store, actions } = useContext(Context);
    const [selectedHabilidades, setSelectedHabilidades] = useState([]);
    const [selectedDistrito, setSelectedDistrito] = useState("");

    useEffect(() => {
        actions.loadAllWalkers();
    }, []);

    const handleHabilidadesChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedHabilidades([...selectedHabilidades, value]);
        } else {
            setSelectedHabilidades(selectedHabilidades.filter(habilidad => habilidad !== value));
        }
    };

    const handleDistritoChange = (event) => {
        setSelectedDistrito(event.target.value);
    };

    const handleSearch = () => {
        actions.filterWalkers(selectedHabilidades, selectedDistrito);
    };

    return (
        <div className="container mt-5 min-vh-100">
            <Navbar />
            <div className="filter-section mt-4 mb-4 pt-5">
                <h2 style={{ color: "#f77032" }} className="text-center">Buscar a un Paseador</h2>

                <div className="filter-group pt-3 mt-3">
                    <h3>Habilidades</h3>
                    <h4>Selecciona las habilidades que prefieras en tu paseador</h4>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value="altaIntensidad"
                            onChange={handleHabilidadesChange}
                        />
                        <label className="form-check-label">Ejercicio de alta intensidad</label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value="socializacionCanina"
                            onChange={handleHabilidadesChange}
                        />
                        <label className="form-check-label">Socialización Canina</label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value="entrenamientoBasico"
                            onChange={handleHabilidadesChange}
                        />
                        <label className="form-check-label">Entrenamiento Básico</label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value="cuidadoEspecialMayores"
                            onChange={handleHabilidadesChange}
                        />
                        <label className="form-check-label">Cuidado Especial para Perros Mayores</label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value="necesidadesEspeciales"
                            onChange={handleHabilidadesChange}
                        />
                        <label className="form-check-label">Atención a Necesidades Especiales</label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value="grupoPequenos"
                            onChange={handleHabilidadesChange}
                        />
                        <label className="form-check-label">Paseo en Grupos Pequeños</label>
                    </div>
                </div>

                <div className="filter-group mt-3 pt-3">
                    <h3>Distrito</h3>
                    <select className="form-select" onChange={handleDistritoChange}>
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

                <div className="mt-5 text-center">
                    <button className="btn btnPrimary" style={{ width: "300px", height: "50px" }} onClick={handleSearch}>
                        Aplicar Filtros
                    </button>
                </div>
            </div>

            <div className="results-section mt-5">
                <h3>Resultados de búsqueda</h3>

                <div className="row pt-4">
                    {(store.filteredWalkers.length > 0 ? store.filteredWalkers : store.allWalkers).map((walker, index) => {
                        console.log("Foto de perfil:", walker.fotoPerfil); // Agregar este console.log para ver si fotoPerfil tiene la URL

                        return (
                            <div key={index} className="col-md-6 mb-4">
                                <div className="card d-flex flex-row align-items-center p-3" style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "8px", border: "2px solid #E7F8F3" }}>
                                    <div className="col-4">
                                        <img
                                            src={walker.fotoPerfil || "https://via.placeholder.com/150"} // Usa fotoPerfil de walker
                                            alt={`Foto de ${walker.nombre}`}
                                            className="img-fluid rounded"
                                            style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "8px" }}
                                        />
                                    </div>
                                    <div className="col-8 ps-3 ">
                                        <div className="card-body pt-3">
                                            <h5 className="card-title primaryText" style={{ color: "#0f8c8c", fontSize: "25px" }}>{walker.nombre} {walker.apellido}</h5>
                                            <p className="card-text" style={{ color: "#0f8c8c", fontSize: "18px" }}>Distrito: <span style={{ color: "#499587" }}>{walker.distrito || "Sin especificar"}</span></p>
                                            <p className="card-text" style={{ color: "#0f8c8c", fontSize: "18px" }}>Habilidades: <span style={{ color: "#499587" }}>{walker.habilidades && walker.habilidades.length > 0 ? walker.habilidades.join(", ") : "No especificadas"}</span></p>
                                            <div className="d-flex justify-content-between p-3">
                                                <Link to={`/perfil-walker/${walker.id}`} className="btn btnSecondary mt-2">Ver perfil</Link>
                                                <Link to={`/newride/${walker.id}`} className="btn btnPrimary mt-2">Agendar paseo</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
