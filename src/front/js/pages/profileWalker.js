
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";


export const Profilewalker = () => {

    return (
        <div className="container">
            <Navbar />
            <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-3 mt-4">
                    <div className="card">
                        <img className="card-img-top" src="https://picsum.photos/200/150/?random" alt="Card image" />
                        <div className="card-block">
                            <figure className="profile">
                                <img src="https://picsum.photos/200/150/?random" className="profile-avatar" alt="Avatar" />
                            </figure>
                            <h4 className="card-title mt-3">Tawshif Ahsan Khan</h4>
                            <div className="meta">
                                <a href="#">Friends</a>
                            </div>
                            <div className="card-text">
                                Tawshif is a web designer living in Bangladesh.
                            </div>
                        </div>
                        <div className="card-footer">
                            <small>Last updated 3 mins ago</small>
                            <button className="btn btn-secondary float-right btn-sm">Show</button>
                        </div>
                        <div className="card-footer tab-card-header">
                            <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link" id="one-tab" data-toggle="tab" href="#one" role="tab" aria-controls="one" aria-selected="true">One</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="two-tab" data-toggle="tab" href="#two" role="tab" aria-controls="two" aria-selected="false">Two</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="three-tab" data-toggle="tab" href="#three" role="tab" aria-controls="three" aria-selected="false">Three</a>
                                </li>
                            </ul>
                        </div>

                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active p-3" id="one" role="tabpanel" aria-labelledby="one-tab">
                                <h5 className="card-title">Acerca de mí</h5>
                                <p className="card-text">Descripción de acerca de mí</p>
                                <a href="#" className="btn btn-primary">Botón opcional</a>
                            </div>
                            <div className="tab-pane fade p-3" id="two" role="tabpanel" aria-labelledby="two-tab">
                                <h5 className="card-title">Mis servicios</h5>
                                <p className="card-text">LISTA DE MIS SERVICIOS</p>
                            </div>
                            <div className="tab-pane fade p-3" id="three" role="tabpanel" aria-labelledby="three-tab">
                                <h5 className="card-title">Fotos de mis paseos</h5>
                                <p className="card-text">Desplegado de fotos</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profilewalker;