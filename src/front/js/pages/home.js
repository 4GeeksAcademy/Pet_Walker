import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useParams } from "react-router-dom";
import { CardOwners } from "../component/cardOwners";
import { CardWalkers } from "../component/cardWalkers";
import { Carousel } from "../component/carousel";
import { Comments } from "../component/comments";
import { Jumbotron } from "../component/Jumbotron";
import { Footer } from "../component/footer";
import { Navbar } from "../component/navbar";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center profile-info">
			<Navbar />
			<Jumbotron />
			<Carousel />
			<div className="cards justify-content-around d-flex">
				<div className="d-flex">
					<CardWalkers />
					<CardOwners />
				</div>
			</div>
			<Comments />
		</div>
	);
};
