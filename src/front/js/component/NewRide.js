// NewRide.js
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ModalPay } from "././Modalpayment";
import { Navbar } from "../component/navbar";
import { Context } from "../store/appContext";
import { ToastContainer, toast } from "react-toastify";

export const NewRide = () => {
    const { walkerid } = useParams();
    const { store, actions } = useContext(Context);
    const [domicilio, setDomicilio] = useState("");
    const [horario, setHorario] = useState("");
    const [tipoDePaseo, setTipoDePaseo] = useState("");
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (walkerid) {
            actions.getWalkerById(walkerid);
        }
    }, [walkerid]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");

        const data = {
            domicilio,
            horario,
            tipo_de_paseo: tipoDePaseo,
            walker_id: Number(walkerid) || null,
        };

        try {
            const response = await fetch(`${process.env.BACKEND_URL}/api/agendar-paseo`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                toast.success("Paseo agendado con éxito!");
                setShowModal(true);
            } else {
                const error = await response.json();
                toast.error(error.error || "Error al agendar el paseo.");
            }
        } catch (error) {
            console.error("Error al agendar el paseo:", error);
            toast.error("Error al agendar el paseo. Inténtalo de nuevo.");
        }
    };

    return (
        <div className="row gx-5 mt-5 p-5 align-items-center border">
            <Navbar />
            <div className="container-fluid d-flex justify-content-center">
                <h1>Agendar nuevo paseo</h1>
            </div>
            {store.walker && (
                <div className="mb-3">
                    <h5>Paseador:</h5>
                    <p>{store.walker.nombre} {store.walker.apellido}</p>
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-3 p-5 border">
                    <label className="form-label fw-bold">Tipo de paseo</label>
                    {["basico", "intermedio", "largo"].map((tipo) => (
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
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" required />
                    <label className="form-check-label">Acepto los términos y condiciones de PetWalker</label>
                </div>
                <div className="button">
                    <button type="submit" className="btn btn-info fw-bold" >Agendar paseo</button>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <ModalPay />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            {showModal && <ModalPay setShowModal={setShowModal} />}
        </div>
    );
};
