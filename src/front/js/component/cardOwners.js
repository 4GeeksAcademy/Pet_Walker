import React from "react";
import { Link } from "react-router-dom";


export const CardOwners = () => {
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-3">
        <div className="d-flex align-items-center">
          <div className="image">
            <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" className="rounded" width="155" />
          </div>
          <div className="ml-3 w-100 p-3 ">
            <div className="textColor ">
              <h4 className="mb-0 mt-0">Alex HMorrision</h4>
              <span>Dueño</span>
            </div>
            <div className="p-2 mt-2  d-flex justify-content-between rounded text-white stats"
              style={{
                backgroundColor: "#ff99ee"
              }}>
              <div className="d-flex flex-column p-2">
                <span className="articles">Mascotas</span>
                <span className="number1">3</span>
              </div>
              <div className="d-flex flex-column p-2">
                <span className="followers">Followers</span>
                <span className="number2">980</span>
              </div>
              <div className="d-flex flex-column p-2">
                <span className="rating">Rating</span>
                <span className="number3">8.9</span>
              </div>
            </div>
            <div className="button mt-2 d-flex flex-row align-items-center gap-2">
              <button className="btn btn-sm  w-100 btnSecondary textColor">Agendar paseo</button>
              <button className="btnPrimary btn btn-sm  w-100 ml-2">Follow</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};