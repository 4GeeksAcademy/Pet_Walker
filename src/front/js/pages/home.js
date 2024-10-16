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
		<div className="text-center my-5">		
			<Navbar />
			<Jumbotron />
			<Carousel />
			<div className="cards justify-content-around d-flex mb-5">
				<div className="d-flex">
					<CardWalkers />
					<CardWalkers />
				</div>
				<div className="d-flex">
					<CardOwners />
					<CardOwners />
				</div>
			</div>
			<Comments />
		</div>
	);
};
