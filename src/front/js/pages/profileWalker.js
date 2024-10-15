
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useParams } from "react-router-dom";
import { Navbar } from "../component/navbar";


export const ProfileWalker = () => {
    const { store, actions } = useContext(Context);

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
            <h5 className="card d-flex my-2 mx-3 p-2 justify-content flex-row container-sm">Galería de fotos</h5>
                <div className="card d-flex my-2 mx-2 justify-content-between container-sm">
                    <div className="card-group border-0 my-2">
                    
                        <div class="border-0">
                            <img src="https://images.unsplash.com/photo-1601758176481-e81a6b713126?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded mx-2 my-2" width="250" />
                        </div>
                        <div class="border-0">
                            <img src="https://images.unsplash.com/photo-1601758063890-1167f394febb?q=80&w=2602&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded mx-2 my-2 " width="250" />
                        </div>
                        <div class="border-0">
                            <img src="https://images.unsplash.com/photo-1533404367653-794d4cecb66c?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded mx-2 my-2" width="250" />
                        </div>
                        <div class="border-0">
                            <img src="https://images.unsplash.com/photo-1517443191895-202c31142ccd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded mx-2 my-2" width="250" />
                        </div>
                      </div>
            
							
                    </div>
        </div>
      

    );
};

