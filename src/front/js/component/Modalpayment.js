// ModalPay.js
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate , useParams} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './navbar';
import { Context } from "../store/appContext";

export const ModalPay = ({ paseoId, setShowModal }) => {
  const { store, actions } = useContext(Context);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [message, setMessage] = useState('');
  const { walkerid } = useParams();
  const navigate = useNavigate();

  
  useEffect(() => {
    if (walkerid) {
        actions.getWalkerById(walkerid);
    }
}, [walkerid]);


  const handleSubmit = (e) => {
    e.preventDefault();
  //   const token = localStorage.getItem("token");
  //   const data = {
  //     domicilio,
  //     horario,
  //     tipo_de_paseo: tipoDePaseo,
  //     walker_id: Number(walkerid) || null,
  // };
    const successCard = '4141 4141 4141 4141'; // Tarjeta para simular éxito
    const failureCard = '4242 4242 4242 4242'; // Tarjeta para simular fallo

  const handleSubmit = () => {
    // Números de tarjeta para simulación
    const successCard = '4141 4141 4141 4141'; // Tarjeta exitosa
    const failureCard = '4242 4242 4242 4242'; // Tarjeta fallida

    // Validación simple (puedes mejorarla)
    if (cardNumber === successCard) {
      setMessage("¡Pago realizado con éxito! 🎉");
      setTimeout(() => {
        setShowModal(false); 
        navigate(`/pago-exitoso/${paseoId}`); //LLEVARLO A PASE-EXITOSO, SIN EL ID. AHI PONER UN BOTON QUE HAGA UN GET MUESTRE TODOS LOS PASEOS, AHI QUE SE PUEDAN PONER LOS DETALLES
      }, 1500); // Retraso para redirigir después de mostrar el mensaje
    } else if (cardNumber === failureCard) {
      setMessage("Error al realizar el pago 🛑. Intente Nuevamente");
    } else {
      setMessage("Número de tarjeta o datos inválidos.");
    }
  };

  return (
    <div>
      <div className="container mt-5">
        <h1>Simulador de Pagos</h1>
        <div>
          <div className="mb-3">
            <label htmlFor="cardNumber" className="form-label">Número de tarjeta</label>
            <input
              type="text"
              className="form-control"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="Ingresa el número de tarjeta"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="expiryDate" className="form-label">Fecha de vencimiento (MM/AA)</label>
            <input
              type="text"
              className="form-control"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="MM/AA"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cvv" className="form-label">Código CVV</label>
            <input
              type="text"
              className="form-control"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="CVV"
              required
            />
          </div>
          <button 
            type="button" // Cambiar a "button" para evitar el envío del formulario
            className="btn btn-primary my-3" 
            onClick={handleSubmit} // Agregar onClick
          >
            Realizar Pago
          </button>
        </div>
        {message && (
          <div className="mt-3 alert alert-info" role="alert">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};
