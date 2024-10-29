import React from "react";
import { Link } from "react-router-dom";

export const CardOwners = () => {
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-3" style={{ border: "2px solid #499587" }}>
        <div className="d-flex align-items-center">
          <div className="image">
            <img src="https://img.freepik.com/free-photo/worldface-spanish-guy-white-background_53876-137665.jpg?t=st=1730161298~exp=1730164898~hmac=5b0321e1bbedac1639804272dcf866b6fc65758962bab6547bef9cbc9318f8e2&w=1380" className="rounded border" width="155" />
          </div>
          <div className="ml-3 w-100 p-3 ">
            <div className="textColor ">
              <h4 className="mb-0 mt-0">Alex HMorrision</h4>
              <span>Dueño</span>
            </div>
            <div className="p-2 mt-2  d-flex justify-content-between rounded text-white stats"
              style={{
                backgroundColor: "#76c9b2"
              }}>
              <div className="d-flex flex-column p-2">
                <span className="articles">Mascotas</span>
                <span className="number1">3</span>
              </div>
              <div className="d-flex flex-column p-2">
                <span className="followers">Distrito</span>
                <span className="number2">Perú</span>
              </div>
              <div className="d-flex flex-column p-2">
                <span className="rating">Comentarios</span>
                <span className="number3">8</span>
              </div>
            </div>
            <div className="button mt-2 d-flex flex-row align-items-center gap-2 ">
              <button className="btn btn-sm  w-100 btnSecondary textColor">Ver perfil</button>
              <button className="btnPrimary btn btn-sm  w-100 ml-2">Follow</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};