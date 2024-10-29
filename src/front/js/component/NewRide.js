import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ModalPay } from "././Modalpayment";
import { Navbar } from "./navbar";

export const NewRide = () => {
  const { walkerid } = useParams();
  const [domicilio, setDomicilio] = useState("");
  const [horario, setHorario] = useState("");
  const [tipoDePaseo, setTipoDePaseo] = useState("");
  const [walkers, setWalkers] = useState([]);
  const [walkerId, setWalkerId] = useState(walkerid || "");
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchWalkers = async () => {
      try {
        const response = await fetch("https://friendly-chainsaw-4jrp6w575xq2q5px-3001.app.github.dev/api/walkers");
        if (response.ok) {
          const data = await response.json();
          setWalkers(data);
        } else {
          const error = await response.json();
          setErrorMessage(error.msg);
        }
      } catch (error) {
        console.error("Error al cargar los walkers:", error);
        setErrorMessage("Error al cargar los walkers. Inténtalo de nuevo.");
      }
    };

    fetchWalkers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const data = {
      domicilio,
      horario,
      tipo_de_paseo: tipoDePaseo,
      walker_id: Number(walkerId) || null,
    };

    try {

      console.log(typeof domicilio, domicilio);
      console.log(typeof horario, horario);
      console.log(typeof tipoDePaseo, tipoDePaseo);
      console.log(typeof walkerId, walkerId);

      const response = await fetch("https://friendly-chainsaw-4jrp6w575xq2q5px-3001.app.github.dev/api/agendar-paseo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        alert("Paseo agendado con éxito!");
        setShowModal(true);
      } else {
        const error = await response.json();
        alert(error.error || "Error al agendar el paseo.");
      }
    } catch (error) {
      console.error("Error al agendar el paseo:", error);
      alert("Error al agendar el paseo. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="row  gx-5 mt-5 p-5 align-items-center border">
      <Navbar />
      <div className="container-fluid d-flex justify-content-center">
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
                Paseo {tipo} ({tipo === "basico" ? "30 minutos" : tipo === "intermedio" ? "45 minutos" : "60 minutos"})
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
        <div className="mb-3">
          <label className="form-label fw-bold">Selecciona Walker</label>
          <select
            className="form-select"
            value={walkerId}
            onChange={(e) => setWalkerId(e.target.value)}
            required
          >
            <option value="" disabled>Selecciona un walker</option>
            {walkers.length > 0 ? (
              walkers.map((walker) => (
                <option key={walker.id} value={walker.id}>
                  {walker.nombre} {walker.apellido}
                </option>
              ))
            ) : (
              <option>No hay walkers disponibles</option>
            )}
          </select>
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
          <ModalPay />
        </div>
      </form>
    </div>
  );
};
