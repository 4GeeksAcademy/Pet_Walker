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
							<a className="nav-link active textColor" aria-current="page" href="#">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link textColor" href="#">Features</a>
						</li>
						<li className="nav-item">
							<a className="nav-link textColor" href="#">Pricing</a>
						</li>
					</ul>
				</div>
				<div className="login me-3">
					<button className="btnSecondary textColor btn active btn-outline-primary">Registrarme</button>
				</div>
				<div className="login">
					<button className="btnPrimary btn btn-outline-primary">Login</button>
				</div>
			</div>
		</nav>
	)

};

