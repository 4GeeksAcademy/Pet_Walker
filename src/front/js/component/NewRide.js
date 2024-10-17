import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";



export const NewRide = () => {

  return (
    <div className="row gy-5 gx-5 p-5 align-items-center border" >
      <div className="container-fluid d-flex justify-content-center ">
        <h1> Agendar nuevo paseo </h1>
      </div>
      <div className="mb-3 p-5 border">
        <label for="exampleInputEmail1" className="form-label fw-bold">Tipo de paseo</label>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
          <label className="form-check-label" for="flexRadioDefault1">
            Paseo básico (30 minutos)
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
          <label className="form-check-label" for="flexRadioDefault2">
            Paseo intermedio (45 minutos)
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
          <label className="form-check-label" for="flexRadioDefault2">
            Paseo largo (60 minutos)
          </label>
        </div>
        </div>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label fw-bold col-sm">Domicilio</label>
          <input type="address" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your information with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" class="form-label fw-bold">Horario</label>
          <input type="time" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">Acepto los términos y condiciones de PetWalker</label>
        </div>
        <div className="button">
        <button type="button" className="btn btn-info fw-bold">Agendar paseo</button>
        </div>
        
      </form>

      
      
    </div>
        

  )
}
