import React from "react";
import { Link } from "react-router-dom";
import NewRide from "./NewRide";


export const CardWalkers = () => {
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-3" style={{ border: "2px solid #499587" }}>
        <div className="d-flex align-items-center">
          <div className="image">
            <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" className="rounded border" width="155" />
          </div>
          <div className="ml-3 w-100 p-3 ">
            <div className="textColor ">
              <h4 className="mb-0 mt-0">Oliver Johnson</h4>
              <span>Paseador</span>
            </div>
            <div className="p-2 mt-2  d-flex justify-content-between rounded text-white stats"
              style={{
                backgroundColor: "#76c9b2"
              }}>
              <div className="d-flex flex-column p-2">
                <span className="articles">Paseos</span>
                <span className="number1">569</span>
              </div>
              <div className="d-flex flex-column p-2">
                <span className="followers">Distrito</span>
                <span className="number2">Colombia</span>
              </div>
              <div className="d-flex flex-column p-2">
                <span className="rating ">Rating</span>
                <span className="number3">8.9</span>
              </div>
            </div>
            
            <div className="button mt-2 d-flex flex-row align-items-center gap-2">

              <button className="btn btnSecondary w-50 btn-sm textColor">Ver perfil</button>
              <Link to="/NewRide">
              <button className="btnPrimary btn-sm w-100 btn">Agendar paseo</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};