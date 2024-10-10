import React from "react";
import { CardWalkers } from "./cardWalkers";
import { Link } from "react-router-dom";


export const CarouselWalkers = () => {
    return (

        <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">

            <div className
                ="carousel-inner">
                <div className
                    ="carousel-item active">
                    <CardWalkers />
                    <CardWalkers />
                </div>
                <div className
                    ="carousel-item">
                    <CardWalkers />
                    <CardWalkers />
                </div>
                <div className
                    ="carousel-item">
                    <CardWalkers />
                    <CardWalkers />
                </div>
            </div>
            <button className
                ="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className
                    ="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className
                    ="visually-hidden">Previous</span>
            </button>
            <button className
                ="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className
                    ="carousel-control-next-icon" aria-hidden="true"></span>
                <span className
                    ="visually-hidden">Next</span>
            </button>
        </div>
    )

};