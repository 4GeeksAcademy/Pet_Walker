import React from "react";
import { Link } from "react-router-dom";


export const Carousel = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel " >
            <div className="carousel-inner">
                <div className="carousel-item active">                    
                    <img className="d-block w-100"  style={{ width: '100%', height: '400px', objectFit: 'cover' }}  src="https://transportedemascotas.net/wp-content/uploads/2019/08/Paseador-de-perros.jpg" alt="First slide"/>
                    <div className="carousel-caption d-none d-md-block">
                    <h1>Paseador de perros</h1>
                        <p>Encuentra al tuyo</p>
                        </div> 
                </div>
                <div className="carousel-item active">
                <img className="d-block w-100"  style={{ width: '100%', height: '400px', objectFit: 'cover' }}  src="https://www.diariodesevilla.es/2024/01/22/mascotas/paseador-perros-indicado-mascota_1868823531_202046393_667x375.jpg" alt="First slide"/>
                <div className="carousel-caption d-none d-md-block">
                    <h1>Paseador de perros</h1>
                        <p>Encuentra al tuyo</p>
                        </div>
                </div>
                <div className="carousel-item active ">
                <img className="d-block w-100 "  style={{ width: '100%', height: '400px', objectFit: 'cover' }}  src="https://conmismascotas.com/wp-content/uploads/2022/12/1672166647_Razones-para-contratar-a-un-paseador-de-perros-768x432.jpg" alt="First slide"/>
                <div className="carousel-caption d-none d-md-block">
                    <h1>Paseador de perros</h1>
                        <p>Encuentra al tuyo</p>
                        </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
};