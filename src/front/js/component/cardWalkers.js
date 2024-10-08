import React from "react";
import { Link } from "react-router-dom";


export const CardWalkers = () => {
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-3">
        <div className="d-flex align-items-center">
          <div className="image">
            <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" className="rounded" width="155" />
          </div>
          <div className="ml-3 w-100 p-3 ">
            <h4 className="mb-0 mt-0">Alex HMorrision</h4>
            <span>Paseador</span>
            <div className="p-2 mt-2 bg-danger d-flex justify-content-between rounded text-white stats">
              <div className="d-flex flex-column p-2">
                <span className="articles">Paseos</span>
                <span className="number1">569</span>
              </div>
              <div className="d-flex flex-column p-2">
                <span className="followers">Followers</span>
                <span className="number2">980</span>
              </div>
              <div className="d-flex p-2 ">
                <span className="rating ">Rating</span>
                <div className="rating-container">
                  <i class="fa fa-star rating-color"></i>
                  <i class="fa fa-star rating-color"></i>
                  <i class="fa fa-star rating-color"></i>
                  <i class="fa fa-star rating-color"></i>
                  <i class="fa fa-star"></i>
                </div>
                
                
              </div>
            </div>
            <div className="button mt-2 d-flex flex-row align-items-center">
              <button className="btn btn-sm btn-outline-danger w-100">Agendar paseo</button>
              <button className="btn btn-sm btn-danger w-100 ml-2">Follow</button>
            </div>
          </div>
        </div>
       </div>
    </div>
  )
};