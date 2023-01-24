// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, query, where } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfg6NL8AQKyyAK-azqSWCIBRpTkmbhaZw",
  authDomain: "cv-carl.firebaseapp.com",
  projectId: "cv-carl",
  storageBucket: "cv-carl.appspot.com",
  messagingSenderId: "1074095825587",
  appId: "1:1074095825587:web:0090262372aeed5ece46c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db  = await getFirestore(app);

async function getWork(selectedWork) {
    try {
        const workQuery = query(collection(db, 'jobs'), where ('id', '==', selectedWork));
        const result = await getDocs(workQuery)
        let resultWork = {};

        result.forEach((workValue) => {
            resultWork = workValue;
        })
        console.log(resultWork);
        return resultWork
    } catch (error) {
        console.log(error);
    }
}

export { getWork }