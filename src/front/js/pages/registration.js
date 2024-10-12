import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useParams } from "react-router-dom";

export const Registration = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center my-5 regBackground">
			<div class="card-body">
				<div className="card d-flex justify-content-center flex-row container-sm">
					<div class="card-body">
					
					<img src="https://images.unsplash.com/photo-1601758124096-1fd661873b95?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nc3xlbnwwfHwwfHx8Mg%3D%3D" className="rounded" width="250" />
							<h5 class="card-title">Quiero registrarme como paseador</h5>
							<p class="card-text">¡Regístrate como paseador y comienza a ofertar tus servicios!</p>
							<Link to="/createProfileWalker">
							<a href="#" className="btn btnPrimary">Registrarme como paseador/a</a>
							</Link>
					</div>
					<div className="vr"></div>
					<div className="card-body">
					<img src="https://images.unsplash.com/photo-1591208333284-825682219525?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded" width="250" />
							<h5 class="card-title my-2">Quiero registrarme como dueño</h5>
							<p class="card-text">¡Regístrate como dueñ@ y descubre paseadores cerca de tu localidad!</p>
							<a href="/createProfileOwner" className="btn btnPrimary">Registrarme como dueño/a</a>
					</div>
				</div>
			</div>
			
		</div>
	);
};
