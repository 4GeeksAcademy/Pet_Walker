import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";

export const Login = () => {
    const { store, actions } = useContext(Context);
    const [user, setUser] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (store.token) {
            const redirectTo = store.user?.tipo === "owner" ? "/profile-owner" : "/profile-walker";
            navigate(redirectTo);
        }
    }, [store.token, store.user, navigate]);

    return (
        <div>
            <Navbar/>
            <div className="d-flex align-items-center justify-content-center vh-100 profile-info">
                <div className="card px-1 py-4 mx-auto" style={{ width: "60%", border: "2px solid #EF7029", borderRadius: "0.25rem" }}>
                    <div className="card-body">
                        <div className="mx-auto my-auto">
                            <h1 className="text-center" style={{color: "#ef7029"}}>Log In</h1> 
                            <div className="mb-3">
                                <label className="form-label textColor" style={{fontFamily: "League Spartan", fontSize: "22px"}}>
                                    <strong>Email</strong>
                                </label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    onChange={(event) => setUser({ ...user, email: event.target.value })}
                                />
                                <div className="form-text">Nunca compartiremos tus datos personales.</div>
                            </div> 
                            <div className="mb-3">
                                <label className="form-label textColor" style={{fontFamily: "League Spartan", fontSize: "22px"}}>
                                    <strong>Contraseña</strong>
                                </label>
                                <div className="d-flex">
                                    <input 
                                        type={showPassword ? "text" : "password"} 
                                        className="form-control" 
                                        onChange={(event) => setUser({ ...user, contraseña: event.target.value })}
                                    />
                                    <button 
                                        className="btn btn-info m-1 btnLock"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? "🔒" : "👀"}
                                    </button>
                                </div>
                                <button className="btn btn-link">¿Te olvidaste tu contraseña?</button>
                            </div>
                            <button 
                                onClick={() => actions.login(user.email, user.contraseña)} 
                                className="btn btnPrimary w-100 mt-2"
                                style={{ width: "60%" }}
                            >
                                Log In
                            </button>
                            <Link to="/registration" className="btn btn-link">¿No tienes una cuenta? ¡Registrate!</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
