import React, { useState } from 'react';
import toast from "react-hot-toast";

export const ModalPay = ({ setShowModal }) => {
    const [button1, setButton1] = useState(false);

    const alerta = () => {
        if (button1) {
            toast.success("¡Pago realizado con éxito! 🎉");
            setShowModal(false);
        } else {
            toast.error("Error al realizar el pago 🛑");
        }
    };

    return (
        <div className="modal fade show" style={{ display: 'block' }} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Datos de la tarjeta</h1>
                        <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                    </div>
                    <div className="modal-body">
                        <form id="payment-form">
                            <div className="input-group input-group-sm mb-3">
                                <input type="text" placeholder="Número de tarjeta" className="form-control" />
                            </div>
                            <div className="input-group input-group-sm mb-3">
                                <input type="text" placeholder="Fecha de expiración" className="form-control" />
                            </div>
                            <div className="input-group input-group-sm mb-3">
                                <input type="text" placeholder="CVV" className="form-control" />
                            </div>
                            <button type="button" className="btn btn-primary" onClick={() => { setButton1(true); alerta(); }}>Pagar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
