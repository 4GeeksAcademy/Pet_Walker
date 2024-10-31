import React from "react";

export const Footer = () => (
	<footer className="bg-dark text-white">
		<div className=" py-4">
			<div className="d-flex justify-content-around">
				<div className="col-3">
					<h5>SOBRE NOSOTROS</h5>
					<p>Somos una empresa dedicada a ofrecer los mejores servicios de calidad en el sector. Nuestro compromiso es con la satisfacción del cliente y la innovación constante.</p>
				</div>
				<div className="col-3 text-center">
					<h5>Contacto</h5>
					<p><strong>Teléfono:</strong> +1 234 567 890</p>
					<p>
						<a href="https://www.instagram.com/tu_instagram" target="_blank" className="text-white">
							<i className="fab fa-instagram"></i> Instagram
						</a>
					</p>
				</div>
				<div className="col-3 text-center">
					<h5>Redes Sociales</h5>
					<ul className="list-unstyled">
						<li>
							<a href="https://www.instagram.com/tu_instagram" target="_blank" className="text-white">Instagram</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="text-center mt-4">
				<small>&copy; 2024 PetWalker. Todos los derechos reservados.</small>
			</div>
		</div>
	</footer>
);