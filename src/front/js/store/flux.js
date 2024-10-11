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
			createOwnerProfile: async (nombre, apellido, edad, telefono, email, direccion, distrito, contraseña) => { 
				const resp = await fetch(process.env.BACKEND_URL + "/api/register-owner", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						nombre: nombre,
						apellido: apellido,
						edad: edad,
						telefono: telefono,
						email: email,
						direccion: direccion,
						distrito: distrito,
						contraseña: contraseña
					})
				});
				const data = await resp.json();

				localStorage.setItem("token", data.token);

				setStore({ owner: data.owner });
				setStore({ token: data.token });

				if (resp.ok) {
					toast.success("Dueño creado!! 🎉");
				}
				else {
					toast.error("Error al registrar al dueño 🛑");
				}
			},


			//FALTA COLOCAR LA FOTO DE PERFIL
			createWalkerProfile: async (nombre, apellido, edad, telefono, email, direccion, distrito, contraseña) => { 
				const resp = await fetch(process.env.BACKEND_URL + "/api/register-walker", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						nombre: nombre,
						apellido: apellido,
						edad: edad,
						telefono: telefono,
						email: email,
						direccion: direccion,
						distrito: distrito,
						contraseña: contraseña
					})
				});
				const data = await resp.json();

				localStorage.setItem("token", data.token);

				setStore({ walker: data.walker });
				setStore({ token: data.token });

				if (resp.ok) {
					toast.success("Paseador registrado! 🎉");
				}
				else {
					toast.error("Error al registrar al paseador 🛑");
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

				localStorage.setItem("token", data.token);

				setStore({ mascota: data.mascota });
				setStore({ token: data.token });
			
				if (resp.ok) {
					console.log("Mascota creada:", data);
					toast.success("Tu mascota ha sido registrada! 🎉");
				} else {
					console.error("Error al crear mascota:", data);
					toast.error("Error al registrar a tu mascota 🛑");
				}
			},

			login: async (email, contraseña) => {
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
				const data = await resp.json();

				localStorage.setItem("token", data.token);

				setStore({ token: data.token });
				setStore({ user: data.user });

				if (resp.ok) {
					toast.success("¡Ingresaste con éxito!");
				}
				else {
					toast.error("¡Revisa tu correo o contraseña!");
				}
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
