import React from "react";
import { Link } from "react-router-dom";


export const Jumbotron = () => {
    return (

        <div className="jumbotron p-2 text-center" 
            style={{ marginTop: "100px" }}
            >
            <h1 className="display-4 primaryText" style={{ fontSize: "100px" }}>Tu mascota merece lo mejor</h1>
            <p className="lead secondaryText px-2">Sabemos que no siempre tienes tiempo para pasear a tu amigo y nosotros estamos para darle lo mejor mientras tu te esfuerzas por cuidarlo.</p>
            <hr className="my-4" />
        </div>
    )
};

