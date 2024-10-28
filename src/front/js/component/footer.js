import React, { Component } from "react";

export const Footer = () => (
	<footer class="bg-dark text-white mt-5 " >
		<div class="container py-4">
			<div class="row">
				<div class="col-md-4">
					<h5>SOBRE NOSOTROS</h5>
					<p>Somos una empresa dedicada a ofrecer los mejores servicios de calidad en el sector. Nuestro compromiso es con la satisfacción del cliente y la innovación constante.</p>
				</div>
				<div class="col-md-4">
					<h5>Contacto</h5>
					<p><strong>Teléfono:</strong> +1 234 567 890</p>
					<p>
						<a href="https://www.instagram.com/tu_instagram" target="_blank" class="text-white">
							<i class="fab fa-instagram"></i> Instagram
						</a>
					</p>
				</div>
				<div class="col-md-4">
					<h5>Redes Sociales</h5>
					<ul class="list-unstyled">
						<li>
							<a href="https://www.instagram.com/tu_instagram" target="_blank" class="text-white">Instagram</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="text-center mt-4">
				<small>&copy; 2024 PetWalker. Todos los derechos reservados.</small>
			</div>
		</div>
	</footer>
);
