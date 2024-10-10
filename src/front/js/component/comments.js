import React from "react";
import { Link } from "react-router-dom";

export const Comments = () => {
    return (

        <div className="container-fluid my-5  d-flex justify-content-center  ">

           <div class="card mx-2">
                <div class="card-body">
                    <h5 class="card-title">Francisco</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Paseador</h6>
                    <p class="card-text">"En ocasiones me encuentro saturado y entonces puedo remitir a otro compañero cuando me ofrecen un cliente."</p>
                </div>
            </div>
            <div class="card mx-2">
                <div class="card-body">
                    <h5 class="card-title">Alejandra</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Dueña</h6>
                    <p class="card-text">"Es muy fácil encontrar paseadores y estar en contacto con ellos. Además, las experiencias con otros usuarios hace fácil elegir."</p>
                </div>
            </div>
            <div class="card mx-2">
                <div class="card-body">
                    <h5 class="card-title">Fernando</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Dueño</h6>
                    <p class="card-text">"Mi paseador fue muy atento y en todo momento estuvo contacto conmigo el primer día"</p>
                </div>
            </div>
        </div>
)
};