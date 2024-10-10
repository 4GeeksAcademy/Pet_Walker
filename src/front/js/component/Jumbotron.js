import React from "react";
import { Link } from "react-router-dom";


export const Jumbotron = () => {
    return (

        <div className="jumbotron p-2 text-center mt-5 textColor"
            style={{
                backgroundColor: "#ffc05c",
                color: "#ffffff"
            }}>
            <h1 className="display-4 " style={{ fontSize: "100px" }}>Tu mascota merece lo mejor</h1>
            <p className="lead">Sabemos que no siempre se tiene tiempo para pasear a tu querido amigo y nosotros estamos para darle lo mejor mientras tu te esfuerzas por cuidarlo.</p>
            <hr className="my-4" />
        </div>
    )
};

