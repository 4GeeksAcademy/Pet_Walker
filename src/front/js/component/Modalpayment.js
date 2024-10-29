import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ModalPay = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Números de tarjeta para simulación
    const successCard = '4111111111111111'; // Tarjeta exitosa
    const failureCard = '4000000000000002'; // Tarjeta fallida

    // Validación simple (puedes mejorarla)
    if (cardNumber === successCard) {
      setMessage('"¡Pago realizado con éxito! 🎉"');
    } else if (cardNumber === failureCard) {
      setMessage('Error al realizar el pago 🛑. Intente Nuevamente');
    } else {
      setMessage('Número de tarjeta o datos inválidos.');
    }
  };

  return (

    <div>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Agendar paseo
      </button>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div className="container mt-5">
              <h1>Simulador de Pagos</h1>
              <form onSubmit={handleSubmit}>
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
                <button type="submit" className="btn btn-primary my-3">Realizar Pago</button>
              </form>
              {message && (
                <div className="mt-3 alert alert-info" role="alert">
                  {message}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>


    </div>

  );
};


// Exportar el componente