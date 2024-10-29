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
                <div className="carousel-item active">
                    <div className="row g-0">
                        <div className="col-md-5 d-flex align-items-start" style={{ backgroundColor: "#499587", color: "white" }}>
                            <div className="p-4 text-start w-100">
                                <h5 className="primaryText">¡Únete a la comunidad que transforma los paseos de perros!</h5>
                                <p className="secondaryText" style={{color:"#ffffff"}}>En Pet Walker, no solo paseamos perros, creamos conexiones. Dueños y paseadores 
                                    forman parte de una comunidad comprometida con el bienestar de las mascotas. Ya seas un paseador que quiere 
                                    crecer o un dueño que busca confianza y calidad, aquí encontrarás todo lo que necesitas. Comparte experiencias, recibe recomendaciones, y disfruta de una app donde el amor por los perros nos une. ¡Sé parte del cambio y crece junto a Pet Walker!</p>
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

                <div className="carousel-item">
                    <div className="row g-0">
                        <div className="col-md-5 d-flex align-items-start" style={{ backgroundColor: "#499587", color: "white" }}>
                            <div className="p-4 text-start w-100">
                                <h5 className="primaryText">El paseo ideal para tu perro, en manos de paseadores verificados</h5>
                                <p className="secondaryText" style={{color:"#ffffff"}}>Cada perro es único, y nuestros paseadores ajustan el paseo a las necesidades de tu mascota. Elige entre paseadores de confianza con reseñas verificadas por otros dueños. ¡Agenda con tranquilidad y dale a tu perro la mejor experiencia!</p>
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

                <div className="carousel-item">
                    <div className="row g-0">
                        <div className="col-md-5 d-flex align-items-start" style={{ backgroundColor: "#499587", color: "white" }}>
                            <div className="p-4 text-start w-100">
                                <h5 className="primaryText">Mucho más que un paseo: entrenamiento y bienestar</h5>
                                <p className="secondaryText" style={{color:"#ffffff"}}>Algunos paseadores ofrecen servicios adicionales, como entrenamiento básico o juegos de estimulación. Además, recibirás un informe detallado del paseo de tu perro, incluyendo la ruta y el comportamiento. ¡Siempre informado, siempre tranquilo!</p>
                            </div>
                        </div>
                        <div className="col-md-7 position-relative">
                            <img style={{ width: '100%', height: '400px', objectFit: 'cover' }} src="https://www.diariodesevilla.es/2024/01/22/mascotas/paseador-perros-indicado-mascota_1868823531_202046393_667x375.jpg" className="d-block w-100" alt="..." />
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

                <div className="carousel-item">
                    <div className="row g-0">
                        <div className="col-md-5 d-flex align-items-start" style={{ backgroundColor: "#499587", color: "white" }}>
                            <div className="p-4 text-start w-100">
                                <h5 className="primaryText">¡Paseador, accede a más clientes y ofrece tus servicios únicos!</h5>
                                <p className="secondaryText" style={{color:"#ffffff"}}>Con Pet Walker, llegarás a más dueños de perros en tu área, ampliando tu red de clientes. Además, podrás personalizar tu perfil destacando tus habilidades: desde paseos básicos hasta entrenamiento y cuidados especiales. ¡Haz que tu experiencia te diferencie!</p>
                            </div>
                        </div>
                        <div className="col-md-7 position-relative">
                            <img style={{ width: '100%', height: '400px', objectFit: 'cover' }} src="https://www.elblogdeuma.com/wp-content/uploads/2021/11/Diseno-sin-titulo-2021-11-19T153917.202.jpg" className="d-block w-100" alt="..." />
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

                <div className="carousel-item">
                    <div className="row g-0">
                        <div className="col-md-5 d-flex align-items-start" style={{ backgroundColor: "#499587", color: "white" }}>
                            <div className="p-4 text-start w-100">
                                <h5 className="primaryText">Gana a tu ritmo y construye tu reputación</h5>
                                <p className="secondaryText" style={{color:"#ffffff"}}>Organiza tu semana con total flexibilidad y deja que los dueños elijan los horarios que mejor se adapten a tu agenda. Cuantas más reseñas positivas recibas, más clientes atraerás. ¡Gana más mientras creces como paseador profesional!</p>
                            </div>
                        </div>
                        <div className="col-md-7 position-relative">
                            <img style={{ width: '100%', height: '400px', objectFit: 'cover' }} src="https://images.ctfassets.net/denf86kkcx7r/bznjhzzOjSzEqqZtSeDJ0/9f307c668f28dfa5a8f36a2f8d7c33e5/paseoperro-33?fm=webp&w=612" className="d-block w-100" alt="..." />
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
            </div>
        </div>
    );
};
