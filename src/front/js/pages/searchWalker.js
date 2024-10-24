import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";

export const SearchWalker = () => {
    const { store, actions } = useContext(Context);
    const [selectedHabilidades, setSelectedHabilidades] = useState([]);
    const [selectedExperiencia, setSelectedExperiencia] = useState("");
    const [selectedDistrito, setSelectedDistrito] = useState("");

    const handleHabilidadesChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedHabilidades([...selectedHabilidades, value]);
        } else {
            setSelectedHabilidades(selectedHabilidades.filter(habilidad => habilidad !== value));
        }
    };

    const handleExperienciaChange = (event) => {
        setSelectedExperiencia(event.target.value);
    };

    const handleDistritoChange = (event) => {
        setSelectedDistrito(event.target.value);
    };

    const handleSearch = () => {
        actions.filterWalkers(selectedHabilidades, selectedExperiencia, selectedDistrito);
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
                            value="altaIntensidad" 
                            onChange={handleHabilidadesChange} 
                        />
                        <label className="form-check-label">Ejercicio de alta intensidad</label>
                    </div>
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            value="socializacion" 
                            onChange={handleHabilidadesChange} 
                        />
                        <label className="form-check-label">Socialización canina</label>
                    </div>
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            value="entrenamientoBasico" 
                            onChange={handleHabilidadesChange} 
                        />
                        <label className="form-check-label">Entrenamiento básico</label>
                    </div>
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            value="perritosMayores" 
                            onChange={handleHabilidadesChange} 
                        />
                        <label className="form-check-label">Cuidado especial para perritos mayores</label>
                    </div>
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            value="necesidadesEspeciales" 
                            onChange={handleHabilidadesChange} 
                        />
                        <label className="form-check-label">Atención a necesidades especiales</label>
                    </div>
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            value="gruposPequenos" 
                            onChange={handleHabilidadesChange} 
                        />
                        <label className="form-check-label">Paseo en grupos pequeños</label>
                    </div>
                </div>

                
                <div className="filter-group mt-3">
                    <h5>Experiencia como paseador</h5>
                    <select className="form-select" onChange={handleExperienciaChange}>
                        <option value="">Selecciona</option>
                        <option value="menos1">Menos de 1 año</option>
                        <option value="mas1">Más de 1 año</option>
                        <option value="mas3">Más de 3 años</option>
                    </select>
                </div>

                 <div className="filter-group mt-3">
                    <h5>Distrito</h5>
                    <select className="form-select" onChange={handleDistritoChange}>
                        <option value="">Selecciona tiempo</option>
                        <option value="menos1">Menos de 1 año</option>
                        <option value="mas1">Más de 1 año</option>
                        <option value="mas3">Más de 3 años</option>
                    </select>
                </div>

                
                <div className="mt-4">
                    <button className="btn btn-primary" onClick={handleSearch}>
                        Buscar paseador
                    </button>
                </div>
            </div>

            {/* Resultados */}
            <div className="results-section mt-5">
                <h3>Resultados de búsqueda</h3>
                
                <div className="row">
                    {store.filteredWalkers && store.filteredWalkers.map((walker, index) => (
                        <div key={index} className="col-md-4">
                            <div className="card mb-3">
                                <img src={walker.fotoPerfil} className="card-img-top" alt={`Foto de ${walker.nombre}`} />
                                <div className="card-body">
                                    <h5 className="card-title">{walker.nombre} {walker.apellido}</h5>
                                    <p className="card-text">Habilidades: {walker.habilidades.join(", ")}</p>
                                    <p className="card-text">Experiencia como paseador: {walker.experiencia}</p>
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
