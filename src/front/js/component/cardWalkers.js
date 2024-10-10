import React from "react";
import { Link } from "react-router-dom";
import "./../../../front/styles/home.css"


export const CardWalkers = () => {
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-3">
        <div className="d-flex align-items-center">
          <div className="image">
            <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" className="rounded" width="155" />
          </div>
          <div className="ml-3 w-100 p-3 ">
            <div className="textColor">
              <h4 className="mb-0 mt-0">Alex HMorrision</h4>
              <span>Paseador</span>
            </div>
            <div className="p-2 mt-2 d-flex justify-content-between rounded text-white stats"
              style={{
                backgroundColor: "#ffc05c"
              }}>
              <div className="d-flex flex-column p-2">
                <span className="articles">Paseos</span>
                <span className="number1">569</span>
              </div>
              <div className="d-flex flex-column p-2">
                <span className="followers">Followers</span>
                <span className="number2">980</span>
              </div>
              <div className="container-fluid d-flex-column p-2 ">
                <div className="d-flex flex-column ">
                  <span className="rating ">Rating</span>
<<<<<<< HEAD
                  </div>
                
                <div className="rating-container-fluid d-flex">
                  <i class="fa fa-star rating-color"></i>
                  <i class="fa fa-star rating-color"></i>
                  <i class="fa fa-star rating-color"></i>
                  <i class="fa fa-star rating-color"></i>
                  <i class="fa fa-star"></i>
=======
                  <span className="number3">8.9</span>
>>>>>>> d2b1fec768962629bd9a61174e1ff06b73f69f17
                </div>


              </div>
            </div>
            <div className="button mt-2 d-flex flex-row align-items-center gap-2 ">
              <button className="btn btn-sm btn-outline-danger w-100 btnSecondary textColor ">Agendar paseo</button>
              <button className="btnPrimary btn btn-sm w-100 ml-2 ">Follow</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};