import React from "react";
import { Link } from "react-router-dom";


export const Carousel = () => {
    return (

        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div className
                ="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className
                    ="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className
                ="carousel-inner">
                <div className
                    ="carousel-item active">
                    <img style={{ width: '100%', height: '400px', objectFit: 'cover' }} src="https://conmismascotas.com/wp-content/uploads/2022/12/1672166647_Razones-para-contratar-a-un-paseador-de-perros-768x432.jpg" className
                        ="d-block w-100" alt="..." />
                    <div className
                        ="carousel-caption d-none d-md-block prueba" >
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div className
                    ="carousel-item">
                    <img style={{ width: '100%', height: '400px', objectFit: 'cover' }} src="https://transportedemascotas.net/wp-content/uploads/2019/08/Paseador-de-perros.jpg" className
                        ="d-block w-100 text-center" alt="..." />

                    <div className
                        ="carousel-caption d-none d-md-block prueba"
                    >
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div className
                    ="carousel-item">
                    <img style={{ width: '100%', height: '400px', objectFit: 'cover' }} src="https://www.diariodesevilla.es/2024/01/22/mascotas/paseador-perros-indicado-mascota_1868823531_202046393_667x375.jpg" className
                        ="d-block w-100" alt="..." />
                    <div className
                        ="carousel-caption d-none d-md-block prueba">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
            </div>
            <button className
                ="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className
                    ="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className
                    ="visually-hidden">Previous</span>
            </button>
            <button className
                ="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className
                    ="carousel-control-next-icon" aria-hidden="true"></span>
                <span className
                    ="visually-hidden">Next</span>
            </button>
        </div>
    )

};