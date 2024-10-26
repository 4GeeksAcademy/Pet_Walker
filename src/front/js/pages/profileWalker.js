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
    const [walkerImgData, setwalkerImgData] = useState({
    fotosWalker: null,
});
    const updateWImgs = async () => {
        let imageWalkerURL = await uploadImage(walkerImgData)
        console.log(imageWalkerURL)
    }
    // const walkerImageURL = walkerImgData.fotosWalker ? await uploadImage(walkerImgData.fotosWalker) : null;
    // await actions.createWalkerProfile({
    //     ...walkerImgData,
    //     fotosWalker: walkerImageURL
    // });

    const user = store.user ? store.user : {};

    function updateToggle(id) {
        setToggle(id);
    }

    useEffect(() => {
        if (user.habilidades) {
            setSelectedHabilidades(user.habilidades);
        }
    }, [user.email]);

    return (
        <div className="my-5 regBackground">
            <div className="my-5">
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
                        <p className="card-text">En línea hace <strong>5 semanas</strong>.</p>
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
                        <li className="flex-fill nav-item p-1" onClick={() => updateToggle(1)}><h5>Acerca de mi</h5></li>
                        <li className="flex-fill nav-item p-1" onClick={() => updateToggle(2)}><h5>Galería de fotos</h5></li>
                        <li className="flex-fill nav-item p-1" onClick={() => updateToggle(3)}><h5>Horarios</h5></li>
                    </ul>

                    <div className={toggle === 1 ? "show-content" : "content"}>
                        <h1>Acerca de mi</h1>
                        <h5>Hola! Soy Alex y estaré muy agradecido de que me elijas como tu paseador. 
                            Tengo amplia experiencia en el cuidado de mascotas así como en un diplomado en primeros auxilios.
                            Estoy seguro de que si me escoges, no te arrepentirás.
                        </h5>
                    </div>

                    <div className={toggle === 2 ? "show-content" : "content"}>
                        <h1>Galería de fotos</h1>
                        
                        <div className="card-group border-0 mx-auto">
                            <div className="card border-0 bg-transparent">
                                <img src="https://images.unsplash.com/photo-1601758124277-f0086d5ab050?q=80&w=1820&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded" width="200" />
                            </div>
                            <div className="card border-0 bg-transparent">
                                <img src="https://images.unsplash.com/photo-1601758063541-d2f50b4aafb2?q=80&w=2005&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded" width="200" />
                            </div>
                            <div className="card border-0 bg-transparent">
                                <img src="https://images.unsplash.com/photo-1601758063890-1167f394febb?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded" width="200" />
                            </div> 
                        </div>
                        <div className="border-0 d-flex my-2 flex-column">
                            <label className="form-label fw-bold">Subir fotos</label> 
                            <input 
                                type="file" 
                                name="fotosWalker"
                                accept=".jpg, .jpeg, .png"
                                className="btn btnPrimary"
                                onChange={(event)=>setwalkerImgData(event.target.files[0])}
                            />
                            <button className="btn btnPrimary" onClick={()=>updateWImgs()}>Actualizar fotos</button>
                            </div>
                    </div>

                    <div className={toggle === 3 ? "show-content" : "content"}>
                        <h1>Horarios</h1>
                        <table>
                            <tr>
                                <th></th>
                                <th>Lu</th>
                                <th>Ma</th>
                                <th>Mi</th>
                                <th>Ju</th>
                                <th>Vi</th>
                                <th>Sa</th>
                            </tr>
                            <tr>
                                <td>Mañana</td>
                                <td>☑</td>
                                <td>☑</td>
                                <td>☑</td>
                                <td>☑</td>
                                <td>☑</td>
                                <td>☑</td>
                            </tr>
                            <tr>
                                <td>Tarde</td>
                                <td>☑</td>
                                <td>☑</td>
                                <td>☑</td>
                                <td>☑</td>
                                <td>☑</td>
                                <td>☑</td>
                            </tr>
                            <tr>
                                <td>Noche</td>
                                <td>☒</td>
                                <td>☑</td>
                                <td>☒</td>
                                <td>☑</td>
                                <td>☒</td>
                                <td>☒</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};
