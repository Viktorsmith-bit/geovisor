import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth} from "firebase/auth";

const quaterneryAppConfig = {
    apiKey: "AIzaSyBkw9Qp-kSeEdm-zQ5_pM4kErctxRo_qZo",
    authDomain: "geovisor-986e8.firebaseapp.com",
    databaseURL: "https://geovisor-986e8-default-rtdb.firebaseio.com",
    projectId: "geovisor-986e8",
    storageBucket: "geovisor-986e8.appspot.com",
    messagingSenderId: "109816430290",
    appId: "1:109816430290:web:e3b51b98a9c178fd75770b"
};

// Initialize Firebase
const quaterneryApp = initializeApp(quaterneryAppConfig, 'quaternery');

export const app =  getDatabase(quaterneryApp);
export const auth = getAuth(quaterneryApp);