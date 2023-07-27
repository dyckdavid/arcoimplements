import firebase, { initializeApp } from 'firebase/app'
import 'firebase/firestore'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCIUTlvXlcw44itH8x7xQoYfFfo3gjJwVo",
    authDomain: "arco-implements.firebaseapp.com",
    projectId: "arco-implements",
    storageBucket: "arco-implements.appspot.com",
    messagingSenderId: "746823771228",
    appId: "1:746823771228:web:0d98b9488d59940ca3f299",
    measurementId: "G-X4MFG7HHSJ"
};


const app = initializeApp(firebaseConfig)
const db = getFirestore(app);

export { db }
