import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const quaterneryAppGeoText= {
    apiKey: "AIzaSyCOC9lpyEUDfsQrN2-Uh-hdi6XisvKkJOY",
    authDomain: "geochinalco-db.firebaseapp.com",
    databaseURL: "https://geochinalco-db-default-rtdb.firebaseio.com",
    projectId: "geochinalco-db",
    storageBucket: "geochinalco-db.appspot.com",
    messagingSenderId: "898518068415",
    appId: "1:898518068415:web:78c4e08c46eb85916d2a0a"
};

// Initialize Firebase
const quaterneryAppText = initializeApp(quaterneryAppGeoText, 'quaterneryText');
export const app =  getDatabase(quaterneryAppText);