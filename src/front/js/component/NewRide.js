import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ModalPay } from './ModalPay.js';
import { Link, useParams } from "react-router-dom";

export const NewRide = () => {
  const { walkerid } = useParams();
  const [domicilio, setDomicilio] = useState("");
  const [horario, setHorario] = useState("");
  const [tipoDePaseo, setTipoDePaseo] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const data = {
      domicilio,
      horario,
      tipo_de_paseo: tipoDePaseo,
      walker_id: walkerid || null,
    };

    try {
      const response = await fetch("https://friendly-chainsaw-4jrp6w575xq2q5px-3001.app.github.dev/api/agendar-paseo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,  // Asegúrate de que el token esté aquí
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        alert("Paseo agendado con éxito!");
        console.log(result);
      } else {
        const error = await response.json();
        alert(error.msg);
      }
    } catch (error) {
      console.error("Error al agendar el paseo:", error);
      alert("Error al agendar el paseo. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="row gy-5 gx-5 p-5 align-items-center border">
      <div className="container-fluid d-flex justify-content-center ">
        <h1> Agendar nuevo paseo </h1>
      </div>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3 p-5 border">
          <label className="form-label fw-bold">Tipo de paseo</label>
          {["básico", "intermedio", "largo"].map((tipo) => (
            <div className="form-check" key={tipo}>
              <input
                className="form-check-input"
                type="radio"
                name="tipoDePaseo"
                value={tipo}
                onChange={(e) => setTipoDePaseo(e.target.value)}
                required
              />
              <label className="form-check-label">
                Paseo {tipo} ({tipo === "básico" ? "30 minutos" : tipo === "intermedio" ? "45 minutos" : "60 minutos"})
              </label>
            </div>
          ))}
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Domicilio</label>
          <input
            type="text"
            className="form-control"
            value={domicilio}
            onChange={(e) => setDomicilio(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Horario</label>
          <input
            type="time"
            className="form-control"
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            required
          />
          <label className="form-check-label">Acepto los términos y condiciones de PetWalker</label>
        </div>
        <div className="button">
          <button type="submit" className="btn btn-info fw-bold">Agendar paseo</button>
        </div>
      </form>
    </div>
  );
};
