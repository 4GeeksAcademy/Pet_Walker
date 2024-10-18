
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useParams } from "react-router-dom";
import { useState } from 'react'
import { Navbar } from "../component/navbar";

export const ProfileWalker = () => {
    const { store, actions } = useContext(Context);
    const [toggle, setToggle] = useState(1)

    function updateToggle(id) {
        setToggle(id)
    }
  



    return (
       
        <div className="my-5 regBackground">
            <div className="my-5">
             <Navbar />
            </div>
            <div className="d-flex my-10">
                    <div className="card d-flex my-5 mx-3 p-2 justify-content flex-row container-sm">
         
                    <div className="mx-2">
                    <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" className="rounded" width="155" />
                    </div>
                    <div className=" text-left my-2 mx-2">
                    <h5 class="card-title">Alex H. Morrison</h5>
                    <p class="card-text">En línea hace <strong>5 semanas</strong>.</p>
                    <p class="card-text">Cuida en <strong>Bogotá, Colombia</strong>.</p>
            
							<a href="#" className="btn btnPrimary"><strong>45</strong> Calificaciones</a>	
                    </div>

                </div>
                   
            </div>
            <div className="card profile-info d-flex align-items-center justify-content-center">
                <div className="col-12 tab p-5">
                    <ul className="d-flex nav nav-tabs">
                        <li className="flex-fill nav-item p-1" onClick={()=>updateToggle(1)}><h5>Acerca de mi</h5></li>
                        <li className="flex-fill nav-item p-1" onClick={()=>updateToggle(2)}><h5>Galería de fotos</h5></li>
                        <li className="flex-fill nav-item p-1" onClick={()=>updateToggle(3)}><h5>Horarios</h5></li>
                    </ul>
                    <div className={toggle === 1 ? "show-content" : "content"}>
                        <h1>Acerca de mi</h1>
                        <h5>Hola! Soy Alex y estaré muy agradecido de que me elijas como tu paseador. 
                            Tengo amplia experiencia en el cuidado de mascotas así como en un diplomado en primeros auxilios.
                            Estoy seguro de que si me escoges, no te arrepentirás.
                        </h5>
                    </div>
                    <div className={toggle === 2 ? "show-content" : "content"}>
                        <h1>Galería de fotos</h1>
                        <div class="card-group border-0">
                        <div class="card border-0 bg-transparent">
                            <img src="https://images.unsplash.com/photo-1601758124277-f0086d5ab050?q=80&w=1820&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded" width="200" />                        </div>
                        <div class="card border-0 bg-transparent">
                            <img src="https://images.unsplash.com/photo-1601758063541-d2f50b4aafb2?q=80&w=2005&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded" width="200" />                        </div>
                        <div class="card border-0 bg-transparent">
                            <img src="https://images.unsplash.com/photo-1601758063890-1167f394febb?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded" width="200" />                        </div>
                      </div>
                    </div>
                    <div className={toggle === 3 ? "show-content" : "content"}>
                        <h1>Horarios</h1>
                        <table>
                                <tr>
                                    <th></th>
                                    <th>Lu</th>
                                    <th>Ma</th>
                                    <th>Mi</th>
                                    <th>Ju</th>
                                    <th>Vi</th>
                                    <th>Sa</th>
                                </tr>
                                <tr>
                                    <td>Mañana</td>
                                    <td>☑</td>
                                    <td>☑</td>
                                    <td>☑</td>
                                    <td>☑</td>
                                    <td>☑</td>
                                    <td>☑</td>
                                </tr>
                                <tr>
                                    <td>Tarde</td>
                                    <td>☑</td>
                                    <td>☑</td>
                                    <td>☑</td>
                                    <td>☑</td>
                                    <td>☑</td>
                                    <td>☑</td>
                                </tr>
                                <tr>
                                    <td>Noche</td>
                                    <td>☒</td>
                                    <td>☑</td>
                                    <td>☒</td>
                                    <td>☑</td>
                                    <td>☒</td>
                                    <td>☒</td>
                                </tr>
                                
                                </table>
                    </div>
                
                </div>
            </div>
        </div>
      

    );
};

