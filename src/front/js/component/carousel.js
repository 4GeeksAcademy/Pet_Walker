import React from "react";
import { Link } from "react-router-dom";


export const Carousel = () => {
    return (

        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className
                ="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" className
                    ="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className
                    ="carousel-item active">
                    <img style={{ width: '100%', height: '400px', objectFit: 'cover' }} src="https://conmismascotas.com/wp-content/uploads/2022/12/1672166647_Razones-para-contratar-a-un-paseador-de-perros-768x432.jpg" className
                        ="d-block w-100" alt="..." />
                    <div className
                        ="carousel-caption d-none d-md-block ">
                        <h5>Dedicale tiempo sin estar con el</h5>
                        <p>Sabemos que a veces es complicado encontrar tiempo para pasear a tu amigo, pero no te preocupes, nosotros te ayudamos.</p>
                    </div>
                </div>
                <div className
                    ="carousel-item">
                    <img style={{ width: '100%', height: '400px', objectFit: 'cover' }} src="https://transportedemascotas.net/wp-content/uploads/2019/08/Paseador-de-perros.jpg" className
                        ="d-block w-100" alt="..." />
                    <div className
                        ="carousel-caption d-none d-md-block">
                        <h5>Obten un ingreso extra creando momentos increibles a amigos increibles</h5>
                        <p>Conviertete en paseador y mejora tus ingresos y ayuda a dueños a consentir a sus amigos.</p>
                    </div>
                </div>
                <div className
                    ="carousel-item">
                    <img style={{ width: '100%', height: '400px', objectFit: 'cover' }} src="https://www.diariodesevilla.es/2024/01/22/mascotas/paseador-perros-indicado-mascota_1868823531_202046393_667x375.jpg" className
                        ="d-block w-100" alt="..." />
                    <div className
                        ="carousel-caption d-none d-md-block">
                        <h5>Crea momentos</h5>
                        <p>Tus mascotas merecen lo mejor del mundo.</p>
                    </div>
                </div>
            </div>
            <button className
                ="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className
                    ="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className
                    ="visually-hidden">Previous</span>
            </button>
            <button className
                ="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className
                    ="carousel-control-next-icon" aria-hidden="true"></span>
                <span className
                    ="visually-hidden">Next</span>
            </button>
        </div>
    )

};