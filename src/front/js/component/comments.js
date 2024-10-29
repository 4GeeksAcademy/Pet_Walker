import React from "react";
import { Link } from "react-router-dom";

export const Comments = () => {
    return (

        <div className="container-fluid  d-flex justify-content-center">

           <div className="card mx-2 my-4" style={{ border: "2px solid #E7F8F3", borderRadius: "0.25rem" }}>
                <div className="card-body">
                    <h4 className="card-title">Francisco</h4>
                    <h5 className="card-subtitle mb-2 text-muted">Paseador</h5>
                    <p className="card-text">"En ocasiones me encuentro saturado y entonces puedo remitir a otro compañero cuando me ofrecen un cliente."</p>
                </div>
            </div>
            
            <div className="card mx-2 my-4" style={{ border: "2px solid #E7F8F3", borderRadius: "0.25rem" }}>
                <div className="card-body">
                    <h4 className="card-title">Alejandra</h4>
                    <h5 className="card-subtitle mb-2 text-muted">Dueña</h5>
                    <p className="card-text">"Es muy fácil encontrar paseadores y estar en contacto con ellos. Además, las experiencias con otros usuarios hace fácil elegir."</p>
                </div>
            </div>
            <div className="card mx-2 my-4" style={{ border: "2px solid #E7F8F3", borderRadius: "0.25rem" }}>
                <div className="card-body">
                    <h4 className="card-title">Fernando</h4>
                    <h5 className="card-subtitle mb-2 text-muted">Dueño</h5>
                    <p className="card-text">"Mi paseador fue muy atento y en todo momento estuvo contacto conmigo el primer día"</p>
                </div>
            </div>
        </div>
)
};