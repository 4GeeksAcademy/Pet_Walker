import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const profileLink = store.user?.tipo === "owner" ? "/profile-owner" : "/profile-walker";

    return (
        <nav className="navbarPrueba navbar navbar-expand-lg bg-body-tertiary fixed-top border-bottom border-2 pt-0 pb-0" >
            <div className="container-fluid navbarPrueba">
                <Link to="/">
                    <img
                        src="./rigo-baby.jpg"
                        className="navbar-brand textColorNavBar"
                        alt="Pet Walker"
                        style={{
                            width: "70px",
                            height: "auto",
                            padding: "5px",
                            marginLeft: "10px",
                            borderRadius: "50%",
                        }}
                    />
                </Link>
                <h1 className="pt-3 primaryText" style={{ color: "#ffffff" }}> Pet Walker </h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav"></ul>
                </div>

                {store.token ? (
                    <>
                        <div className="login me-3">
                            <Link to="/search-walker">
                                <button className="btnSecondary textColor btn">Buscar a un paseador</button>
                            </Link>
                        </div>
                        <div className="login me-3">
                            <Link to={profileLink}>
                                <button className="btnPrimary btn">Mi perfil</button>
                            </Link>
                        </div>
                        <div className="login me-3">
                            <Link to="/paseos">
                                <button className="btnPrimary btn">Mis Paseos</button>
                            </Link>
                        </div>
                        <div className="login">
                            <button
                                className="btn btn-danger"
                                onClick={() => actions.logout(navigate)}  // Pasa navigate a logout
                            >
                                Cerrar sesión
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="login me-3">
                            <Link to="/search-walker">
                                <button className="btnSecondary textColor btn">Buscar a un paseador</button>
                            </Link>
                        </div>
                        <div className="login me-3">
                            <Link to="/registration">
                                <button className="btnSecondary textColor btn">Registrarme</button>
                            </Link>
                        </div>
                        <div className="login">
                            <Link to="/login">
                                <button className="btnPrimary btn">Log In</button>
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </nav>
    );
};
