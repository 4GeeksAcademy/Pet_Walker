import React from "react";
import { Link } from "react-router-dom";


export const Carousel = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100"  style={{ width: '100%', height: '400px', objectFit: 'cover' }}  src="https://transportedemascotas.net/wp-content/uploads/2019/08/Paseador-de-perros.jpg" alt="First slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="..." alt="Second slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="..." alt="Third slide"/>
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