import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import { ModalPay } from './ModalPay.js';
=======
import { Link, useParams } from "react-router-dom";
>>>>>>> f8153d4c422380f9b641723d651929ff5495cb07



export const NewRide = () => {

  const{walkerid} = useParams();
  
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
          <ModalPay />
        </div>

      </form>



    </div>


  )
}
