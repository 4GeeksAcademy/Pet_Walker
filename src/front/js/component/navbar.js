import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (

		<nav className="navbarPrueba navbar navbar-light border-bottom border-2 justify-content-between p-2 fixed-top ">
			<a className="navbar-brand text-center text-monospace ">Petwalker</a>


			<div className="gap-2">
				<button className="btn btn-outline-danger my-2 my-sm-0 " type="submit">Registrarme</button>
				<button className="btn btn-outline-danger my-2 my-sm-0 " type="submit">Login</button>
			</div>


		</nav>
	)

};

