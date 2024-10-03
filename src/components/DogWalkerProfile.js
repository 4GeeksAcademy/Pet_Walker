import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DogWalkerProfile.css';

const DogWalkerProfile = () => {
    const [walker, setWalker] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editedWalker, setEditedWalker] = useState({});

    useEffect(() => {
        const fetchWalker = async () => {
            const response = await axios.get('/api/walker');
            setWalker(response.data);
            setEditedWalker(response.data);
        };

        fetchWalker();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedWalker(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put('/api/walker', editedWalker);
        setWalker(editedWalker);
        setIsEditing(false);
    };

    if (!walker) return <div>Cargando...</div>;

    return (
        <div className="profile-container">
            <h1>{walker.name}</h1>
            <p className="bio">{walker.bio}</p>
            <div className="rating">⭐ {walker.rating}</div>
            <h2>Perros que pasea:</h2>
            <ul>
                {walker.dogs.map((dog, index) => (
                    <li key={index}>
                        {dog.name} - {dog.breed}
                    </li>
                ))}
            </ul>
            <h2>Comentarios:</h2>
            <ul className="reviews">
                {walker.reviews.map(review => (
                    <li key={review.id}>{review.text}</li>
                ))}
            </ul>
            <button onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? "Cancelar" : "Editar Perfil"}
            </button>

            {isEditing && (
                <form onSubmit={handleSubmit}>
                    <h2>Editar Información</h2>
                    <label>
                        Nombre:
                        <input
                            type="text"
                            name="name"
                            value={editedWalker.name}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Biografía:
                        <textarea
                            name="bio"
                            value={editedWalker.bio}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Calificación:
                        <input
                            type="number"
                            name="rating"
                            value={editedWalker.rating}
                            onChange={handleChange}
                            step="0.1"
                            min="0"
                            max="5"
                        />
                    </label>
                    <button type="submit">Guardar Cambios</button>
                </form>
            )}
        </div>
    );
};

export default DogWalkerProfile;
