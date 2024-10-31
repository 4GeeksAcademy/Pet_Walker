import toast from "react-hot-toast";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			owner : null,
			walker : null,
			token: localStorage.getItem("token") || null,
			message: null,
			filteredWalkers: [],
			allWalkers: [],
			paseos: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			
			createOwnerProfile: async (formData) => { 
				const resp = await fetch(process.env.BACKEND_URL + "/api/register-owner", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						nombre: formData.nombre,
						apellido: formData.apellido,
						edad: formData.edad,
						telefono: formData.telefono,
						email: formData.email,
						direccion: formData.direccion,
						distrito: formData.distrito,
						fotoPerfil: formData.fotoPerfil,  // Incluir fotoPerfil en el request
						contraseña: formData.contraseña
					})
				});
			
				const data = await resp.json();
			
				if (resp.ok) {
					localStorage.setItem("token", data.token);
					setStore({ owner: data.owner });
					setStore({ token: data.token });
					toast.success("Dueño creado!! 🎉");
				} else {
					toast.error("Error al registrar al dueño 🛑");
					console.error("Error:", data.msg);
				}
			},
		

			createWalkerProfile: async (formData) => {
				const resp = await fetch(process.env.BACKEND_URL + "/api/register-walker", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						nombre: formData.nombre,
						apellido: formData.apellido,
						edad: formData.edad,
						telefono: formData.telefono,
						email: formData.email,
						direccion: formData.direccion,
						distrito: formData.distrito,
						fotoPerfil: formData.fotoPerfil,  // Asegúrate de incluir fotoPerfil
						contraseña: formData.contraseña
					})
				});
			
				const data = await resp.json();
			
				if (resp.ok) {
					localStorage.setItem("token", data.token);
					setStore({ walker: data.walker });
					setStore({ token: data.token });
					toast.success("Paseador registrado! 🎉");
				} else {
					toast.error("Error al registrar al paseador 🛑");
					console.error("Error:", data.msg);
				}
			},
			
			createMascota: async (email, nombre, raza, edad, detalles) => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/register-mascota", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + getStore().token  // Si es necesario autenticación
						},
						body: JSON.stringify({
							email: email,
							nombre: nombre,
							raza: raza,
							edad: edad,
							detalles: detalles
						}),
					});
			
					const data = await resp.json();
			
					if (resp.ok) {
						console.log("Mascota creada:", data);
						toast.success("Tu mascota ha sido registrada! 🎉");
					} else {
						console.error("Error al crear mascota:", data);
						toast.error("Error al registrar a tu mascota 🛑");
					}
				} catch (error) {
					console.error("Error al crear mascota:", error);
					toast.error("Error de conexión al registrar la mascota 🛑");
				}
			},
			

			getMascotasByOwner: async (email) => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + `/api/owner/${email}/mascotas`, {
						method: "GET",
						headers: {
							"Content-Type": "application/json"
						}
					});
					
					const data = await resp.json();
					
					if (resp.ok) {
						setStore({ mascotas: data });
						console.log("Mascotas del owner:", data);
					} else {
						toast.error("Error al obtener las mascotas.");
					}
				} catch (error) {
					console.error("Error al obtener las mascotas:", error);
					toast.error("Error de conexión al obtener las mascotas.");
				}
			},			
			
			login: async (email, contraseña) => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/login", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({ email, contraseña })
					});
			
					if (resp.ok) {
						const data = await resp.json();
						localStorage.setItem("token", data.token);
						setStore({ token: data.token, user: { ...data.user, tipo: data.tipo_usuario } });
			
						// Llama a `getUserLogged` después de iniciar sesión para asegurarte de tener los datos actualizados
						await getActions().getUserLogged();
			
						toast.success("¡Ingresaste con éxito!");
					} else {
						const errorData = await resp.json();
						toast.error(errorData.msg || "¡Revisa tu correo o contraseña!");
					}
				} catch (error) {
					console.error("Error en el login:", error);
					toast.error("Error de conexión con el servidor");
				}
			},			

			
			logout: () => {
				localStorage.removeItem("token"); 
				setStore({
					token: null,
					user: null
				});
				toast.success("¡Sesión cerrada exitosamente!"); 
			},


			getUserLogged: async () => {
				if (!getStore().token) return
				const resp = await fetch(process.env.BACKEND_URL + "/api/user", {
					headers: {
						Authorization: "Bearer " + getStore().token
					}
				});
				if (resp.ok) {
					toast.success("User logged in! 🎉");
				} else {
					localStorage.removeItem("token");
					setStore({ token: null });
				}
				const data = await resp.json();
				setStore({ user: data });
			},

			updateWalkerHabilidades: async (walkerId, habilidades) => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + `/api/walker/${walkerId}/habilidades`, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							habilidades: habilidades
						})
					});
			
					if (resp.ok) {
						const updatedWalker = await resp.json();
						setStore({ user: updatedWalker });  // Actualizamos el usuario con las nuevas habilidades
						toast.success("Habilidades actualizadas con éxito!");
					} else {
						const errorData = await resp.json();
						toast.error(errorData.msg || "Error al actualizar habilidades");
					}
				} catch (error) {
					console.error("Error al actualizar habilidades:", error);
					toast.error("Error de conexión al actualizar habilidades");
				}
			},
			
			saveWalkerImages: async (walkerId, imagesURLs) => {
                try {
                    const resp = await fetch(`${process.env.BACKEND_URL}/api/walker/${walkerId}/gallery`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            images: imagesURLs
                        }),
                    });

                    if (resp.ok) {
                        const updatedWalker = await resp.json();
                        setStore({ user: updatedWalker });  // Update walker profile in the store
                        toast.success("Galería actualizada con éxito!");
                    } else {
                        const errorData = await resp.json();
                        toast.error(errorData.msg || "Error al actualizar galería");
                    }
                } catch (error) {
                    console.error("Error al actualizar galería:", error);
                    toast.error("Error de conexión al actualizar galería");
                }
            },

            // Existing action to update 'Acerca de mí' text
            updateWalkerBio: async (walkerId, newBio) => {
                try {
                    const resp = await fetch(`${process.env.BACKEND_URL}/api/walker/${walkerId}/bio`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            bio: newBio
                        })
                    });

                    if (resp.ok) {
                        const updatedWalker = await resp.json();
                        setStore({ user: updatedWalker });  // Update walker profile in the store
                        toast.success("Acerca de mí actualizado con éxito!");
                    } else {
                        const errorData = await resp.json();
                        toast.error(errorData.msg || "Error al actualizar 'Acerca de mí'");
                    }
                } catch (error) {
                    console.error("Error al actualizar 'Acerca de mí':", error);
                    toast.error("Error de conexión al actualizar 'Acerca de mí'");
                }
            },

            // Action to update the schedule of the walker
            updateWalkerSchedule: async (walkerId, schedule) => {
				try {
					const resp = await fetch(`${process.env.BACKEND_URL}/api/walker/${walkerId}/schedule`, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + getStore().token, // Token si es necesario
						},
						body: JSON.stringify({
							schedule: schedule, // Asegúrate de enviar los datos correctos
						}),
					});
			
					if (resp.ok) {
						const updatedWalker = await resp.json();
						setStore({ user: updatedWalker });
						toast.success("¡Horario actualizado con éxito!");
					} else {
						toast.error("Error al actualizar horario");
						console.error("Error en el servidor:", await resp.json());
					}
				} catch (error) {
					console.error("Error al actualizar horarios:", error);
					toast.error("Error al actualizar horarios: " + error.message);
				}
			},
			

			//filtrado para busqueda de walkers:

			loadAllWalkers: async () => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/walkers");
					if (resp.ok) {
						const data = await resp.json();
						setStore({ allWalkers: data, filteredWalkers: data });
					} else {
						console.error("Error al cargar los paseadores");
					}
				} catch (error) {
					console.error("Error en la conexión con el servidor", error);
				}
			},

			filterWalkers: (habilidades, distrito) => {
				const store = getStore();
				let filtered = [];

				// Filtrar por habilidades
				if (habilidades.length > 0) {
					filtered = store.allWalkers.filter(walker =>
						habilidades.every(hab => walker.habilidades.includes(hab))
					);
				}

				// // Filtrar por experiencia
				// if (experiencia) {
				// 	filtered = filtered.filter(walker => {
				// 		if (experiencia === "menos1") return walker.experiencia < 1;
				// 		if (experiencia === "mas1") return walker.experiencia >= 1 && walker.experiencia < 3;
				// 		if (experiencia === "mas3") return walker.experiencia >= 3;
				// 		return true;
				// 	});
				// }

				// Filtrar por distrito
				if (distrito) {
					filtered = store.allWalkers.filter(walker => walker.distrito === distrito);
				}
				console.log(filtered)
				setStore({ filteredWalkers: filtered });
			},


			getWalkerById: async (walkerId) => {
                try {
                    const response = await fetch(`${process.env.BACKEND_URL}/api/walker/${walkerId}`);
                    if (response.ok) {
                        const walker = await response.json();
                        setStore({ walker }); 
                    } else {
                        const error = await response.json();
                        toast.error(error.msg || "Error al cargar el walker.");
                    }
                } catch (error) {
                    console.error("Error al obtener el walker:", error);
                    toast.error("Error de conexión al obtener el walker.");
                }
            },

			getPaseosByOwner: async (email) => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + `/api/owner/${email}/paseos`, {
						method: "GET",
						headers: {
							"Content-Type": "application/json"
						}
					});
					
					const data = await resp.json();
					
					if (resp.ok) {
						setStore({ paseos: data });
						console.log("Paseos del owner:", data);
					} else {
						toast.error("Error al obtener los paseos.");
					}
				} catch (error) {
					console.error("Error al obtener las paseos:", error);
					toast.error("Error de conexión al obtener las paseos.");
				}
			},	

			getPaseosByWalker: async (email) => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + `/api/walker/${email}/paseos`, {
						method: "GET",
						headers: {
							"Content-Type": "application/json"
						}
					});
					
					const data = await resp.json();
					
					if (resp.ok) {
						setStore({ paseos: data });
						console.log("Paseos del walker:", data);
					} else {
						toast.error("Error al obtener los paseos.");
					}
				} catch (error) {
					console.error("Error al obtener las paseos:", error);
					toast.error("Error de conexión al obtener las paseos.");
				}
			},	
			

            // cambiarEstadoPaseo: async (paseoId) => {
            //     const token = localStorage.getItem("token");
            //     try {
            //         const resp = await fetch(`${process.env.BACKEND_URL}/paseo/${paseoId}/estado`, {
            //             method: "PUT",
            //             headers: {
            //                 "Content-Type": "application/json",
            //                 "Authorization": `Bearer ${token}`
            //             }
            //         });
            //         if (resp.ok) {
            //             getActions().verPaseos();  // Recargar paseos después de actualizar el estado
            //             toast.success("Estado del paseo cambiado a Terminado");
            //         } else {
            //             console.error("Error al cambiar estado del paseo");
            //         }
            //     } catch (error) {
            //         console.error("Error al cambiar estado del paseo:", error);
            //     }
            // },
			

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
