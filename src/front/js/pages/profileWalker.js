import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import { AddHabilidad } from "../component/addHabilidad";
import uploadImage from "../../../firebase";

export const ProfileWalker = () => {
    const { store, actions } = useContext(Context);
    const [toggle, setToggle] = useState(1);
    const [selectedHabilidades, setSelectedHabilidades] = useState([]);
    const [walkerImgData, setwalkerImgData] = useState(null);
    const [bio, setBio] = useState(store.user?.bio || "");
    const [schedule, setSchedule] = useState(store.user?.horarios || {
        lunes: { mañana: false, tarde: false, noche: false },
        martes: { mañana: false, tarde: false, noche: false },
        miércoles: { mañana: false, tarde: false, noche: false },
        jueves: { mañana: false, tarde: false, noche: false },
        viernes: { mañana: false, tarde: false, noche: false },
        sábado: { mañana: false, tarde: false, noche: false },
        domingo: { mañana: false, tarde: false, noche: false }
    });
    const [newGalleryImages, setNewGalleryImages] = useState([]);
    const [galleryURLs, setGalleryURLs] = useState(store.user?.galeria || []);
    const [showEditBioModal, setShowEditBioModal] = useState(false);
    const [isEditingSchedule, setIsEditingSchedule] = useState(false);

    const user = store.user ? store.user : {};

    useEffect(() => {
        if (user.habilidades) {
            setSelectedHabilidades(user.habilidades);
        }
    }, [user.habilidades]);

    const updateToggle = (id) => {
        setToggle(id);
    };

    const handleBioSave = () => {
        actions.updateWalkerBio(user.id, bio);
        setShowEditBioModal(false);
    };

    const handleScheduleSave = () => {
        actions.updateWalkerSchedule(user.id, schedule);
        setIsEditingSchedule(false); // Desactiva el modo de edición después de guardar
    };

    const handleCheckboxChange = (day, period) => {
        if (isEditingSchedule) {
            setSchedule({
                ...schedule,
                [day]: {
                    ...schedule[day],
                    [period]: !schedule[day][period],
                },
            });
        }
    };

    const handleUploadImages = async () => {
        if (newGalleryImages.length > 0) {
            const urls = [];
            for (let image of newGalleryImages) {
                const url = await uploadImage(image);
                if (url) urls.push(url);
            }
            setGalleryURLs([...galleryURLs, ...urls]);
            actions.saveWalkerImages(user.id, [...galleryURLs, ...urls]);
            setNewGalleryImages([]);
        }
    };

    const daysOfWeek = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
    const periods = ["mañana", "tarde", "noche"];

    return (
        <div className="my-5 regBackground profile-info">
            <div className="my-6">
                <Navbar />
            </div>
            <div className="my-10 d-flex mx-auto">
                <div className="card d-flex my-5 mx-auto p-2 justify-content flex-row">
                    <div className="mx-2">
                        <img
                            className="img-fluid rounded-circle mb-3 profile-photo"
                            src={user.fotoPerfil || "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"}
                            alt={`Foto de perfil de ${user.nombre || 'usuario'}`}
                            style={{ width: "150px", height: "150px", objectFit: "cover", transition: "transform 0.3s ease" }}
                        />
                    </div>
                    <div className="text-left my-2 mx-2">
                        <h5 className="card-title">{user.nombre || "Nombre no disponible"}</h5>
                        <p className="card-text">Cuida en <strong>{user.distrito || "Ubicación no disponible"}</strong>.</p>
                        <a href="#" className="btn btnPrimary"><strong>45</strong> Calificaciones</a>
                    </div>
                    <div className="my-4 mx-2">
                        <h6>Habilidades del paseador:</h6>
                        {selectedHabilidades.length > 0 ? (
                            <div className="d-flex flex-wrap">
                                {selectedHabilidades.map((hab, index) => (
                                    <button key={index} className="btn btnSecondary m-1">
                                        {hab}
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <p className="text-muted">Aún no se han agregado habilidades.</p>
                        )}
                        <div className="mx-2 d-flex">
                            <AddHabilidad
                                selectedHabilidades={selectedHabilidades}
                                setSelectedHabilidades={setSelectedHabilidades}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="card profile-info d-flex align-items-center justify-content-center">
                <div className="col-12 tab p-5">
                    <ul className="d-flex nav nav-tabs">
                        <li className="flex-fill nav-item p-1" onClick={() => updateToggle(1)}><h5>Acerca de mí</h5></li>
                        <li className="flex-fill nav-item p-1" onClick={() => updateToggle(2)}><h5>Galería de fotos</h5></li>
                        <li className="flex-fill nav-item p-1" onClick={() => updateToggle(3)}><h5>Horarios</h5></li>
                        
                    </ul>

                    <div className={toggle === 1 ? "show-content" : "content"}>
                        <h1>Acerca de mí</h1>
                        <h5>{bio}</h5>
                        <button className="btn btnSecondary mt-2" onClick={() => setShowEditBioModal(true)}>Editar</button>
                    </div>

                    <div className={toggle === 2 ? "show-content" : "content"}>
                        <h1>Galería de fotos</h1>
                        <div className="card-group border-0 mx-auto">
                            {galleryURLs.map((url, index) => (
                                <div key={index} className="card border-0 bg-transparent">
                                    <img src={url} className="rounded" width="200" alt="Galería" />
                                </div>
                            ))}
                        </div>
                        <div className="border-0 d-flex my-2 flex-column w-25">
                            <label className="form-label fw-bold d-flex justify-content-center">Subir fotos</label>
                            <input
                                type="file"
                                name="fotosWalker"
                                accept=".jpg, .jpeg, .png"
                                multiple
                                className="btn btnPrimary"
                                onChange={(event) => setNewGalleryImages(Array.from(event.target.files))}
                            />
                            <button className="btn btnPrimary mt-2" onClick={handleUploadImages}>Actualizar fotos</button>
                        </div>
                    </div>

                    <div className={toggle === 3 ? "show-content" : "content"}>
                        <h1>Horarios</h1>
                        <button 
                            className="btn btnSecondary mb-3" 
                            onClick={() => setIsEditingSchedule(!isEditingSchedule)}
                        >
                            {isEditingSchedule ? "Guardar horarios" : "Editar horarios"}
                        </button>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Día</th>
                                    {periods.map((period) => (
                                        <th key={period}>{period.charAt(0).toUpperCase() + period.slice(1)}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {daysOfWeek.map((day) => (
                                    <tr key={day}>
                                        <td>{day.charAt(0).toUpperCase() + day.slice(1)}</td>
                                        {periods.map((period) => (
                                            <td key={period}>
                                                <input
                                                    type="checkbox"
                                                    checked={schedule[day][period]}
                                                    onChange={() => handleCheckboxChange(day, period)}
                                                    disabled={!isEditingSchedule} // Deshabilitar si no está en modo edición
                                                />
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {isEditingSchedule && (
                            <button className="btn btnPrimary mt-2" onClick={handleScheduleSave}>Guardar cambios</button>
                        )}
                    </div>
                </div>
            </div>

            {/* Modal para editar Acerca de mí */}
            {showEditBioModal && (
                <div className="modal fade show d-block" tabIndex="-1" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Editar Acerca de mí</h5>
                                <button type="button" className="btn-close" onClick={() => setShowEditBioModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <textarea
                                    className="form-control"
                                    rows="5"
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btnSecondary" onClick={() => setShowEditBioModal(false)}>Cancelar</button>
                                <button type="button" className="btn btnPrimary" onClick={handleBioSave}>Guardar cambios</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            
        </div>
    );
};
