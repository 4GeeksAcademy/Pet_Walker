import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light justify-content-between p-2 ">
			<a className="navbar-brand text-align-center">Petwalker</a>


			<button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Login</button>

		</nav>
	)

};

