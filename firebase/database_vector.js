import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const quaterneryAppGeoText= {
    apiKey: "AIzaSyAaOv9nrPeVxmxwCxslwdRVpB8XpanKe00",
    authDomain: "geochinalco-vector.firebaseapp.com",
    databaseURL: "https://geochinalco-vector-default-rtdb.firebaseio.com",
    projectId: "geochinalco-vector",
    storageBucket: "geochinalco-vector.appspot.com",
    messagingSenderId: "787836570501",
    appId: "1:787836570501:web:9c9e0dca68c01233dc52ec"
};

// Initialize Firebase
const quaterneryAppText = initializeApp(quaterneryAppGeoText, 'quaterneryVec');
export const appVector =  getDatabase(quaterneryAppText);