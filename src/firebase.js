
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAuvnBiPd9jYq8X3O0vXiJC04ajUkXVAsw",
    authDomain: "brand-shop-a9926.firebaseapp.com",
    projectId: "brand-shop-a9926",
    storageBucket: "brand-shop-a9926.appspot.com",
    messagingSenderId: "900494937362",
    appId: "1:900494937362:web:ab2837e56c3af1964437cb",
    measurementId: "G-2H8TQ15J8D"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);