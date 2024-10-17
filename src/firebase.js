// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import toast from "react-hot-toast";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLWZudFOJfKzAf4xXbDpBPNXbPYa7CHvQ",
  authDomain: "paseaperros-7c693.firebaseapp.com",
  projectId: "paseaperros-7c693",
  storageBucket: "paseaperros-7c693.appspot.com",
  messagingSenderId: "536386842",
  appId: "1:536386842:web:fcc1337b320904562fe0a3",
  measurementId: "G-MNRPFSSP13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 const uploadImage = async (image) => {
    const storage = getStorage();
    const storageRef = ref(storage, `images/${image.name}`);

    const metadata = {
        contentType: image.type
    };

    try {
        const fileData = await uploadBytesResumable(storageRef, image, metadata);
        const downloadURL = await getDownloadURL(fileData.ref);
        console.log("File available at", downloadURL);
        return downloadURL
    } catch (error) {
        console.log(error)
        return null;
    }
 }



 export default uploadImage;   
