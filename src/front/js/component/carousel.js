import React from "react";
import { Link } from "react-router-dom";

export const Carousel = () => {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel"
        style={{ border: "2px solid #499587", borderRadius: "0.25rem", position: "relative" }}
    >
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        
        <div className="carousel-inner">
            {/* First Slide */}
            <div className="carousel-item active">
                <div className="row g-0">
                    <div className="col-md-5 d-flex align-items-start" style={{ backgroundColor: "#499587", color: "white" }}>
                        <div className="p-4 text-start w-100">
                            <h5 className="primaryText">¡Únete a la comunidad que transforma los paseos de perros!</h5>
                            <p className="secondaryText">En Pet Walker, no solo paseamos perros, creamos conexiones. Dueños y paseadores 
                                forman parte de una comunidad comprometida con el bienestar de las mascotas. Ya seas un paseador que quiere 
                                crecer o un dueño que busca confianza y calidad, aquí encontrarás todo lo que necesitas. 
                                Comparte experiencias, recibe recomendaciones, y disfruta de una app donde el amor por los perros nos une. 
                                ¡Sé parte del cambio y crece junto a Pet Walker!</p>
                        </div>
                    </div>
                    <div className="col-md-7 position-relative">
                        <img style={{ width: '100%', height: '400px', objectFit: 'cover' }} src="https://conmismascotas.com/wp-content/uploads/2022/12/1672166647_Razones-para-contratar-a-un-paseador-de-perros-768x432.jpg" className="d-block w-100" alt="..." />
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev" style={{ position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)", zIndex: "1" }}>
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next" style={{ position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)", zIndex: "1" }}>
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Repeat for other slides */}
            {/* Second Slide */}
            <div className="carousel-item">
                <div className="row g-0">
                    <div className="col-md-5 d-flex align-items-start" style={{ backgroundColor: "#499587", color: "white" }}>
                        <div className="p-4 text-start w-100">
                            <h5 className="primaryText">El paseo ideal para tu perro, en manos de paseadores verificados</h5>
                            <p className="secondaryText">Cada perro es único, y nuestros paseadores ajustan el paseo a las necesidades de tu mascota. 
                                Elige entre paseadores de confianza con reseñas verificadas por otros dueños.
                                ¡Agenda con tranquilidad y dale a tu perro la mejor experiencia!</p>
                        </div>
                    </div>
                    <div className="col-md-7 position-relative">
                        <img style={{ width: '100%', height: '400px', objectFit: 'cover' }} src="https://transportedemascotas.net/wp-content/uploads/2019/08/Paseador-de-perros.jpg" className="d-block w-100" alt="..." />
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev" style={{ position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)", zIndex: "1" }}>
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next" style={{ position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)", zIndex: "1" }}>
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Additional slides with the same structure */}
        </div>
    </div>    
    )
};

