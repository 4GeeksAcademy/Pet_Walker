import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";

export const Registration = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 regBackground">
            <Navbar />
            <div className="card card-registration shadow-lg">
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <div className="card-body text-center">
                        <img
                            src="https://images.unsplash.com/photo-1601758124096-1fd661873b95?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nc3xlbnwwfHwwfHx8Mg%3D%3D"
                            className="rounded mb-3" width="250"
                            alt="Registrarse como paseador"
                        />
                        <h5 className="card-title">Quiero registrarme como paseador</h5>
                        <p className="card-text">¡Regístrate como paseador y comienza a ofertar tus servicios!</p>
                        <Link to="/createProfileWalker" className="btn btnPrimary">Registrarme como paseador/a</Link>
                    </div>
                    <div className="vr mx-3"></div>
                    <div className="card-body text-center">
                        <img
                            src="https://images.unsplash.com/photo-1591208333284-825682219525?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="rounded mb-3" width="250"
                            alt="Registrarse como dueño"
                        />
                        <h5 className="card-title my-2">Quiero registrarme como dueño</h5>
                        <p className="card-text">¡Regístrate como dueñ@ y descubre paseadores cerca de tu localidad!</p>
                        <Link to="/createProfileOwner" className="btn btnPrimary">Registrarme como dueño/a</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
