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
					toast.success("Owner registered! 🎉");
				}
				else {
					toast.error("Error registering owner 🛑");
				}
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
					toast.success("Owner registered! 🎉");
				}
				else {
					toast.error("Error registering owner 🛑");
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
					toast.success("Walker registered! 🎉");
				}
				else {
					toast.error("Error registering Walker 🛑");
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
