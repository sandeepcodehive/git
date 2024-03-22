import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8z0lxm-aFe3hj_cyS8jvwj8Qz1nlFmgs",
    authDomain: "fir-gpt-64a19.firebaseapp.com",
    projectId: "fir-gpt-64a19",
    storageBucket: "fir-gpt-64a19.appspot.com",
    messagingSenderId: "161648670053",
    appId: "1:161648670053:web:b9f53bb03d549c23541d8c"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };