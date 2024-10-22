import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";

export const SearchWalker = () => {
    const { store, actions } = useContext(Context);
    const [selectedHabilidades, setSelectedHabilidades] = useState([]);
    const [selectedTiempo, setSelectedTiempo] = useState("");

    const handleHabilidadesChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedHabilidades([...selectedHabilidades, value]);
        } else {
            setSelectedHabilidades(selectedHabilidades.filter(habilidad => habilidad !== value));
        }
    };

    const handleTiempoChange = (event) => {
        setSelectedTiempo(event.target.value);
    };

    const handleSearch = () => {
        // Aquí puedes realizar la lógica para buscar paseadores filtrados con los valores seleccionados
        actions.filterWalkers(selectedHabilidades, selectedTiempo);
    };

    return (
        <div className="container mt-5">
            <Navbar />

            <div className="filter-section mt-4 mb-4">
                <h2>Buscar paseador</h2>

                {/* Filtro de Habilidades */}
                <div className="filter-group">
                    <h5>Habilidades</h5>
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            value="ejercita" 
                            onChange={handleHabilidadesChange} 
                        />
                        <label className="form-check-label">Ejercita</label>
                    </div>
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            value="paseaLento" 
                            onChange={handleHabilidadesChange} 
                        />
                        <label className="form-check-label">Pasea lento</label>
                    </div>
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            value="paseaRapido" 
                            onChange={handleHabilidadesChange} 
                        />
                        <label className="form-check-label">Pasea rápido</label>
                    </div>
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            value="socializa" 
                            onChange={handleHabilidadesChange} 
                        />
                        <label className="form-check-label">Socializa</label>
                    </div>
                </div>

                {/* Filtro de Tiempo */}
                <div className="filter-group mt-3">
                    <h5>Tiempo como paseador</h5>
                    <select className="form-select" onChange={handleTiempoChange}>
                        <option value="">Selecciona tiempo</option>
                        <option value="menos1">Menos de 1 año</option>
                        <option value="mas1">Más de 1 año</option>
                        <option value="mas3">Más de 3 años</option>
                    </select>
                </div>

                {/* Botón para buscar */}
                <div className="mt-4">
                    <button className="btn btn-primary" onClick={handleSearch}>
                        Buscar paseador
                    </button>
                </div>
            </div>

            {/* Resultados */}
            <div className="results-section mt-5">
                <h3>Resultados de búsqueda</h3>
                {/* Aquí mostrarías las tarjetas de los paseadores filtrados */}
                <div className="row">
                    {store.filteredWalkers && store.filteredWalkers.map((walker, index) => (
                        <div key={index} className="col-md-4">
                            <div className="card mb-3">
                                <img src={walker.fotoPerfil} className="card-img-top" alt={`Foto de ${walker.nombre}`} />
                                <div className="card-body">
                                    <h5 className="card-title">{walker.nombre} {walker.apellido}</h5>
                                    <p className="card-text">Habilidades: {walker.habilidades.join(", ")}</p>
                                    <p className="card-text">Tiempo como paseador: {walker.tiempo}</p>
                                    <Link to={`/walker/${walker.id}`} className="btn btn-primary">Ver perfil</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
