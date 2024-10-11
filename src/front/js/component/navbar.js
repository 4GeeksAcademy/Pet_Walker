import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
		<nav className="navbarPrueba navbar navbar-expand-lg bg-body-tertiary fixed-top border-bottom border-2">
			<div className="container-fluid">
				<a className="navbar-brand textColor" href="#">Pet Walker</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse " id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link active textColor" aria-current="page" href="#">Inicio</a>
						</li>
						<li className="nav-item">
							<a className="nav-link textColor" href="#">Walkers</a>
						</li>
						<li className="nav-item">
							<a className="nav-link textColor" href="#">Dueños</a>
						</li>
					</ul>
				</div>
				<div className="login me-3" >
					<Link to="/createProfileOwner"> 
					<button className="btnSecondary textColor btn  btn-outline-primary">Registrarme</button>
					</Link>
				</div>
				<div className="login">
					<button className="btnPrimary btn btn-outline-primary">Login</button>
				</div>
			</div>
		</nav>
	)

};

