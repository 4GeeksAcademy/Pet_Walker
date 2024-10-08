import React from "react";
import { Link } from "react-router-dom";


export const Jumbotron = () => {
    return (

        <div className="jumbotron p-2 text-center mt-5 ">
            <h1 className="display-4">Tu mascota merece lo mejor</h1>
            <p className="lead">Sabemos que no siempre se tiene tiempo para pasear a tu querido amigo y nosotros estamos para darle lo mejor mientras tu te esfuerzas por cuidarlo.</p>
            <hr className="my-4" />
            <p>Muchas cosas muchas cosas.</p>
            <p className="lead">
                <a className="btn btn-danger btn-lg justify-content-center" href="#" role="button">Learn more</a>
            </p>
        </div>
    )
};

