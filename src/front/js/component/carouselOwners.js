import React from "react";
import { CardOwners } from "./cardOwners";
import { Link } from "react-router-dom";


export const CarouselOwners = () => {
    return (

        <div id="carousel" class="carousel slide" data-bs-ride="carousel">
            <div className
                ="carousel-inner">
                <div className
                    ="carousel-item active">
                    <CardOwners />
                    <CardOwners />
                </div>
                <div className
                    ="carousel-item">
                    <CardOwners />
                    <CardOwners />
                </div>
                <div className
                    ="carousel-item">
                    <CardOwners />
                    <CardOwners />
                </div>
            </div>
            <button className
                ="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                <span className
                    ="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className
                    ="visually-hidden">Previous</span>
            </button>
            <button className
                ="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                <span className
                    ="carousel-control-next-icon" aria-hidden="true"></span>
                <span className
                    ="visually-hidden">Next</span>
            </button>
        </div>
    )

};