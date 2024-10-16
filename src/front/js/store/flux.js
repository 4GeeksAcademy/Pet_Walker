import toast from "react-hot-toast";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			owner : null,
			walker : null,
			token: localStorage.getItem("token") || null,
			message: null,
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
			
			//FALTA COLOCAR LA FOTO DE PERFIL
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
			

			//FALTA COLOCAR LA FOTO DE PERFIL
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
				const resp = await fetch(process.env.BACKEND_URL + "/api/register-mascota", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						nombre: nombre,
						raza: raza,
						edad: edad,
						detalles: detalles
					})
				});
			
				const data = await resp.json();
			
				if (resp.ok) {
					console.log("Mascota creada:", data);
					toast.success("Tu mascota ha sido registrada! 🎉");
				} else {
					console.error("Error al crear mascota:", data);
					toast.error("Error al registrar a tu mascota 🛑");
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
						body: JSON.stringify({
							email: email,
							contraseña: contraseña
						})
					});
			
					if (resp.ok) {
						const data = await resp.json();
						
						localStorage.setItem("token", data.token); 
						setStore({ token: data.token, user: data.user }); 
						
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
			

			getUserLogged: async () => {
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
