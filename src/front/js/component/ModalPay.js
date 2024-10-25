import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";



export const ModalPay = () => {

    const [button1, setButton1] = useState(false);
    const alerta = () => {
        if (button1 === true) {
            console.log("prueba")
            toast.success("¡Pago realizado con éxito! 🎉");
        } else {
            console.log("prueba2")
            toast.error("Error al registrar al dueño 🛑");
        }
    };
    return (

        <div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Agendar paseo
            </button>


            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Datos de la tarjeta</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form id="payment-form">
                                <div className="input-group input-group-sm mb-3">
                                    <input type="text" placeholder="Número de tarjeta" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                </div>
                                <div className="input-group input-group-sm mb-3">
                                    <input type="text" placeholder="Fecha de expiración" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                </div>
                                <div className="input-group input-group-sm mb-3">
                                    <input type="text" placeholder="CVV" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                </div>
                                <button type="button" class="btn btn-primary" onClick={() => { setButton1(true); alerta(); }}>Pagar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}