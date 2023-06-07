
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyByhHWGP8LeogO38MjrXdt53W09baCqTRw",
  authDomain: "login-aula-mobiles.firebaseapp.com",
  projectId: "login-aula-mobiles",
  storageBucket: "login-aula-mobiles.appspot.com",
  messagingSenderId: "7752006270",
  appId: "1:7752006270:web:38f27951a648742693b62f"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);